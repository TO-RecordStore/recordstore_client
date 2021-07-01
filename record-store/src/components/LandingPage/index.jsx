import React from "react";
import StyledLP from "./style";
import StoreHero from "../../assets/store.jpg";

const LandingPage = () => {
  return (
    <StyledLP>
      <img src={StoreHero} alt="record-store" />
      <div className="illustrations-credits-container">
        <div className="credits-author">
          <a
            href="https://www.gabrielhollington.com/"
            target="_blank"
            rel="noreferrer"
          >
            Illustrations by Gabriel Hollington
          </a>
        </div>
      </div>
    </StyledLP>
  );
};

export default LandingPage;
