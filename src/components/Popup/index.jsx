import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import { StyledPopup } from './index.style';

const Popup = (props) => {
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
    <StyledPopup>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="popup"
      >
        <Box>
          <Box className="closeIcon" display="flex" justifyContent="flex-end">
            <IconButton
              aria-label="close"
              className="closeButton"
              onClick={onClose}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Box display="flex" paddingX={3} pb={2} className="contentContainer">
            <Box>
              <img src="/img/note.svg" alt="" />
            </Box>
            <Box>
              <DialogTitle id="alert-dialog-title">{title}:</DialogTitle>
              <DialogContent>
                <DialogContentText
                  id="alert-dialog-description"
                  className="content"
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
    </StyledPopup>
  );
};

export default Popup;
