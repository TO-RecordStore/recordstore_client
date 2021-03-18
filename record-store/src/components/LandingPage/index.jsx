import React from "react";
import StyledLP from "./style";
import StoreHero from "../../assets/store.jpg";

const LandingPage = () => {
  return (
    <StyledLP>
      <img src={StoreHero} alt="record-store" />
    </StyledLP>
  );
};

export default LandingPage;
