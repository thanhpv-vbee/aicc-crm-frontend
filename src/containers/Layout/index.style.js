import styled from 'styled-components';

export const StyledLayout = styled.div`
  display: flex;
  .main {
    flex: 1;
    padding: 15px 30px;
  }
  .navbar {
    margin-bottom: 20px;
    background: #fff;
    border-radius: theme.shape.borderRadius;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);
  }
`;
