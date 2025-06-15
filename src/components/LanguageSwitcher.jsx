'use client';

import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  Avatar,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useState } from 'react';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lng) => {
    const { pathname, asPath, query } = router;
    i18n.changeLanguage(lng);
    router.push({ pathname, query }, asPath, { locale: lng });
    handleClose();
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        aria-controls={open ? 'lang-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        color="inherit"
      >
        <LanguageIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="lang-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            mt: 1.5,
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.15))',
            '& .MuiAvatar-root': {
              width: 24,
              height: 24,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {languages.map(({ code, name, flag }) => (
          <MenuItem key={code} onClick={() => changeLanguage(code)}>
            <ListItemIcon>
              <Avatar sx={{ width: 24, height: 24 }}>{flag}</Avatar>
            </ListItemIcon>
            {name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}