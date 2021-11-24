import { COLOR } from '@src/styles/color';
import styled from 'styled-components';

export const StyledStatistics = styled.div`
  .analystItem {
    padding: 12px 12px 12px 25px;
    background: #fff;
    box-shadow: 0px 0px 32px rgba(136, 152, 170, 0.15);
    border-radius: theme.shape.borderRadius;
  }
  .analystLabel {
    color: #8898aa;
    font-weight: 500;
  }
  .analystValue {
    color: #32325d;
    font-size: 22px;
    font-weight: 500;
  }
  .upColor {
    color: #28c76f;
  }
  .downColor {
    color: red;
  }
  .compareTime {
    color: #525f7f;
  }
`;

export const StyledIconCustom = styled.div`
  .iconBox {
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
