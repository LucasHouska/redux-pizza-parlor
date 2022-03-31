import React from 'react';
import './App.css';
import Checkout from '../Checkout/Checkout';
import CustomerForm from '../CustomerForm/CustomerForm';
import AddToCart from '../AddToCart/AddToCart';
import Admin from '../Admin/Admin';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {

  

  return (
    <Router>
      <div className='App'>

        <Route path="/customerInfo">
          <CustomerForm />
        </Route>

        <Route path="/" exact>
          <AddToCart />
        </Route>

        <Route path="/checkout">
          <Checkout />
        </Route>

        <Route path="/admin">
          <Admin />
        </Route>
      </div>
    </Router>
  );
}

export default App;
