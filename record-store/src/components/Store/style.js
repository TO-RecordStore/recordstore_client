import styled from 'styled-components';
import StyledLP from '../LandingPage/style';

export const StyledStore = styled(StyledLP)`
  padding: 0 5%;
`;

export const StyledRecordsContainer = styled.section`
  display: grid;
  grid-template-rows: repeat(auto-fill, 200px);
  grid-template-columns: repeat(auto-fill, 200px);
  gap: 3rem;
  justify-content: center;

  div {
    position: relative;

    svg {
      width: 3rem;
      height: 3rem;
      position: absolute;
      bottom: 0.5rem;
      right: 0.5rem;
      background: ${({ theme }) => theme.color.white};
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
