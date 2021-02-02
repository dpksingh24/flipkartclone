import React from 'react';
import "../assets/css/Footer.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__options">
                <img className="footer__Logo" src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="flipkart"/>

                <p className="footer__language"> English - EN <ExpandMoreIcon /></p>
            </div>

            <div className="footer__options">
                <span className="footer__option">India</span>
                <span className="footer__option">Canada</span>
                <span className="footer__option">UAE</span>
                <span className="footer__option">Singapore</span>
                <span className="footer__option">Australia</span>
                <span className="footer__option">Brazil</span>
                <span className="footer__option">United States</span>
                <span className="footer__option">Germany</span>
                <span className="footer__option">Spain</span>
                <span className="footer__option">United Kingdom</span>
            </div>
        </div>
    )
}

export default Footer
