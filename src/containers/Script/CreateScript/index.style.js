import styled from 'styled-components';

export const StyledCreateScript = styled.div`
  .backButton {
    color: #6e6b7b;
    font-size: 16px;
  }
  .createButton {
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
  }
  .nameContainer {
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
  .nameInput {
    ::placeholder {
      font-size: 18px;
      font-weight: bold;
      opacity: 1;
      color: #b9b9c3;
    }
  }
  .createIcon {
    color: #b9b9c3;
  }
  .mt10 {
    margin-top: 10;
  }
`;
