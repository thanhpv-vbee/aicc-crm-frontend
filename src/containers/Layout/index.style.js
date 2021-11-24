import styled from 'styled-components';
import { BORDER_RADIUS } from '@src/styles/config';

export const StyledLayout = styled.div`
  display: flex;
  .main {
    flex: 1;
    padding: 15px 30px;
  }
  .navbar {
    margin-bottom: 20px;
    background: #fff;
    border-radius: ${BORDER_RADIUS};
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);
  }
`;
