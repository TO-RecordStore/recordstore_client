import styled from 'styled-components';

export const StyledCartItem = styled.li`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 100px 1fr;
  gap: 2rem;
  padding: 2rem;
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
  }
  .controls,
  .total-price {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    color: ${(props) => props.theme.color.white};
  }
  .controls {
    justify-self: start;
    visibility: ${(props) =>
      (props.className = 'current-item' ? 'visible' : 'hidden')};
    display: flex;
    align-items: center;
  }
  .total-price {
    justify-self: end;
    display: flex;
    flex-direction: column;

    & > span:first-child {
      text-transform: uppercase;
    }
  }
`;

export const StyledControl = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: 700;
  background: ${(props) =>
    !props.inverted ? props.theme.color.white : 'transparent'};
  color: ${(props) =>
    !props.inverted ? props.theme.color.black : props.theme.color.white};
  border: 2px solid ${(props) => props.theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.round};
  cursor: ${(props) => !props.inverted && 'pointer'};
`;
