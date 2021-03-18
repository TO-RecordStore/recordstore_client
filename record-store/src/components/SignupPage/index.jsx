import React from "react";
import StyledLogin from "../LoginPage/style";
import Form from "../Form";
import TextField from "@material-ui/core/TextField";
import Button from "../Button";
import PageHeader from "../PageHeader";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <StyledLogin>
      <Form>
        <PageHeader
          h2="Hurraaaaay! Let us know who you are!"
          par="We won't share your info with anybody."
        />
        <TextField
          id="signup-first-name-input"
          label="First name"
          type="text"
          autoComplete="off"
        />
        <TextField
          id="signup-last-name-input"
          label="Last name"
          type="text"
          autoComplete="off"
        />
        <TextField
          id="signup-email-input"
          label="Email"
          type="email"
          autoComplete="off"
        />
        <TextField
          id="signup-nickname-input"
          label="Nickname"
          type="text"
          autoComplete="off"
        />
        <TextField
          id="signup-password-input"
          label="Password"
          type="password"
          autoComplete="off"
        />
        <TextField
          id="signup-repeatPassword-input"
          label="Repeat password"
          type="password"
          autoComplete="off"
        />
        <Button text="Create account" />
        <Link to="/login">
          <small>Already have an account? Log in here!</small>
        </Link>
      </Form>
    </StyledLogin>
  );
};

export default SignupPage;
