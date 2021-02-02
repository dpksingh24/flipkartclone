import React from 'react';
import '../assets/css/Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';

function Header() {

    const[{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    console.log(user);

    return (
        <div className="header">

            <Link to="/" style={{textDecoration:'none', marginLeft:'10em'}}>
                <img className="header__logo" src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="flipkart"/>
            </Link>

            {/* <div className="header__address">
                <LocationOnIcon />
                <div className="header__option">
                    <span className="header__optionLineOne">Hello</span>
                    <span className="header__optionLineTwo">Select your address</span>
                </div>
            </div> */}

            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon" style={{color:'#2874f0'}}/>
            </div>

            <div className="header__nav">
                {/* Sign out Important */}
                <Link to={!user && '/login'} style={{textDecoration:'none'}}>  
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">Hello {user ? user.email : 'Guest'}</span>
                        <span className="header__optionLineTwo"  style={{backgroundColor:'#fff', color:'#000', textAlign:'center', padding:'2px 5px'}}>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to="/orders" style={{textDecoration:'none'}}>
                    <div className="header__option">
                        <span className="header__optionLineOne">Return</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/checkout" style={{textDecoration:'none'}}>
                    <div className="header__optionBasket">
                        <span className="header__optionLineOne"><ShoppingCartOutlinedIcon /></span>
                        <span className="header__optionLineTwo">Cart {basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
