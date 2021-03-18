import React from "react";
import StyledLogin from "./style";
import Form from "../Form";
import TextField from "@material-ui/core/TextField";
import Button from "../Button";
import PageHeader from "../PageHeader";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <StyledLogin>
      <Form>
        <PageHeader h2="Welcome back!" par="Please fill in your credentials." />
        <TextField
          id="login-email-input"
          label="Email"
          type="email"
          autoComplete="off"
        />
        <TextField
          id="login-password-input"
          label="Password"
          type="password"
          autoComplete="off"
        />
        <Button text="Log in" />
        <Link to="/signup">
          <small>Don't have an account? Create one here!</small>
        </Link>
      </Form>
    </StyledLogin>
  );
};

export default LoginPage;
