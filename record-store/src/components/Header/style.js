import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.color.neutral};
  font-size: ${(props) => props.theme.fontSize.large};
  display: flex;
  padding: 1rem 5%;
  align-items: center;

  a {
    color: ${(props) => props.theme.color.black};
  }

  .button-group {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  a:first-of-type {
    /* flex-grow: 1; */
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
  svg:last-child {
    font-size: 2.5rem;
    cursor: pointer;
  }
`;

export default StyledHeader;
