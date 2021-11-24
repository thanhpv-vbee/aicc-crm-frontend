import { SIDEBAR_WIDTH } from '@src/styles/config';
import styled from 'styled-components';

export const StyledSidebar = styled.div`
  .toolbar {
    padding: 10px 19px 10px;
    display: flex;
    justify-content: space-between;
  }
  .toolbarCollapsed {
    justify-content: center;
    padding: 0px;
  }
  .drawer {
    width: ${SIDEBAR_WIDTH};
    flex-shrink: 0;
    height: 100vh;
    white-space: nowrap;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);
    border-radius: 0px 12px 12px 0px;
    transition: all 0.25s;
    transition-duration: 400;
    position: relative;
  }
  .drawerMobile {
    width: ${SIDEBAR_WIDTH};
    flex-shrink: 0;
    white-space: nowrap;
  }
  .drawerOpen {
    width: ${SIDEBAR_WIDTH};
  }
  .drawerClose {
    overflow: visible;
    width: 64px;
  }
  .header {
    height: 48px;
  }
  .nested {
    padding-left: 32px;
  }
  .hide {
    display: none;
  }
  .menuButton {
    padding: 12px;
    min-width: unset;
  }
  .menuItem {
    display: flex;
    align-items: center;
    text-transform: none;
    justify-content: center;
  }
  .menuIcon {
    min-width: 24px;
    height: 30px;
    font-size: 24px;
    line-height: 30px;
    align-items: center;
    vertical-align: middle;
    color: #c9d5e4;
  }
  .menuTitle {
    padding-left: 10px;
    margin: 0px;
    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1) 0s;
    color: #6e6b7b;
    & span {
      font-size: 16px;
      font-weight: 500;
    }
  }
  .primary {
    color: #fc6634;
  }
  .backgroundPrimary {
    background-color: #f5f5f5;
  }
  .menuSubmenu {
    position: relative;
    &:hover {
      & placementRightTop {
        display: block;
      }
    }
  }
  .placementRightTop {
    background-color: transparent;
    position: absolute;
    display: none;
    top: 0px;
    right: ${-SIDEBAR_WIDTH - 8}px;
    width: ${SIDEBAR_WIDTH}px;
    padding-left: 8px;
  }
  .subMenu {
    padding: 4px 0px;
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: -4px -4px 4px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
    & ul {
      padding: 8px;
    }
  }
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
    & img {
      height: 30px;
      width: auto;
    }
    & p {
      margin-left: 10px;
      margin-bottom: 0px;
      font-size: 14px;
      line-height: 14px;
      color: #babfc7;
      font-weight: bold;
    }
  }
`;
