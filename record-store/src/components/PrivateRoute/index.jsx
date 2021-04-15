import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AppContext } from "../../context/Context";
import Loading from '../Loading';

const PrivateRoute = ({ path, component, redirectTo = "/login" }) => {
  const { user, authIsDone } = useContext(AppContext);

	if (!authIsDone) {
		return <Loading/>
	}

  return (user.email !== '') ? (
    <Route path={path} component={component} />
  ) : (
    <Redirect to={redirectTo} />
  );
};

export default PrivateRoute;
