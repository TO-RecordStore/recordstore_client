import React, {useContext, useState} from "react";
import StyledMain from "../LoginPage/style";
import Form from "../Form";
import {TextField, useMediaQuery} from "@material-ui/core";
import Button from "../Button";
import PageHeader from "../PageHeader";
import ImageUpdater from '../ImageUpdater';
import { FiLock } from "react-icons/fi";
import InputAdornment from "@material-ui/core/InputAdornment";
import {AppContext} from '../../context/Context';
import {helpUpdateUser} from '../../helpers/apiCalls';
import useDocumentTitle from "../../hooks/useDocumentTitle";

const ProfilePage = () => {
  const { appTitle, user, setUser } = useContext(AppContext);

  useDocumentTitle(`${appTitle} | Profile`);
  
  const [currUser, setCurrUser] = useState({
    id: user._id,
	  lastName: user.lastName,
	  firstName: user.firstName,
	  email: user.email,
	  nickname: user.nickname
  })

  const stackSections = useMediaQuery('(max-width:1000px)');

  const changeHandler = (e) => setCurrUser({...currUser, [e.target.name]: e.target.value})

	const submitHandler = async (e) => {
		e.preventDefault()
		const updatedUser = {...user, ...currUser}
    	setUser(updatedUser)
		try {
			await helpUpdateUser(updatedUser)
		} catch (err){
      console.log(err)
    }
	}


  return (
    <StyledMain stackSections={stackSections}>
      <Form submitHandler={submitHandler}>
        <PageHeader
          h2={`Your profile, ${user.nickname}`}
          par="Don't forget to click the save button before you go!"
        />
        <TextField
          id="profile-first-name-input"
          label="First name"
          type="text"
          autoComplete="off"
		  value={currUser.firstName}
      InputProps={{
        inputProps: {minLength: 6, maxLength: 25}
      }}
	  onChange={changeHandler}
      name="firstName"
        />
        <TextField
          id="profile-last-name-input"
          label="Last name"
          type="text"
          autoComplete="off"
		  value={currUser.lastName}
      InputProps={{
        inputProps: {minLength: 6, maxLength: 25}
      }}
	  onChange={changeHandler}
	  name="lastName"
        />
        <TextField
          id="profile-email-input"
          label="Email"
          type="email"
          autoComplete="off"
          disabled
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <FiLock />
              </InputAdornment>
            ),
          }}
		  placeholder={user.email}
        />
        <TextField
          id="profile-nickname-input"
          label="Nickname"
          type="text"
          autoComplete="off"
		  value={currUser.nickname}
      InputProps={{
        inputProps: {minLength: 6, maxLength: 25}
      }}
      onChange={changeHandler}
      name="nickname"
        />
        <Button text="Save" />
      </Form>
	  <ImageUpdater/>
    </StyledMain>
  );
};

export default ProfilePage;
