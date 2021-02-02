import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import Payment from "./Components/Payment";
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Components/Orders';

const promise = loadStripe("pk_test_51IAupsF7Bl6cVbULm0cCJ8EQV6d9UbpjLhTxsT94Zdl3Wf1ZyhxkhhQsJ3hh9D16SakKNuqXgexVuVGMHoLGosdf00Q8VZgBjn");

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // App loads attach this listener login /logout
    auth.onAuthStateChanged(authUser => {
      console.log("User is ", authUser);

      if(authUser) {
        // The user just logged in/ the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        // User is logged out 
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    
  }, [])

  return (
    <Router>
      <div className="app">

        {/* Header */}

        <Switch>

          <Route path="/orders">
            <Header />
            <Navbar />
            <Orders />
          </Route>
          
          <Route path="/login"> 
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Navbar />
            <Checkout />
            <Footer />
          </Route>

          <Route path="/payment">
            <Header />
            <Navbar />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          {/* Default Route is at bottom*/}
          <Route path="/">
            {/* Home */}
            <Header />
            <Navbar />
            <Home />
            <Footer />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
