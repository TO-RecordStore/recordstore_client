import React, { useState, useContext, useEffect } from "react";
import StyledHeader from "./style";
import { Link, useHistory } from "react-router-dom";
import Button from "../Button/";
import { AppContext } from '../../context/Context'
import { HiShoppingCart } from 'react-icons/hi';
import { helpLogoutUser } from "../../helpers/apiCalls";

const Header = () => {

	const [basketQuantity, setBasketQuantity] = useState(0)
	const { user, currentOrder, setCurrentOrder, setUser, setAuthIsDone, setOrders } = useContext(AppContext);
	const history = useHistory()
	

	useEffect(() => {
		const orderQuantity = currentOrder.reduce((acc, curr) => acc + curr.quantity, 0)
		setBasketQuantity(orderQuantity)
	}, [currentOrder])

  const handleLogout = async () => {
    const logoutResponse = await helpLogoutUser();
    console.log('logout response in header:', logoutResponse);
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      nickname: "",
      password: "",
      _id: "",
    });
    setCurrentOrder([]);
    setOrders([]);
    setAuthIsDone(false);
  }

	return (
		<StyledHeader>
			<Link to="/store" >
				<h1>record store</h1>
			</Link>
			{(user && user.avatar) ?
			<>
			<Link to='/cart' >
				<HiShoppingCart />
				<span>{basketQuantity}</span>
			</Link>
				<Link to={{pathname: '/profile', state: user}}>
					<img src={user.avatar} alt={user.nickname} />
				</Link>
        <Button text="Log out" clickHandler={() => handleLogout()} />
				</> :
				<>
					<Button text="Log in" clickHandler={() => history.push('/login')} />
					<Button text="Sign up" clickHandler={() => history.push('/signup')} />
				</>
			}
		</StyledHeader>
	);
};

export default Header;
