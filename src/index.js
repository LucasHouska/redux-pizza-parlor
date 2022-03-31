import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

const pizzaReducer = (state = [], action) => {
    if(action.type === 'SET_PIZZA_LIST') {
        return action.payload
    }

    return state;
}

const orderReducer = (state = [], action) => {
    if(action.type === 'ADD_PIZZA') {
        return [...state, action.payload]
    } else if(action.type === 'REMOVE_PIZZA') {
        return state.filter((item) => item != action.payload)
    } else if (action.type === 'CLEAR_CART') {
        return [];
    }

    return state;
}

const customerReducer = (state = [], action) => {

    return state
}

const reduxStore = createStore(
    combineReducers({
        pizzaReducer,
        customerReducer,
        orderReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
