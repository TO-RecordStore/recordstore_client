import styled from 'styled-components';

export const StyledCartItem = styled.li`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 100px 1fr;
  row-gap: 1rem;
  column-gap: 2rem;
  padding: 1.5rem;
  background-color: ${(props) =>
    props.className === 'current-item'
      ? props.theme.color.black
      : props.theme.color.accentTwo};

  img {
    grid-row: 1 / 3;
    width: 100%;
  }
  .info {
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.color.white};

    h3 {
      font-weight: normal;
      font-size: ${({ theme }) => theme.fontSize.medium};
      text-transform: capitalize;
      margin-top: 0;
    }
    span:first-of-type {
      font-weight: bold;
    }
    span:last-of-type {
      margin-top: 0.5rem;
    }
    & > * {
      margin-bottom: 0.5rem;
    }
  }
  .controls,
  .total-price {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    color: ${(props) => props.theme.color.white};
  }
  .controls {
    width: 8rem;
    justify-self: start;
    visibility: ${(props) =>
      (props.className = 'current-item' ? 'visible' : 'hidden')};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .total-price {
    justify-self: end;
    display: flex;
    flex-direction: column;

    & > span:first-child {
      align-self: flex-end;
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${({ theme }) => theme.fontSize.small};
    }
  }
`;

export const StyledControl = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 2.2rem;
  height: 2.2rem;
  padding: 0.3rem;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 700;
  background: ${(props) =>
    !props.inverted ? props.theme.color.white : 'transparent'};
  color: ${(props) =>
    !props.inverted ? props.theme.color.black : props.theme.color.white};
  border: 2px solid ${(props) => props.theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.round};
  cursor: ${(props) => !props.inverted && 'pointer'};
`;
