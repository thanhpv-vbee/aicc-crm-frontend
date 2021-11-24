/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Typography,
  Badge,
  Menu,
  MenuItem,
  Box,
  ListItemIcon,
  IconButton,
} from '@mui/material';
import i18n from '@src/languages';
import { StyledNavbar } from './index.style';

const userPattern = {
  avatar:
    'https://scontent.xx.fbcdn.net/v/t1.15752-9/cp0/257921245_4804305759609171_4246325277116890681_n.png?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_ohc=qZjURTtKqf4AX8Qma5s&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=93dbf2159ea54b8fda91ea9d13217e50&oe=61B7923D',
  name: 'User102',
  status: true,
};

const languages = [
  { value: 'en-US', label: 'English', iconPath: 'en-flag.svg' },
  { value: 'vi', label: 'Vietnamese', iconPath: 'vi-flag.svg' },
];

const CustomMenu = ({ anchorEl, handleClose, items, handleClick }) => {
  const { t } = useTranslation();
  return (
    <Menu
      anchorEl={anchorEl}
      keepMounted={false}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      PaperProps={{
        style: { transform: 'translateX(10px) translateY(50px)' },
      }}
    >
      {items.map((item) => (
        <MenuItem key={item.value} onClick={() => handleClick(item.value)}>
          <ListItemIcon className="menu-item-icon">
            <img src={`/img/${item.iconPath}`} alt={item.value} />
          </ListItemIcon>
          <Typography variant="inherit"> {t(item.label)}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

const LanguageSelect = () => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChangeLanguage = (value) => {
    i18n.changeLanguage(value);
    setAnchorEl(null);
  };

  const handleOpenLanguage = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseLanguage = () => {
    setAnchorEl(null);
  };

  const getLanguageIcon = (value) => {
    const langValue = value || 'en-US';
    const language = languages.find((lang) => lang.value === langValue);
    return language.iconPath;
  };

  return (
    <>
      <Button
        color="inherit"
        aria-haspopup="true"
        className="lang-btn"
        startIcon={
          <img src={`/img/${getLanguageIcon(i18n.language)}`} alt="diamond" />
        }
        onClick={handleOpenLanguage}
      >
        <Typography className="lang-text">{t(i18n.language)}</Typography>
      </Button>
      <CustomMenu
        anchorEl={anchorEl}
        handleClose={handleCloseLanguage}
        items={languages}
        handleClick={handleChangeLanguage}
      />
    </>
  );
};

const Account = ({ user = userPattern }) => {
  const { t } = useTranslation();

  return (
    <div className="account">
      <div className="avatar-box">
        <img src={user.avatar} alt="avatar" className="avatar" />
        <div className="status-dot" />
      </div>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Typography className="text name-text">{user.name}</Typography>
        <Typography className="text profile-text">{t('profile')}</Typography>
      </Box>
    </div>
  );
};

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <StyledNavbar>
      <div className="content">
        <Button
          variant="contained"
          color="primary"
          className="button"
          startIcon={<img src="/img/diamond-icon.svg" alt="diamond" />}
        >
          {t('recharge')}
        </Button>
        <div className="balance-box">
          <Typography className="text title-text">
            {t('remainBalance')}:
          </Typography>
          <Typography className="text value-text">23.029.401</Typography>
        </div>
      </div>
      <div className="content righ-container">
        <IconButton aria-label="notification" size="medium">
          <Badge
            badgeContent={4}
            color="primary"
            classes={{
              badge: 'badge',
            }}
          >
            <img src="/img/notification-icon.svg" alt="notification" />
          </Badge>
        </IconButton>
        <LanguageSelect />
        <div className="phone">
          <IconButton aria-label="phone" size="medium">
            <img
              src="/img/phone-icon.svg"
              alt="phone"
              className="phone-image"
            />
          </IconButton>
        </div>
        <Account />
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
