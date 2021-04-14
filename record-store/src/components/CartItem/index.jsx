import React from 'react'
import StyledCartItem from './style'

const CartItem = ({className}) => {
    return(
        <StyledCartItem className={className}>
					<img src="" alt=""/>
					<div className="info"></div>
					<div className="controls"></div>
					<div className="total-price"></div>
				</StyledCartItem>
    )
}

export default CartItem;