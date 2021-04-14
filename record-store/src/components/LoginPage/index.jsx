import React, { useContext, useState } from "react";
import StyledMain from "./style";
import Form from "../Form";
import {TextField, useMediaQuery} from "@material-ui/core";
import Button from "../Button";
import PageHeader from "../PageHeader";
import { Link } from "react-router-dom";
import SideImage from "../SideImage";
import Lemmy from "../../assets/Lemmy.jpg";
import { helpFetchUser } from "../../helpers/apiCalls";
import { AppContext } from "../../context/Context";


const LoginPage = ({ history }) => {
  const { user, setUser } = useContext(AppContext);
  const [err, setErr] = useState(false);

  const displaySideImage = useMediaQuery('(min-width:1000px)');

  const changeHandler = (e) => {
    setErr(false);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
		if (user.email === "admin@record.com" && user.password === '12345') {
			const userData = {
				email: user.email, password: user.password,
				nickname: "The boss",
				avatar: "avatar-01.jpg",
				firstName: "Adam",
				lastName: "Mad"
			};
			setUser(userData);
			history.push("/store");
			return;
		}

    try {
      const userData = await helpFetchUser(user.email, user.password);
      console.log(userData);
      if (!userData) return setErr(true);
      setUser(userData.data);
      history.push("/store");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledMain>
      <Form submitHandler={submitHandler}>
        <PageHeader h2="Welcome back!" par="Please fill in your credentials." />
        <TextField
          id="login-email-input"
          label="Email"
          type="email"
          autoComplete="off"
          value={err ? "Invalid user data!" : user.email}
          onChange={changeHandler}
          name="email"
        />
        <TextField
          id="login-password-input"
          label="Password"
          type="password"
          autoComplete="off"
          value={err ? "Invalid user data!" : user.password}
          onChange={changeHandler}
          name="password"
        />
        <Button text="Log in" />
        <Link to="/signup">
          <small>Don't have an account? Create one here!</small>
        </Link>
      </Form>

      {displaySideImage && <SideImage image={Lemmy} altTxt="guy with a cigarette" />}

    </StyledMain>
  );
};

export default LoginPage;
