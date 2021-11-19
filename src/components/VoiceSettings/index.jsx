import React, { useState } from 'react';
import classNames from 'classnames';
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
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import useStyles from './index.style';
import { languageData, soundtrackData, voiceData } from './data';

const VoiceSettings = ({ className = '' }) => {
  const classes = useStyles();
  const { t } = useTranslation(['createScript']);

  const [expanded, setExpanded] = useState(true);
  const [valueSlider, setValueSlider] = useState(50);

  return (
    <div
      className={classNames(classes.whiteBox, {
        [className]: className !== undefined,
      })}
    >
      <div className={classes.header}>
        <h3 className={classes.title}>{t('chooseVoice')}</h3>
        {!expanded && (
          <Button
            className={classes.expandButton}
            endIcon={<ExpandMoreIcon />}
            onClick={() => setExpanded(true)}
            color="primary"
          >
            {t('expand')}
          </Button>
        )}
      </div>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Grid className={classes.content} container spacing={2}>
          <Grid item xs={6} sm={3} md={2}>
            <p className={classes.label}>{t('language')}</p>
            <Select
              className={classNames(classes.dashedBorder, classes.textField)}
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
            <p className={classes.label}>{t('chooseVoice')}</p>
            <Select
              className={classNames(classes.dashedBorder, classes.textField)}
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
            <p className={classes.label}>{t('rate')}</p>
            <div className={classes.voiceWrapper}>
              <OutlinedInput
                className={classNames(
                  classes.textField,
                  classes.mr20,
                  classes.dashedBorder,
                  classes.rateInput,
                )}
                defaultValue="1.0"
                endAdornment={<InputAdornment position="end">x</InputAdornment>}
                fullWidth
                inputProps={{
                  'aria-labelledby': 'input-slider',
                }}
              />
              <Slider
                className={classes.slider}
                value={valueSlider}
                onChange={(e, value) => setValueSlider(value)}
                aria-labelledby="input-slider"
              />
            </div>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <p className={classes.label}>{t('soundtrack')}</p>
            <Select
              className={classNames(classes.dashedBorder, classes.textField)}
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
              className={classes.expandButton}
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
  );
};

export default VoiceSettings;
