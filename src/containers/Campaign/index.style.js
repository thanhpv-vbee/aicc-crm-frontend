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
  .text-field {
    background-color: #fff;
    width: 100%;
    height: fit-content;
    border-radius: ${BORDER_RADIUS};
  }
  .arrow-icon {
    color: #babfc7;
  }
  .reset-button {
    min-width: 50px;
    padding: 6px;
    box-shadow: none;
  }
  .button {
    text-transform: none;
  }
  .icon-button {
    padding: 5px;
  }
  .delete-icon {
    color: #ea5455;
  }
  .status {
    font-weight: bold;
    margin-right: 5px;
  }
  .warning-icon {
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
