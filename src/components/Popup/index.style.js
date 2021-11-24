import styled from 'styled-components';
import { COLOR } from '@src/styles/color';

export const StyledPopup = styled.div`
  .popup {
    .muiPaper-root {
      border-radius: 0px;
      max-width: 659px;
    }
    .muiDialogTitle-root {
      padding: 16px 24px 5px;
      .muiTypography-root {
        color: #5e5873;
        font-weight: bold;
      }
    }
  }
  .contentContainer {
    margin-top: -10px;
  }
  .closeIcon {
    padding: 2px 2px 0 0;
  }
  .cancelButton {
    color: ${COLOR.primary};
    margin-right: 20px;
  }
  .closeButton {
    padding: 0;
  }
  .content {
    font-size: 21px;
    font-weight: 500;
    line-height: 30px;
    color: #5e5873;
  }
`;
