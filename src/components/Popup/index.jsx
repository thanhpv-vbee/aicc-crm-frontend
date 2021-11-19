import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Box, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useTranslation } from 'react-i18next';
import useStyles from './index.style';

const Popup = (props) => {
  const classes = useStyles();
  const { t } = useTranslation(['common']);
  const {
    open,
    onOk,
    onClose,
    title = t('note'),
    okMessage = t('confirm'),
    cancelMessage = t('goBack'),
    content = t('areYouSureWithDecision'),
  } = props;

  const handleOk = () => {
    onOk();
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={classes.popup}
    >
      <Box>
        <Box
          className={classes.closeIcon}
          display="flex"
          justifyContent="flex-end"
        >
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          display="flex"
          paddingX={3}
          pb={2}
          className={classes.contentContainer}
        >
          <Box>
            <img src="/img/note.svg" alt="" />
          </Box>
          <Box>
            <DialogTitle id="alert-dialog-title">{title}:</DialogTitle>
            <DialogContent>
              <DialogContentText
                id="alert-dialog-description"
                className={classes.content}
              >
                {content}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose} color="primary">
                {cancelMessage}
              </Button>
              <Button
                onClick={handleOk}
                variant="contained"
                color="primary"
                autoFocus
              >
                {okMessage}
              </Button>
            </DialogActions>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default Popup;
