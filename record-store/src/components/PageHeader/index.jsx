import React from "react";
import StyledPageHeader from "./style";

const PageHeader = ({ h2, par }) => {
  return (
    <StyledPageHeader>
      <h2>{h2}</h2>
      <p>{par}</p>
    </StyledPageHeader>
  );
};

export default PageHeader;
