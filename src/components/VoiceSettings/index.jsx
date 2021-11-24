import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Collapse,
  Grid,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  Slider,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { StyledVoiceSettings } from './index.style';
import { languageData, soundtrackData, voiceData } from './data';

const VoiceSettings = ({ className = '' }) => {
  const { t } = useTranslation(['createScript']);

  const [expanded, setExpanded] = useState(true);
  const [valueSlider, setValueSlider] = useState(50);

  return (
    <StyledVoiceSettings>
      <div className={`whiteBox ${className !== undefined && 'className'}`}>
        <div className="header">
          <h3 className="title">{t('chooseVoice')}</h3>
          {!expanded && (
            <Button
              className="expandButton"
              endIcon={<ExpandMoreIcon />}
              onClick={() => setExpanded(true)}
              color="primary"
            >
              {t('expand')}
            </Button>
          )}
        </div>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Grid className="content" container spacing={2}>
            <Grid item xs={6} sm={3} md={2}>
              <p className="label">{t('language')}</p>
              <Select
                className="dashedBorder textField"
                variant="outlined"
                IconComponent={KeyboardArrowDownIcon}
                fullWidth
              >
                {languageData.map((type, key) => (
                  <MenuItem key={key.toString()} value={key}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <p className="label">{t('chooseVoice')}</p>
              <Select
                className="dashedBorder textField"
                variant="outlined"
                IconComponent={KeyboardArrowDownIcon}
                fullWidth
              >
                {voiceData.map((type, key) => (
                  <MenuItem key={key.toString()} value={key}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6} sm={3} md={3}>
              <p className="label">{t('rate')}</p>
              <div className="voiceWrapper">
                <OutlinedInput
                  className="textField mr20 dashedBorder rateInput"
                  defaultValue="1.0"
                  endAdornment={
                    <InputAdornment position="end">x</InputAdornment>
                  }
                  fullWidth
                  inputProps={{
                    'aria-labelledby': 'input-slider',
                  }}
                />
                <Slider
                  className="slider"
                  value={valueSlider}
                  onChange={(e, value) => setValueSlider(value)}
                  aria-labelledby="input-slider"
                />
              </div>
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <p className="label">{t('soundtrack')}</p>
              <Select
                className="dashedBorder textField"
                variant="outlined"
                IconComponent={KeyboardArrowDownIcon}
                fullWidth
              >
                {soundtrackData.map((type, key) => (
                  <MenuItem key={key.toString()} value={key}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item container justifyContent="flex-end">
              <Button
                className="expandButton"
                endIcon={<ExpandLessIcon />}
                onClick={() => setExpanded(false)}
                color="primary"
              >
                {t('collapse')}
              </Button>
            </Grid>
          </Grid>
        </Collapse>
      </div>
    </StyledVoiceSettings>
  );
};

export default VoiceSettings;
