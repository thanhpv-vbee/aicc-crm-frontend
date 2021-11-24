import styled from 'styled-components';
import { BORDER_RADIUS } from '@src/styles/config';

export const StyledCallIvr = styled.div`
  margin-top: 20px;
  padding: 18px 20px 20px;
  background-color: #ffffff;
  border-radius: ${BORDER_RADIUS};
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);

  .header {
    display: flex;
    align-items: center;
  }
  .header-text {
    font-size: 14px;
    text-transform: uppercase;
    color: #6e6b7b;
    margin-right: 5px;
  }
  .key-container {
    align-items: center;
    position: relative;
    &:hover {
      .clear-button {
        display: block;
      }
    }
  }
  .key-button {
    height: 44px;
    width: 100%;
    border-radius: 0px;
    background-color: #fff;
    font-size: 14px;
    font-weight: bold;
    color: #6e6b7b;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.06);
  }
  .key-button-selected {
    color: #242424;
    border-right: 2px solid #242424;
    &:hover {
      background-color: rgba(30, 30, 30, 0.12);
    }
  }
  .key-button-add {
    color: #fc6634;
    &:hover {
      background-color: rgba(252, 102, 52, 0.12);
    }
  }
  .clear-button {
    color: #ea5455;
    padding: 0px;
    position: absolute;
    top: 12px;
    right: -20px;
    display: none;
  }
  .paper {
    box-shadow: 0px 4px 15px rgb(0 0 0 / 8%);
  }
  .numpad-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .numpad {
    border: 1px solid #f3f2f7;
    border-radius: ${BORDER_RADIUS};
    width: 80px;
    height: 80px;
    font-size: 22px;
    font-weight: bold;
    color: #6e6b7b;
    &:hover {
      background-color: rgba(252, 102, 52, 0.12);
      color: #fc6634;
    }
  }
  .delete-button {
    font-size: 14px;
    font-weight: bold;
    text-transform: none;
  }
`;
