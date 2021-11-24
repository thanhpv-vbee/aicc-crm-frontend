import { BORDER_RADIUS } from '@src/styles/config';
import styled from 'styled-components';

export const StyledCallContent = styled.div`
  margin-top: 20px;
  padding: 18px 20px 20px;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);

  .heading {
    color: #6e6b7b;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 0px;
    margin-bottom: 16px;
  }
  .border {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
  }
  .editorContainer {
    padding: 15px 12px 12px 17px;
  }
  .textareaContent {
    width: 100%;
    height: 100%;
    cursor: text;
    font-weight: 400;
    line-height: 1.5;
    vertical-align: baseline;
    padding-bottom: 14px;
    font-size: 16px;
    border: none;
    background: transparent;
    resize: none;
    &:focus {
      outline: none;
    }
  }
  .audioContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 17px;
  }
  .listeningButton {
    border-radius: 6px;
    font-size: 14px;
    font-weight: bold;
  }
  .labelAudio {
    font-size: 16px;
    font-weight: 900;
    color: #fc6634;
    &:hover {
      cursor: pointer;
    }
  }
  .audioTitle {
    font-size: 16px;
    font-weight: 900;
    color: #8898aa;
  }
  .fileType {
    font-size: 12px;
    font-weight: 900;
    color: #8898aa;
    margin-top: 17px 0px 0px;
  }
  .gridContainer {
    display: grid;
    grid-template-columns: 3fr 2fr 36px;
    column-gap: 20px;
  }
  .cardContent {
    height: 230px;
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      border-radius: 5px;
      background-color: #e4e2eb;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #fc6634;
      border-radius: 5px;
    }
  }
  .dashedBorder {
    &.MuiOutlinedInput-notchedOutline {
      border: 1px dashed #c4c4c4;
    }
  }
  .textField {
    background-color: white;
    height: fit-content;
    border-radius: ${BORDER_RADIUS};
    &.MuiInputBase-input {
      padding-top: 10.5px;
      padding-bottom: 10.5px;
    }
  }
  .clearButton {
    color: #ea5455;
    padding: 5px;
  }
  .mb10 {
    margin-bottom: 10px;
  }
`;
