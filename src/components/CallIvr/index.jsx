import React, { useState } from 'react';
import * as uuid from 'uuid';
import { useTranslation } from 'react-i18next';
import { Button, Grid, IconButton, Popover, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import { StyledCallIvr } from './index.style';
import { numpad } from './data';

const CallIvr = () => {
  const { t } = useTranslation(['createScript']);

  const [keys, setKeys] = useState([]);
  const [currentKey, setCurrentKey] = useState();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAddKey = (key) => {
    const newKeys = [...keys];
    const keyId = uuid.v4();

    if (newKeys.length === 0) setCurrentKey(keyId);

    newKeys.push({ id: keyId, key, content: '' });
    setKeys(newKeys);
    handleClose();
  };

  const handleSelectKey = (key) => {
    setCurrentKey(key.id);
  };

  const handleRemoveKey = (keyId) => {
    if (currentKey === keyId) {
      setCurrentKey();
    }
    setKeys((prev) => prev.filter((e) => e.id !== keyId));
  };

  const handleRemoveAll = () => {
    setKeys([]);
    setCurrentKey();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'numpad-popover' : undefined;

  return (
    <StyledCallIvr>
      <Grid container justifyContent="space-between" alignItems="center">
        <div className="header">
          <h3 className="headerText">{t('feedbackKey')}</h3>
          <Tooltip title="title" placement="top">
            <HelpOutlineIcon color="primary" />
          </Tooltip>
        </div>
        {keys.length > 0 && (
          <Button
            className="deleteButton"
            color="primary"
            onClick={handleRemoveAll}
          >
            {t('removeAll')}
          </Button>
        )}
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={3} sm={2} xl={1}>
          {keys.map((item) => {
            const { id: keyId, key } = item;
            return (
              <div key={keyId} className="keyContainer">
                <Button
                  className={`keyButton ${
                    keyId === currentKey && 'keyButtonSelected'
                  }`}
                  onClick={() => handleSelectKey(item)}
                >
                  {key}
                </Button>
                <IconButton
                  className="clearButton"
                  onClick={() => handleRemoveKey(keyId)}
                >
                  <ClearIcon />
                </IconButton>
              </div>
            );
          })}
          <div className="keyContainer">
            <Button
              className="keyButton keyButtonAdd"
              aria-describedby={id}
              onClick={handleClick}
            >
              <AddIcon />
            </Button>
            <Popover
              classes={{ paper: 'paper' }}
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <div
                className="numpadContainer"
                autoFocusItem={open}
                id="composition-menu"
                aria-labelledby="composition-button"
              >
                {numpad.map((key) => (
                  <Button
                    className="numpad"
                    key={key}
                    onClick={() => handleAddKey(key)}
                  >
                    {key}
                  </Button>
                ))}
              </div>
            </Popover>
          </div>
        </Grid>
        {currentKey && (
          <Grid item xs={3} sm={10} xl={11}>
            <p>{currentKey}</p>
          </Grid>
        )}
      </Grid>
    </StyledCallIvr>
  );
};

export default CallIvr;
