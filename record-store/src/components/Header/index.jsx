import React, { useContext } from "react";
import StyledHeader from "./style";
import { Link } from "react-router-dom";
import Button from "../Button/";
import { AppContext } from '../../context/Context'

const Header = () => {
	const { user } = useContext(AppContext);

	return (
		<StyledHeader>
			<Link to="/store" >
				<h1>record store</h1>
			</Link>
			{user.avatar ?
				<Link to={{pathname: '/profile', state: user}}>
					<img src={user.avatar} alt={user.nickname} />
				</Link> :
				<>
					<Button text="Log in" />
					<Button text="Sign up" />
				</>
			}
		</StyledHeader>
	);
};

export default Header;
