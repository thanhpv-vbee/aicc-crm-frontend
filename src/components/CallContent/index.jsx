import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import * as uuid from 'uuid';
import { useTranslation } from 'react-i18next';
import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  Icon,
  IconButton,
  MenuItem,
  OutlinedInput,
  Select,
  TextareaAutosize,
} from '@material-ui/core';
import NavPills from '@src/components/NavPills';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ClearIcon from '@material-ui/icons/Clear';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import Dropzone from '@src/components/Dropzone';
import useStyles from './index.style';
import { typeData } from './data';

const CallContent = ({ showCard = false }) => {
  const classes = useStyles();
  const { t } = useTranslation(['createScript']);

  const [content, setContent] = useState('');
  const [listCard, setListCard] = useState([]);

  const handleTextChange = (event) => {
    setContent(event.target.value);
  };

  const handleAddCard = () => {
    setListCard((prev) => [
      ...prev,
      { id: uuid.v4(), text: '', readingConvention: '' },
    ]);
  };

  const handleRemoveCard = (id) => {
    setListCard((prev) => prev.filter((e) => e.id !== id));
  };

  const onDrop = useCallback((acceptedFiles) => {
    // eslint-disable-next-line no-console
    console.log('acceptedFiles: ', acceptedFiles);
  }, []);

  return (
    <div className={classes.container}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={showCard ? 7 : 12} xl={showCard ? 8 : 12}>
          <h3 className={classes.heading}>{t('callContent')}</h3>
          <div className={classes.border}>
            <NavPills
              tabs={[
                {
                  tabButton: t('convertFromText'),
                  tabContent: (
                    <div className={classes.editorContainer}>
                      <FormControl fullWidth className={classes.formControl}>
                        <TextareaAutosize
                          className={classes.textareaContent}
                          minRows={4}
                          maxRows={4}
                          placeholder={t('enterContentHere')}
                          value={content}
                          onChange={handleTextChange}
                        />
                      </FormControl>
                      <Grid container justifyContent="flex-end">
                        <Button
                          className={classes.listeningButton}
                          startIcon={<Icon>headphones</Icon>}
                          variant="outlined"
                          color="primary"
                          disabled={!content.trim().length}
                        >
                          {t('tryListening')}
                        </Button>
                      </Grid>
                    </div>
                  ),
                },
                {
                  tabButton: t('uploadAudioFile'),
                  tabContent: (
                    <Dropzone
                      className={classes.audioContainer}
                      onDrop={onDrop}
                    >
                      <span className={classes.audioTitle}>
                        {t('dragAndDropFile')}{' '}
                        <FormLabel
                          className={classes.labelAudio}
                          htmlFor="audio-file-input"
                        >
                          {t('clickHere')}
                        </FormLabel>
                      </span>
                      <p className={classes.fileType}>
                        {t('supportedAudioFile')}
                      </p>
                      <input
                        id="audio-file-input"
                        type="file"
                        accept=".mp3,.wav"
                        hidden
                      />
                    </Dropzone>
                  ),
                },
              ]}
            />
          </div>
        </Grid>
        {showCard && (
          <Grid item xs={12} sm={5} xl={4}>
            <div className={classes.gridContainer}>
              <h3 className={classes.heading}>{t('personalizedCard')}</h3>
              <h3 className={classes.heading}>{t('readingConvention')}</h3>
            </div>
            <div className={classes.cardContent}>
              {listCard.map(({ id }) => (
                <div
                  key={id}
                  className={classNames(classes.gridContainer, classes.mb10)}
                >
                  <OutlinedInput
                    className={classNames(
                      classes.dashedBorder,
                      classes.textField,
                    )}
                    placeholder={t('newCard')}
                    fullWidth
                    inputProps={{
                      'aria-labelledby': 'input-slider',
                    }}
                  />
                  <Select
                    className={classNames(
                      classes.dashedBorder,
                      classes.textField,
                    )}
                    variant="outlined"
                    IconComponent={KeyboardArrowDownIcon}
                    fullWidth
                  >
                    {typeData.map((type, key) => (
                      <MenuItem key={key.toString()} value={key}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                  <IconButton
                    className={classes.clearButton}
                    onClick={() => handleRemoveCard(id)}
                  >
                    <ClearIcon />
                  </IconButton>
                </div>
              ))}
              <IconButton onClick={handleAddCard}>
                <AddBoxIcon color="primary" />
              </IconButton>
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default CallContent;
