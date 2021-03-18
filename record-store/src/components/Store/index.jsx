import React from "react";
import { StyledStore, StyledRecordsContainer, StyledRecord } from "./style";
import PageHeader from "../PageHeader";

const StorePage = () => {
  return (
    <StyledStore>
      <PageHeader
        h2="Records Collection"
        par="Here you can find all our records."
      />

      <StyledRecordsContainer></StyledRecordsContainer>
    </StyledStore>
  );
};

export default StorePage;
