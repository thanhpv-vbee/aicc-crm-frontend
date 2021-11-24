import styled from 'styled-components';
import { BORDER_RADIUS } from '@src/styles/config';

export const StyledVoiceSettings = styled.div`
  .white-box {
    margin-top: 20px;
    padding: 18px 20px 20px;
    background-color: #ffffff;
    border-radius: 6px;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);
  }
  .header {
    display: flex;
    align-items: center;
    min-height: 36px;
  }
  .title {
    flex-grow: 1;
    color: #6e6b7b;
    font-size: 14px;
    font-weight: bold;
    position: relative;
    z-index: 1;
    overflow: hidden;
    text-transform: uppercase;
    margin: 0px;
    :after {
      content: ' ';
      position: absolute;
      top: 51%;
      height: 2px;
      width: 100%;
      overflow: hidden;
      background-color: #f3f2f7;
    }
  }
  .content {
    margin-top: 11px;
  }
  .label {
    color: #525f7f;
    font-size: 14px;
    font-weight: bold;
    margin-top: 0px;
    margin-bottom: 4px;
  }
  .rate-input {
    width: 133px;
  }
  .dashed-border {
    .MuiOutlinedInput-notchedOutline {
      border: 1px dashed #c4c4c4;
    }
  }
  .voice-wrapper {
    display: flex;
    align-items: center;
  }
  .mr20 {
    margin-right: 20px;
  }
  .slider {
    color: #fc6634;
    height: 5px;
    .MuiSlider-track {
      height: 5px;
      border-radius: 5px;
    }
    .MuiSlider-rail {
      height: 5px;
      border-radius: 5px;
      opacity: 1;
      background-color: #eceeef;
    }
    .MuiSlider-thumb {
      width: 15px;
      height: 15px;
    }
  }
  .text-field {
    background-color: white;
    height: fit-content;
    border-radius: ${BORDER_RADIUS};
    .MuiInputBase-input {
      padding-top: 10.5px;
      padding-bottom: 10.5px;
    }
  }
  .expand-button {
    text-transform: none;
    font-size: 14px;
    font-weight: bold;
  }
`;
