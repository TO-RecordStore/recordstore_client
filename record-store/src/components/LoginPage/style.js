import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  ${props => props.stackSections && `flex-direction: column`}
`;
export default StyledMain;
