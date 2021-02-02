import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "../assets/css/Payment.css"
import { useStateValue } from "../StateProvider";
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from '../axios';
import { db } from '../firebase';

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    var getBasketTotal = 0;
    
    for(var i=0; i<basket.length; i++) {
        getBasketTotal += basket[i].price;
    }

    useEffect(() => {
        // Generate the special stripe secret which allows us to
        // charge a customer
        const getClientSecret = async () => {
            const response = await axios ({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log("The secret is ", clientSecret)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // payment Intent = payment confirmation
            
            db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  basket: basket,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created
              })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: "EMPTY_BASKET"
            })

            history.replace("/orders")
        })
    }

    const handleChange = event => {
        // Listen and changes in the CardElement and display any
        // errors as the customer type their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment__container">

                <h1>Checkout ({<Link to="/checkout">{basket?.length} items</Link>})</h1>

                {/* Payment section => Delivery Address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>14 Fake Street </p>
                        <p>Delhi, India</p>
                    </div>
                </div>

                {/* Payment section => Review Items*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3> 
                    </div>
                    <div className="payment__items">
                        {/* Products */}
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment section => Payment Method*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value ={getBasketTotal}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />

                            <div style={{backgroundColor:'#EAEDED', padding:'10px 10px'}}>
                                <small>Card Number: 4242 4242 4242 4242</small>
                                <br></br>
                                <small> MM / YY: 0424</small>
                                <br></br>
                                <small>CVC :42424 </small>
                            </div>
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {/* Error */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
