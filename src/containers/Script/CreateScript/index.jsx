import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Button,
  FormControl,
  Grid,
  Input,
  InputAdornment,
} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import { ROUTES } from '@src/constants';
import CallContent from '@src/components/CallContent';
import CallIvr from '@src/components/CallIvr';
import VoiceSettings from '@src/components/VoiceSettings';

import { StyledCreateScript } from './index.style';

const CreateScript = () => {
  const history = useHistory();
  const { t } = useTranslation(['createScript']);

  const handleBack = () => {
    history.push(ROUTES.SCRIPT);
  };

  return (
    <StyledCreateScript>
      <Grid container>
        <Button
          className="backButton"
          startIcon={<KeyboardArrowLeftIcon />}
          onClick={handleBack}
        >
          {t('back')}
        </Button>
      </Grid>
      <Grid className="mt10" container justifyContent="space-between">
        <div className="nameContainer">
          <span>{t('sampleScript')} - </span>
          <FormControl className="formControl">
            <Input
              classes={{ input: 'nameInput' }}
              placeholder={t('enterScriptName')}
              endAdornment={
                <InputAdornment className="createIcon" position="end">
                  <CreateIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <Button className="createButton" variant="contained" color="primary">
          {t('saveSampleScript')}
        </Button>
      </Grid>
      <VoiceSettings />
      <CallContent />
      <CallIvr />
    </StyledCreateScript>
  );
};

export default CreateScript;
