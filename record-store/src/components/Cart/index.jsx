import React from 'react'
import CartItem from '../CartItem';
import StyledMain from '../LoginPage/style';
import PageHeader from '../PageHeader/'
import StyledCart from './style';


const Cart = () => {
	return (
		<StyledCart>
			<PageHeader h2="Cart" par="Give us all your money!"/>
			<h3>currently in your cart</h3>
			<section className="current-order">
				<ul>
					<CartItem className="current-item"/>
				</ul>
				<div className="summary">
					<img src="" alt=""/>
					<div className="order-total">
						<span>order total</span>
						<span>price</span>
					</div>
					<button>buy now</button>
					<p>Buy your order now and get for free a small alchohol free Heineken on fire!!</p>
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
