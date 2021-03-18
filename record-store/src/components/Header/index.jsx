import React from "react";
import StyledHeader from "./style";
import { Link } from "react-router-dom";
import Button from "../Button/";

const Header = () => {
  return (
    <StyledHeader>
      <Link>
        <h1>record store</h1>
      </Link>
      <Button text="Log in" />
      <Button text="Sign up" />
    </StyledHeader>
  );
};

export default Header;
