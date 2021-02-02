import React from 'react';
import "../assets/css/CheckoutProduct.css";
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../StateProvider';

function CheckoutProduct( { id, image, title, price, rating, hideButton }) {
    
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // Remove the item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img src={image} className="checkoutProduct__image" alt="products"/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p><StarIcon /></p>
                    ))}
                </p>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Cart</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
