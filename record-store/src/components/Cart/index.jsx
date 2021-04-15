import React, {useState, useContext, useEffect} from 'react'
import CartItem from '../CartItem';
import {useMediaQuery} from '@material-ui/core';
import PageHeader from '../PageHeader/';
import StyledCart from './style';
import { AppContext } from "../../context/Context";
import flamingBeer from '../../assets/flaming-beer.jpg'
import Button from '../Button';


const Cart = () => {

	const {currentOrder} = useContext(AppContext)

	const stackSections = useMediaQuery('(max-width:800px)');

	const [orderPrice, setOrderPrice] = useState();

	useEffect(() => {
		const totalPrice = currentOrder.reduce((acc, curr) => acc + curr.quantity * curr.record.price, 0)
		setOrderPrice(totalPrice)
	}, [currentOrder])

	const ordersArray = currentOrder.map(orderItem => <CartItem key={orderItem.record._id} className={"current-item"} orderItem={orderItem} />)

	return (
		<StyledCart stackSections={stackSections}>
			<PageHeader h2="Cart" par="Give us all your money!"/>
			<h3>currently in your cart</h3>
			<section className="current-order">
				<ul>
					{ordersArray}
				</ul>
				<div className="summary">
					<img src={flamingBeer} alt="flaming-beer"/>
					<div className="order-total">
						<span>order total</span>
						<span>{orderPrice}</span>
					</div>
					<Button clickHandler={() => console.log('Click!')} text="Buy Now" />
					<p>Buy your order now and get for free a small alcohol free Heineken on fire!!</p>
				</div>
			</section>

			<h3>previous orders</h3>
			
			<section className="previous-order">
				<header>
					<span>date</span>
					<span>price</span>
				</header>
				<ul>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</section>
		</StyledCart>
	)
}

export default Cart;
