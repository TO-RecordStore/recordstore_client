import React from "react";
import StyledPageHeader from "./style";

const PageHeader = ({ h2, par, error }) => {
  return (
    <StyledPageHeader>
      <h2>{h2}</h2>
      <p>{par}</p>
      <p className="error">{error}</p>
    </StyledPageHeader>
  );
};

export default PageHeader;
