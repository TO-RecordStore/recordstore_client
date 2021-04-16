import React, {useState, useContext, useEffect} from 'react'
import CartItem from '../CartItem';
import {useMediaQuery} from '@material-ui/core';
import PageHeader from '../PageHeader/';
import StyledCart from './style';
import { AppContext } from "../../context/Context";
import flamingBeer from '../../assets/flaming-beer.jpg'
import Button from '../Button';
import {helpAddOrder, helpGetOrders} from '../../helpers/apiCalls'


const Cart = () => {

	const {currentOrder, orders, setCurrentOrder, setOrders} = useContext(AppContext)

	const stackSections = useMediaQuery('(max-width:800px)');

	const [orderPrice, setOrderPrice] = useState();

	const clickHandler = async() => {
		const currentOrderIndices = currentOrder.map(order => {
			console.log('currentOrder in clickHandler ==>', order);
			return {
			record: order.record._id,
			quantity: order.quantity
		}})
		
		console.log(currentOrderIndices)
		try {
			const newOrder =  await helpAddOrder(currentOrderIndices)
			console.log('new order we return from the create() method', newOrder);
			setOrders([newOrder, ...orders])
			setCurrentOrder([])
		} catch(err) {
			console.log(err)
		}
	}

	useEffect(() => {
		const getUserOrders = async() => {
			try {
				const userOrders = await helpGetOrders()
				console.log(userOrders);
				setOrders(userOrders)
			} catch(err) {
				console.log(err);
			}
		}
		getUserOrders()
	}, [])

	useEffect(() => {
		const totalPrice = currentOrder.reduce((acc, curr) => acc + curr.quantity * curr.record.price, 0)
		setOrderPrice(totalPrice)
	}, [currentOrder])

	const orderArray = currentOrder.map(orderItem => <CartItem key={orderItem.record._id} className={"current-item"} orderItem={orderItem} />)

	console.log(orders);

	const pastOrdersArray = orders.map(order => <span>{`${order}`}</span>)

// 	const pastOrdersArray = orders.map((order) => {
// 		console.log('order from the past orders ==>', order);
// 		return <section key={order._id} className="previous-order">
// 		<header>
// 			<span>{order.createdAt}</span>
// 			<span>{order.totalPrice}</span>
// 		</header>
// 		<ul>
// 			{order.records.map((record) => <CartItem key={record._id} className={"past-item"} orderItem={record} />)}
// 		</ul>
// 		</section>
// })

	return (
		<StyledCart stackSections={stackSections}>
			<PageHeader h2="Cart" par="Give us all your money!"/>
			<h3>currently in your cart</h3>
			<section className="current-order">
				<ul>
					{orderArray}
				</ul>
				<div className="summary">
					<img src={flamingBeer} alt="flaming-beer"/>
					<div className="order-total">
						<span>order total</span>
						<span>{orderPrice}</span>
					</div>
					<Button clickHandler={clickHandler} text="Buy Now" />
					<p>Buy your order now and get for free a small alcohol free Heineken on fire!!</p>
				</div>
			</section>

			<h3>previous orders</h3>
			{pastOrdersArray}

		</StyledCart>
	)
}

export default Cart;
