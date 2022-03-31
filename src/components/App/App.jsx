import React from 'react';
import axios from 'axios';
import './App.css';
import Checkout from '../Checkout/Checkout';
import CustomerForm from '../CustomerForm/CustomerForm';
import AddToCart from '../AddToCart/AddToCart';
import Admin from '../Admin/Admin';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className='App'>

        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>
        
        <Route path="/customerInfo">
          <CustomerForm />
        </Route>

        <Route exact path="/">
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
