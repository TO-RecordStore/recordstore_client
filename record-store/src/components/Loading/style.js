import styled from 'styled-components';
import StyledMain from '../LoginPage/style';

const StyledLoading = styled(StyledMain)`
  padding: max(3rem, 5%) 5%;
  background-color: ${({ theme }) => theme.color.black};
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 2rem;

  h3 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 2rem;
  }

  img {
    width: clamp(20%, 300px, 100%);
    border-radius: ${({ theme }) => theme.borderRadius.round};
  }
`;

export default StyledLoading;
