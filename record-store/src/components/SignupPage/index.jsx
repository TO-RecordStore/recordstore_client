import React, { useContext, useState} from "react";
import StyledLogin from "../LoginPage/style";
import Form from "../Form";
import TextField from "@material-ui/core/TextField";
import Button from "../Button";
import PageHeader from "../PageHeader";
import { Link } from "react-router-dom";
import SideImage from '../SideImage'
import jmb from '../../assets/jmb.jpg'
import {AppContext} from '../../context/Context'
import {helpAddUser} from '../../helpers/apiCalls'


const SignupPage = ({history}) => {

const {user, setUser} = useContext(AppContext)
const [repeatPassword, setRepeatPassword] = useState('')
const [error, setError] = useState(false)

  
	const changeHandler = (e) => {
		setUser({...user, [e.target.name]: e.target.value})
	}

	const submitHandler = async (e) => {
		e.preventDefault()		
		if (repeatPassword !== user.password) return setError(true)
		const newUserData = await helpAddUser({...user})
    	setUser(newUserData.data)
      history.push('/store')
	}
  
  return (
    <StyledLogin>
      <Form submitHandler={submitHandler}>
        <PageHeader
          h2="Hurraaaaay! Let us know who you are!"
          par="We won't share your info with anybody."
        />
        <TextField
          id="signup-first-name-input"
          label="First name"
          type="text"
		  name="firstName"
          autoComplete="off"
		  value={user.firstName}
		  onChange={changeHandler}
		  InputProps={{
			  inputProps: {minLength: 3, maxLength: 25}
		  }}
		  required
        />
        <TextField
          id="signup-last-name-input"
          label="Last name"
          type="text"
          autoComplete="off"
		  name="lastName"
		  value={user.lastName}
		  onChange={changeHandler}
		  InputProps={{
			inputProps: {minLength: 3, maxLength: 25}
			}}
			required
        />
        <TextField
          id="signup-email-input"
          label="Email"
          type="email"
          autoComplete="off"
          name="email"
		  value={user.email}
		  onChange={changeHandler}
		  required
        />
        <TextField
          id="signup-nickname-input"
          label="Nickname"
          type="text"
          autoComplete="off"
		  name="nickname"
		  value={user.nickname}
		  onChange={changeHandler}
		  InputProps={{
			inputProps: {minLength: 3, maxLength: 25}
		}}
		required
        />
        <TextField
          id="signup-password-input"
          label="Password"
          type="password"
          autoComplete="off"
		  name="password"
		  value={user.password}
		  onChange={changeHandler}
		  InputProps={{
			inputProps: {minLength: 6, maxLength: 25}
		}}
		required
        />
        <TextField
          id="signup-repeatPassword-input"
          label="Repeat password"
          type="password"
          autoComplete="off"
		  name="repeatPassword"
		  value={error ? "Passwords don't match" : repeatPassword}
		  onChange={(e) => {
			  setError(false)
			setRepeatPassword(e.target.value)
		 	}
		}
		  InputProps={{
			inputProps: {minLength: 6, maxLength: 25}
		}}
		required
        />
        <Button text="Create account" />
        <Link to="/login">
          <small>Already have an account? Log in here!</small>
        </Link>
      </Form>
	  <SideImage image={jmb} altTxt="another guy with a cigarette"/>
    </StyledLogin>
  );
};

export default SignupPage;
