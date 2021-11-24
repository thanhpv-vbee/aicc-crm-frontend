import { COLOR } from '@src/styles/color';
import { BORDER_RADIUS } from '@src/styles/config';
import styled from 'styled-components';

export const StyledStatistics = styled.div`
  .analyst-item {
    padding: 12px 12px 12px 25px;
    background: #fff;
    box-shadow: 0px 0px 32px rgba(136, 152, 170, 0.15);
    border-radius: ${BORDER_RADIUS};
  }
  .analyst-label {
    color: #8898aa;
    font-weight: 500;
  }
  .analyst-value {
    color: #32325d;
    font-size: 22px;
    font-weight: 500;
  }
  .up-color {
    color: #28c76f;
  }
  .down-color {
    color: red;
  }
  .compare-time {
    color: #525f7f;
  }
`;

export const StyledIconCustom = styled.div`
  .icon-box {
    background: ${(props) => props.bgColor};
    color: ${COLOR.white};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    font-size: 14px;
  }
  .icon {
    font-size: 22px;
  }
`;
