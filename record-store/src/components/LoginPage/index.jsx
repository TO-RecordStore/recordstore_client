import React, { useContext, useState } from "react";
import StyledMain from "./style";
import Form from "../Form";
import { TextField, useMediaQuery } from "@material-ui/core";
import Button from "../Button";
import PageHeader from "../PageHeader";
import { Link } from "react-router-dom";
import SideImage from "../SideImage";
import Lemmy from "../../assets/Lemmy.jpg";
import { helpFetchUser } from "../../helpers/apiCalls";
import { AppContext } from "../../context/Context";

const LoginPage = ({ history }) => {
  const { setUser, setAuthIsDone } = useContext(AppContext);
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
  });

  const displaySideImage = useMediaQuery("(min-width:1000px)");

  const changeHandler = (e) => {
    if (error) setError("");
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const userData = await helpFetchUser(
        currentUser.email,
        currentUser.password
      );
      // userData is undefined if the post request to the /users/login route returns an error
      if (!userData) return setError("Invalid email OR password!");
      setUser({ ...userData.data });
      setAuthIsDone(true);
      history.push("/store");
    } catch (err) {
      console.log("hi from the catch block:", err);
    }
  };

  return (
    <StyledMain>
      <Form submitHandler={submitHandler}>
        <PageHeader
          h2="Welcome back!"
          par="Please fill in your credentials."
          error={error && error}
        />
        <TextField
          id="login-email-input"
          label="Email"
          type="email"
          autoComplete="off"
          value={currentUser.email}
          onChange={changeHandler}
          name="email"
        />
        <TextField
          id="login-password-input"
          label="Password"
          type="password"
          autoComplete="off"
          value={currentUser.password}
          onChange={changeHandler}
          name="password"
        />
        <Button text="Log in" />

        <small>
          Don't have an account? Create one<Link to="/signup"> here!</Link>
        </small>
      </Form>

      {displaySideImage && (
        <SideImage image={Lemmy} altTxt="guy with a cigarette" />
      )}
    </StyledMain>
  );
};

export default LoginPage;
