import React, {useState, useContext, useEffect, useCallback} from 'react'
import CartItem from '../CartItem';
import {useMediaQuery} from '@material-ui/core';
import PageHeader from '../PageHeader/';
import StyledCart from './style';
import { AppContext } from "../../context/Context";
import flamingBeer from '../../assets/flaming-beer.jpg'
import giphyrecord from '../../assets/giphyrecord.gif'
import Button from '../Button';
import {helpAddOrder, helpGetOrders} from '../../helpers/apiCalls';
import {useHistory} from 'react-router-dom';


const Cart = () => {

	const {currentOrder, orders, setCurrentOrder, setOrders} = useContext(AppContext);

	const stackSections = useMediaQuery('(max-width:800px)');

	const [orderPrice, setOrderPrice] = useState();

  const history = useHistory();

	const clickHandler = async() => {
		const currentOrderIndices = currentOrder.map(order => {
			console.log('currentOrder in clickHandler ==>', order);
			return {
			record: order.record._id,
			quantity: order.quantity
		}})
		
		// console.log('currentOrderIndices', currentOrderIndices)
		try {
			const newOrder = await helpAddOrder(currentOrderIndices)
			console.log('new order we return from the create() method', newOrder);

			getUserOrders();

			setCurrentOrder([]);
		} catch(err) {
			console.log(err);
		}
	}

	// I'm moving this function into the component scope to make it available to 2 methods
  
	const getUserOrders = useCallback(async() => {
		try {
			const userOrders = await helpGetOrders()
			// console.log('userOrders', userOrders);
			setOrders(userOrders)
		} catch(err) {
			console.log(err);
		}
	}, [setOrders])


	useEffect(() => {
		getUserOrders()
	}, [getUserOrders])


	useEffect(() => {
		const totalPrice = currentOrder.reduce((acc, curr) => acc + curr.quantity * curr.record.price, 0);
		setOrderPrice(totalPrice);
	}, [currentOrder])

  const getDate = (date) => {
    const fullDateString = new Date(date);
    return `${fullDateString.getDate()}/${fullDateString.getMonth()+1}/${fullDateString.getFullYear()}`;
  };

  const handlePlus = (item) => {
    const updatedOrder = currentOrder.map(listItem => item.record._id === listItem.record._id ? {...listItem, quantity: item.quantity + 1} : listItem);
    setCurrentOrder([...updatedOrder]);
  }
  const handleMinus = (item) => {
    const updatedOrder = currentOrder.map(listItem => {
      if (item.record._id === listItem.record._id) {
        if (listItem.quantity > 1) {
          return {...listItem, quantity: item.quantity - 1};
        } else {
          return null;
        }
      } else {
        return listItem;
      }
    });
    setCurrentOrder([...updatedOrder.filter(item => item !== null)]);
  }

	const orderArray = currentOrder.map(orderItem => <CartItem key={orderItem.record._id} className={"current-item"} orderItem={orderItem} handlePlus={handlePlus} handleMinus={handleMinus} controls />)


	const pastOrdersArray = orders.map((order) => {
		return <section key={order._id} className="previous-order">
		<header>
			<span>{getDate(order.createdAt)}</span>
			<span>€{order.totalPrice.toFixed(2)}</span>
		</header>
		<ul>
			{order.records.map((record) => <CartItem key={record._id} className={"past-item"} orderItem={record} controls={false} />)}
		</ul>
		</section>
  }).sort((one, two) => one.createdAt > two.createdAt ? 1 : -1);

	return (
		<StyledCart stackSections={stackSections}>
			<PageHeader h2="Cart" par="Give us all your money!"/>
      {
        orderArray?.length ?
        <>
          <h3>currently in your cart</h3>
          <section className="current-order">
            <ul>
              {orderArray}
            </ul>
            <div className="summary">
              <img src={flamingBeer} alt="flaming-beer"/>
              <div className="order-total">
                <span>order total</span>
                <span>€{orderPrice?.toFixed(2)}</span>
              </div>
              <Button clickHandler={clickHandler} text="Buy Now" />
              <p>Place your order now and get for free a small alcohol-free Heineken on fire!!</p>
            </div>
          </section>
        </> :
        <>
          <h3>Your cart is empty!</h3>
          <section className="summary">
            <img src={giphyrecord} alt="spinning record on the top of a blue high-heel shoe"/>
            <Button clickHandler={() => history.push('/store')} text="Shop Now" />
            <p>Go buy some records!</p>
          </section>
        </>
      }

			
			{
      pastOrdersArray?.length &&
        <>
          <h3>previous orders</h3>
          {pastOrdersArray}
        </>
      }

		</StyledCart>
	)
}

export default Cart;
