'use client';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  useScrollTrigger,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

const drawerWidth = 240;

const ElevationScroll = ({ children, window }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const AppNavBar = ({ window }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation('common');
  const router = useRouter();

  const navItems = [
    { title: t('nav.home'), url: '/' },
    { title: t('nav.about'), url: '/about' },
    { title: t('nav.program'), url: '/program' },
    { title: t('nav.contact'), url: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.url} disablePadding>
            <ListItemButton component={Link} href={item.url} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <ElevationScroll>
        <AppBar component="nav" position="fixed">
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                MUI
              </Typography>

              <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
                {navItems.map((item) => (
                  <Button key={item.url} component={Link} href={item.url} sx={{ color: '#fff' }}>
                    {item.title}
                  </Button>
                ))}
              </Box>

              <Box sx={{ ml: 'auto' }}>
                <LanguageSwitcher />
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

AppNavBar.propTypes = {
  window: PropTypes.func,
};

export default AppNavBar;