import styled from "styled-components";

const StyledPageHeader = styled.header`
  padding: 30px 0;
  margin-bottom: 10px;
  position: relative;

  h2 {
    margin-bottom: 1rem;
  }

  .error {
    color: ${(props) => props.theme.color.error};
    position: absolute;
    bottom: 0;
  }
`;

export default StyledPageHeader;
