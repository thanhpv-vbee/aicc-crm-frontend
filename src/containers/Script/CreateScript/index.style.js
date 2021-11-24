import styled from 'styled-components';

export const StyledCreateScript = styled.div`
  .back-button {
    color: #6e6b7b;
    font-size: 16px;
  }
  .create-button {
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
  }
  .name-container {
    display: flex;
    align-items: center;
    span {
      color: #6e6b7b;
      font-size: 16px;
      font-weight: bold;
      line-height: 21px;
      text-transform: uppercase;
      margin-right: 4px;
    }
  }
  .name-input {
    ::placeholder {
      font-size: 18px;
      font-weight: bold;
      opacity: 1;
      color: #b9b9c3;
    }
  }
  .create-icon {
    color: #b9b9c3;
  }
  .mt10 {
    margin-top: 10;
  }
`;
