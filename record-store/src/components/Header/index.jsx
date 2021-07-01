import React, { useState, useContext, useEffect } from "react";
import StyledHeader from "./style";
import { Link, useHistory } from "react-router-dom";
import Button from "../Button/";
import { AppContext } from "../../context/Context";
import { HiShoppingCart, HiOutlineLogout } from "react-icons/hi";
import { helpLogoutUser } from "../../helpers/apiCalls";
import { useMediaQuery } from "@material-ui/core";

const Header = () => {
  const [basketQuantity, setBasketQuantity] = useState(0);
  const {
    user,
    currentOrder,
    setCurrentOrder,
    setUser,
    setAuthIsDone,
    setOrders,
  } = useContext(AppContext);

  const history = useHistory();

  const placeHeaderElementsInRow = useMediaQuery("(min-width:500px)");

  useEffect(() => {
    const orderQuantity = currentOrder.reduce(
      (acc, curr) => acc + curr.quantity,
      0
    );
    setBasketQuantity(orderQuantity);
  }, [currentOrder]);

  const handleLogout = async () => {
    const logoutResponse = await helpLogoutUser();
    console.log("logout response in header:", logoutResponse);
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
  };

  return (
    <StyledHeader isFlexRow={placeHeaderElementsInRow}>
      <Link to="/store">
        <h1>record store</h1>
      </Link>
      {user && user.avatar ? (
        <div className="button-group">
          <Link to="/cart" className="basket-icon-wrapper">
            <HiShoppingCart />
            {basketQuantity > 0 && (
              <span className="basket-quantity">{basketQuantity}</span>
            )}
          </Link>
          <Link to={{ pathname: "/profile", state: user }}>
            <img src={user.avatar} alt={user.nickname} />
          </Link>
          <HiOutlineLogout onClick={handleLogout} title="Log out" />
        </div>
      ) : (
        <div className="button-group">
          <Button text="Log in" clickHandler={() => history.push("/login")} />
          <Button text="Sign up" clickHandler={() => history.push("/signup")} />
        </div>
      )}
    </StyledHeader>
  );
};

export default Header;
