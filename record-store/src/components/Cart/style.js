import styled from 'styled-components';
import StyledMain from '../LoginPage/style';

const StyledCart = styled(StyledMain)`
  flex-direction: column;

  h3 {
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSize.smallHeadline};
    margin-bottom: 1rem;
  }

  .current-order,
  .previous-order {
    display: grid;

    ul {
      display: grid;
      gap: 1.5rem;
    }
  }
  .current-order {
    grid-template-columns: ${(props) =>
      props.stackSections ? '1fr' : 'repeat(2, 1fr)'};
    grid-template-rows: ${(props) =>
      props.stackSections ? 'repeat(2, auto)' : 'auto'};
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  .previous-order {
    grid-template-columns: '1fr';
    grid-template-rows: 'auto';

    header {
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      span:nth-of-type(2) {
        font-size: ${({ theme }) => theme.fontSize.largeX};
      }
    }
  }

  .summary {
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    background: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};

    > * {
      margin-top: 3rem;
    }

    .order-total {
      display: flex;
      flex-direction: column;

      span:first-of-type {
        text-transform: uppercase;
        font-size: ${({ theme }) => theme.fontSize.smallHeadline};
      }
      span:nth-of-type(2) {
        font-size: ${({ theme }) => theme.fontSize.largeX};
        font-weight: bold;
      }
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.small};
      font-style: italic;
    }

    img {
      width: 15rem;
    }

    button {
      background: ${({ theme }) => theme.color.accentOne};
      color: ${({ theme }) => theme.color.white};
      text-transform: uppercase;
      :hover {
        background: ${(props) => props.theme.color.neutralDark};
      }
    }
  }
`;

export default StyledCart;
