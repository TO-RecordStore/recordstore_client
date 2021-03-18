import React from "react";
import StyledLogin from "../LoginPage/style";
import Form from "../Form";
import TextField from "@material-ui/core/TextField";
import Button from "../Button";
import PageHeader from "../PageHeader";
import { FiLock } from "react-icons/fi";
import InputAdornment from "@material-ui/core/InputAdornment";

const ProfilePage = () => {
  return (
    <StyledLogin>
      <Form>
        <PageHeader
          h2={`Your profile, --nickname--`}
          par="Don't forget to click the save button before you go!"
        />
        <TextField
          id="profile-first-name-input"
          label="First name"
          type="text"
          autoComplete="off"
        />
        <TextField
          id="profile-last-name-input"
          label="Last name"
          type="text"
          autoComplete="off"
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
        />
        <TextField
          id="profile-nickname-input"
          label="Nickname"
          type="text"
          autoComplete="off"
        />
        <Button text="Log in" />
      </Form>
    </StyledLogin>
  );
};

export default ProfilePage;
