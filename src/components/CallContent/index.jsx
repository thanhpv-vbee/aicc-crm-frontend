import React, { useCallback, useState } from 'react';
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
} from '@mui/material';
import NavPills from '@src/components/NavPills';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Dropzone from '@src/components/Dropzone';
import { StyledCallContent } from './index.style';
import { typeData } from './data';

const CallContent = ({ showCard = false }) => {
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
    <StyledCallContent>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={showCard ? 7 : 12} xl={showCard ? 8 : 12}>
          <h3 className="heading">{t('callContent')}</h3>
          <div className="border">
            <NavPills
              tabs={[
                {
                  tabButton: t('convertFromText'),
                  tabContent: (
                    <div className="editor-container">
                      <FormControl fullWidth className="formControl">
                        <TextareaAutosize
                          className="textarea-content"
                          minRows={4}
                          maxRows={4}
                          placeholder={t('enterContentHere')}
                          value={content}
                          onChange={handleTextChange}
                        />
                      </FormControl>
                      <Grid container justifyContent="flex-end">
                        <Button
                          className="listening-button"
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
                    <Dropzone className="audio-container" onDrop={onDrop}>
                      <span className="audio-title">
                        {t('dragAndDropFile')}{' '}
                        <FormLabel
                          className="label-audio"
                          htmlFor="audio-file-input"
                        >
                          {t('clickHere')}
                        </FormLabel>
                      </span>
                      <p className="file-type">{t('supportedAudioFile')}</p>
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
            <div className="grid-container">
              <h3 className="heading">{t('personalizedCard')}</h3>
              <h3 className="heading">{t('readingConvention')}</h3>
            </div>
            <div className="card-content">
              {listCard.map(({ id }) => (
                <div key={id} className="grid-container mb10">
                  <OutlinedInput
                    className="dashed-border text-field"
                    placeholder={t('newCard')}
                    fullWidth
                    inputProps={{
                      'aria-labelledby': 'input-slider',
                    }}
                  />
                  <Select
                    className="dashed-border text-field"
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
                    className="clear-button"
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
    </StyledCallContent>
  );
};

export default CallContent;
