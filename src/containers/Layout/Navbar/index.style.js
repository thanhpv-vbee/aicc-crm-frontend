import styled from 'styled-components';

export const StyledNavbar = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .contentContainer {
    flex: 1;
  }
  .menu {
    transform: translateX(10px) translateY(50px);
  }
  .button {
    color: #fff;
    font-weight: bold;
  }
  .langBtn {
    color: #000;
    min-width: 0;
  }
  .langText {
    font-size: 14px;
  }
  .content {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .rightContainer {
    gap: 20px;
    margin-right: 20px;
  }
  .balanceBox {
    margin-left: 30px;
    display: flex;
    flex-direction: row;
  }
  .text {
    color: #323232;
    size: 14px;
  }
  .titleText {
    margin-right: 5px;
  }
  .valueText {
    font-weight: bold;
  }
  .nameText {
    font-weight: bold;
  }
  .phone {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .phoneImage {
    width: 18px;
    height: 18px;
  }
  .avatarBox {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    position: relative;
  }
  .statusDot {
    width: 8px;
    height: 8px;
    position: absolute;
    right: 0;
    bottom: 0;
    background: #28c76f;
    border-radius: 50%;
    border: 2px solid #fff;
  }
  .avatar {
    width: 40px;
    height: 40px;
  }
  .profileText {
    color: #6e6b7b;
  }
  .badge {
    color: #fff;
    background-color: #ea5455;
    width: 14px;
    height: 18px;
    border-radius: 50%;
    top: 0px;
    right: 0px;
  }
  .account {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .menuItemIcon {
    margin-right: 5px;
    min-width: 0;
  }
`;
