'use client';

import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import {
  Box,
  MenuItem,
  Select,
} from '@mui/material';
import React from 'react';
import Image from 'next/image';

const languages = [
  { code: 'en', name: 'English', flag: '/GB.svg' },
  { code: 'cs', name: 'Čeština', flag: '/CZ.svg' },
  { code: 'uk', name: 'Українська', flag: '/UA.svg' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const currentLang = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const handleChange = (event) => {
    const newLang = event.target.value;
    const { pathname, asPath, query } = router;
    i18n.changeLanguage(newLang);
    router.push({ pathname, query }, asPath, { locale: newLang });
  };

  return (
      <Select
        id="language-select"
        name="language"
        value={currentLang.code}
        onChange={handleChange}
        variant="standard"
        disableUnderline
        sx={{
          '& .MuiSelect-select': {
            display: 'flex',
            alignItems: 'center',
          },
          color: 'inherit',
          backgroundColor: 'transparent',
          '& .MuiSelect-icon': {
            color: 'inherit',
          },
        }}
        MenuProps={{
          disableScrollLock: true,
          PaperProps: {
            sx: { minWidth: 30 },
          },
        }}
      >
        {languages.map(({ code, name, flag }) => (
          <MenuItem key={code} value={code}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {flag && (
                <Image
                  src={flag}
                  alt={name}
                  width={20}
                  height={12}
                  style={{ objectFit: 'cover' }}
                />
              )}
            </Box>
          </MenuItem>
        ))}
      </Select>
  );
};

export default LanguageSwitcher;