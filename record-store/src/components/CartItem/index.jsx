import React from "react";
import { StyledCartItem, StyledControl } from "./style";

const CartItem = ({ className, orderItem, controls }) => {
  const { cover, artist, title, price } = orderItem.record;
  const { quantity } = orderItem;

  // console.log(orderItem);

  return (
    <StyledCartItem className={className}>
      <img src={cover} alt={`${artist} ${title}`} />
      <div className="info">
        <h3>{className === 'past-item' ? `${quantity} x ${title}` : title}</h3>
        <span>{artist}</span>
        <span>€{price}</span>
      </div>
      {controls ? <div className="controls">
        <StyledControl>+</StyledControl>
        <StyledControl as="span" inverted={true}>
          {quantity}
        </StyledControl>
        <StyledControl>&ndash;</StyledControl>
      </div> :
      <div className="total-price">
        <span>Total</span>
        <span>€{price * quantity}</span>
      </div>}
      
    </StyledCartItem>
  );
};

export default CartItem;
