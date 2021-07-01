import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.color.neutral};
  font-size: ${(props) => props.theme.fontSize.large};
  display: flex;
  flex-direction: ${({ isFlexRow }) => (isFlexRow ? "row" : "column")};
  padding: 1rem 5%;
  align-items: ${({ isFlexRow }) => (isFlexRow ? "center" : "flex-start")};

  a {
    color: ${(props) => props.theme.color.black};
  }

  .button-group {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-self: ${({ isFlexRow }) => !isFlexRow && "flex-end"};

    * {
      display: flex;
      align-items: center;
    }
  }

  .basket-icon-wrapper {
    position: relative;
  }

  .basket-quantity {
    width: 2.4rem;
    height: 2.4rem;
    display: flex;
    justify-content: center;
    position: absolute;
    top: -10px;
    right: -10px;
    font-size: ${({ theme }) => theme.fontSize.smallHeadline};
    font-weight: 600;
    background-color: ${({ theme }) => theme.color.accentOne};
    color: ${({ theme }) => theme.color.neutral};
    border-radius: 50%;
  }

  img {
    width: 50px;
    height: 50px;
    margin: 0 2rem;
    border: ${(props) =>
      props.theme.borderWidth.regular +
      " solid " +
      props.theme.color.accentOne};
    border-radius: ${(props) => props.theme.borderRadius.round};
  }

  svg {
    font-size: 3.5rem;
  }

  svg:last-child {
    cursor: pointer;
  }
`;

export default StyledHeader;
