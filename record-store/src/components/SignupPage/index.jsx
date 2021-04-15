import React, { useContext, useState } from "react";
import Form from "../Form";
import {TextField, useMediaQuery} from "@material-ui/core";
import Button from "../Button";
import PageHeader from "../PageHeader";
import { Link } from "react-router-dom";
import SideImage from "../SideImage";
import jmb from "../../assets/jmb.jpg";
import { AppContext } from "../../context/Context";
import { helpAddUser } from "../../helpers/apiCalls";
import StyledMain from "../LoginPage/style";

const SignupPage = ({ history }) => {
  const { user, setUser } = useContext(AppContext);
  const [error, setError] = useState(false);
  const displaySideImage = useMediaQuery('(min-width:1000px)');
  const [currentUser, setCurrentUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		nickname: '',
		password: '',
    repeatPassword:'',
	})

  const changeHandler = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
  }; 

  const submitHandler = async (e) => {
    e.preventDefault();
    if (currentUser.repeatPassword !== currentUser.password) return setError(true);
    try {
      console.log(user);
      const newUserData = await helpAddUser(currentUser);
      console.log(newUserData);
      setUser(newUserData.data);
      history.push("/store");
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <StyledMain>
      <Form submitHandler={submitHandler}>
        <PageHeader
          h2="Hurraaaaay! Let us know who you are!"
          par="We won't share your info with anybody."
        />
        <TextField
          style={{ width: "50%", display: "inline-flex" }}
          id="signup-first-name-input"
          label="First name"
          type="text"
          name="firstName"
          autoComplete="off"
          value={currentUser.firstName}
          onChange={changeHandler}
          InputProps={{
            inputProps: { minLength: 3, maxLength: 25 },
          }}
          required
        />
        <TextField
          style={{ width: "50%", display: "inline-flex" }}
          id="signup-last-name-input"
          label="Last name"
          type="text"
          autoComplete="off"
          name="lastName"
          value={currentUser.lastName}
          onChange={changeHandler}
          InputProps={{
            inputProps: { minLength: 3, maxLength: 25 },
          }}
          required
        />
        <TextField
          id="signup-email-input"
          label="Email"
          type="email"
          autoComplete="off"
          name="email"
          value={currentUser.email}
          onChange={changeHandler}
          required
        />
        <TextField
          id="signup-nickname-input"
          label="Nickname"
          type="text"
          autoComplete="off"
          name="nickname"
          value={currentUser.nickname}
          onChange={changeHandler}
          InputProps={{
            inputProps: { minLength: 3, maxLength: 25 },
          }}
          required
        />
        <TextField
          id="signup-password-input"
          label="Password"
          type="password"
          autoComplete="off"
          name="password"
          value={currentUser.password}
          onChange={changeHandler}
          InputProps={{
            inputProps: { minLength: 6, maxLength: 25 },
          }}
          required
        />
        <TextField
          id="signup-repeatPassword-input"
          label="Repeat password"
          type="password"
          autoComplete="off"
          name="repeatPassword"
          value={error ? "Passwords don't match" : currentUser.repeatPassword}
          onChange={changeHandler}
          InputProps={{
            inputProps: { minLength: 6, maxLength: 25 },
          }}
          required
        />
        <Button text="Create account" />
        <Link to="/login">
          <small>Already have an account? Log in here!</small>
        </Link>
      </Form>
      {displaySideImage && <SideImage image={jmb} altTxt="another guy with a cigarette" />}
    </StyledMain>
  );
};

export default SignupPage;
