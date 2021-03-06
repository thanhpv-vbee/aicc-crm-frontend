import styled from 'styled-components';
import { COLOR } from '@src/styles/color';

export const StyledCustomDatePicker = styled.div`
  &.MuiTextField-root {
    width: 100%;
  }
  &.MuiOutlinedInput-root {
    width: 100%;
    padding-left: 0px;
    input: {
      padding: 10.5px 0;
      height: fit-content;
      color: #babfc7;
    }
  }
  &.MuiIconButton-label {
    color: #babfc7;
  }
  &.MuiOutlinedInput-notchedOutline {
    border-style: dotted;
  }
`;

export const StyledCustomDatePickerRange = styled.div`
  .resetButton {
    color: ${COLOR.light};
  }
  .toText {
    color: ${COLOR.light};
    margin: 0 10px;
  }
`;
