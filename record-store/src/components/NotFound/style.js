import styled from 'styled-components';

const Styled404 = styled.main`
  height: calc(100vh - 7rem);
  padding: max(3rem, 10%) 5%;
  display: grid;
  grid-template-columns: ${({ stackContent }) =>
    stackContent ? '1fr' : '1fr 2fr'};
  grid-template-rows: ${({ stackContent }) =>
    stackContent ? 'repeat(3, auto)' : '1fr 1fr'};
  row-gap: 2rem;
  justify-items: center;
  text-align: center;

  h3 {
    grid-column: ${({ stackContent }) => (stackContent ? 'span 1' : '1 / 2')};
    grid-row: 1 / 2;
    align-self: end;
  }
  button {
    grid-column: ${({ stackContent }) => (stackContent ? 'span 1' : '1 / 2')};
    grid-row: ${({ stackContent }) => (stackContent ? '3 / -1' : '2 / 3')};
    align-self: start;
    background-color: ${({ theme }) => theme.color.accentOne};
    color: ${({ theme }) => theme.color.white};

    :hover {
      background-color: ${({ theme }) => theme.color.neutral};
      color: ${({ theme }) => theme.color.black};
    }
  }
  img {
    width: clamp(20%, 300px, 100%);
    margin: ${({ stackContent }) => (stackContent ? '5% auto' : '0')};
    grid-column: ${({ stackContent }) => (stackContent ? 'span 1' : '2 / 3')};
    grid-row: ${({ stackContent }) => (stackContent ? '2 / 3' : '1 / 3')};
    align-self: center;
  }
`;

export default Styled404;
