import React from "react";
import Header from "./Header";
import LandingPage from "./LandingPage/";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import StorePage from "./Store";
import ProfilePage from "./ProfilePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppContextProvider from "../context/Context";
import { ThemeProvider } from 'styled-components'
import theme from '../theme/theme'
import Cart from "./Cart";

const App = () => {
  return (
    <Router>
      <AppContextProvider>
      	<ThemeProvider theme={theme}>
      		<Header/>
		      <Switch>
		        <Route path="/" exact component={LandingPage} />
		        <Route path="/login" component={LoginPage} />
		        <Route path="/signup" component={SignupPage} />
		        <Route path="/store" component={StorePage} />
		        <Route path="/profile" component={ProfilePage} />
		        <Route path="/cart" component={Cart} />
		      </Switch>
      	</ThemeProvider>
      </AppContextProvider>
    </Router>
  );
};

export default App;
