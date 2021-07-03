import styled from 'styled-components';
import StyledLP from '../LandingPage/style';

export const StyledStore = styled(StyledLP)`
  padding: 5rem 5%;
`;

export const StyledRecordsContainer = styled.section`
  display: grid;
  grid-template-rows: repeat(auto-fill, 300px);
  grid-template-columns: repeat(auto-fill, 300px);
  gap: ${(props) => (props.shrinkGap ? '3rem' : '10rem')};
  justify-content: center;
  padding: 10rem 0;

  div {
    position: relative;
    box-shadow: ${({ theme }) => theme.boxShadow};

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
