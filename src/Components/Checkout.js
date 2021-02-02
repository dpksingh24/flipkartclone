import React from 'react';
import "../assets/css/Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../StateProvider';
import Subtotal from "./Subtotal.js";
// import FlipMove from 'react-flip-move';

function Checkout() {

    const [ { basket, user }, dispatch ] = useStateValue();

    return (
        <>
        <div className="checkout">
            
            <div className="checkout__left">
                <img className="checkout__ad" src="https://miro.medium.com/max/700/1*rgSRBz1tpXptQcQZqOmdwA.gif" alt="Ad"/>

                <div>
                    <center><h3>Hello, {user?.email}</h3></center>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                </div>

                {/* Basket Item */}
                
                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title = {item.title}
                            image =  {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ))}
                

            </div>
        </div>
        <div className="checkout__right">
                <Subtotal />
            </div>
        </>

    )
}

export default Checkout
