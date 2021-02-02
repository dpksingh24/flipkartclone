import React from 'react';
import "../assets/css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../StateProvider';
import { useHistory } from 'react-router-dom';

function Subtotal() {
    // Gives us browser history
    const history = useHistory();
    const [{ basket }, dispatch ] = useStateValue();

    var getBasketTotal = 0;
    
    for(var i=0; i<basket.length; i++) {
        getBasketTotal += basket[i].price;
    }

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                <>
                    <p>Subtotal ({basket?.length} items): <strong>{value}</strong></p>
                </>
                )}
                decimalScale={2}
                value ={getBasketTotal}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button onClick={e => history.push('/payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
