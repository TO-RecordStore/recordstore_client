import styled from "styled-components";

const StyledLogin = styled.main`
  display: flex;
  ${props => props.stackSections && `flex-direction: column`}
`;
export default StyledLogin;
