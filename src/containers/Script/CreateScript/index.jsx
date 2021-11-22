import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Button,
  FormControl,
  Grid,
  Input,
  InputAdornment,
} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

import { ROUTES } from '@src/constants';
import CallContent from '@src/components/CallContent';
import CallIvr from '@src/components/CallIvr';
import VoiceSettings from '@src/components/VoiceSettings';

import useStyles from './index.style';

const CreateScript = () => {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation(['createScript']);

  const handleBack = () => {
    history.push(ROUTES.SCRIPT);
  };

  return (
    <div>
      <Grid container>
        <Button
          className={classes.backButton}
          startIcon={<KeyboardArrowLeftIcon />}
          onClick={handleBack}
        >
          {t('back')}
        </Button>
      </Grid>
      <Grid className={classes.mt10} container justifyContent="space-between">
        <div className={classes.nameContainer}>
          <span>{t('sampleScript')} - </span>
          <FormControl className={classes.formControl}>
            <Input
              classes={{ input: classes.nameInput }}
              placeholder={t('enterScriptName')}
              endAdornment={
                <InputAdornment className={classes.createIcon} position="end">
                  <CreateIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <Button
          className={classes.createButton}
          variant="contained"
          color="primary"
        >
          {t('saveSampleScript')}
        </Button>
      </Grid>
      <VoiceSettings />
      <CallContent />
      <CallIvr />
    </div>
  );
};

export default CreateScript;
