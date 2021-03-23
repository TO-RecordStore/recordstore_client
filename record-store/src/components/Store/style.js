import styled from "styled-components";
import StyledLP from "../LandingPage/style";

export const StyledStore = styled(StyledLP)``;

export const StyledRecordsContainer = styled.section`
  display: grid;
  grid-template-rows: repeat(auto-fill, 200px);
  grid-template-columns: repeat(auto-fill, 200px);
  gap: 3rem;
  justify-content: center;
`;

