import { MenuItem } from '@mui/material';
import { COLOR } from '@src/styles/color';
import { BORDER_RADIUS } from '@src/styles/config';
import styled from 'styled-components';

export const StyledCampaign = styled.div`
  .campaign {
    background: #fff;
    border-radius: ${COLOR.primary};
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);
    padding: 25px;
  }
  .textField {
    background-color: #fff;
    width: 100%;
    height: fit-content;
    border-radius: ${BORDER_RADIUS};
  }
  .arrowIcon {
    color: #babfc7;
  }
  .resetButton {
    min-width: 50px;
    padding: 6px;
    box-shadow: none;
  }
  .button {
    text-transform: none;
  }
  .iconButton {
    padding: 5px;
  }
  .deleteIcon {
    color: #ea5455;
  }
  .status {
    font-weight: bold;
    margin-right: 5px;
  }
  .warningIcon {
    color: #ea5455;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  &.MuiMenuItem-root {
    &:focus {
      color: #fff;
      background-color: ${COLOR.primary};
      &:hover {
        background-color: ${COLOR.primary};
        color: #fff;
      }
    }
    &:hover {
      background-color: ${COLOR.light};
      &.MuiListItemIcon-root,
      &.MuiListItemText-primary {
        color: ${COLOR.light};
      }
    }
  }
`;
