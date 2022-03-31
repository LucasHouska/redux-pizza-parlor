import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

const pizzaReducer = (state = [], action) => {

    return state
}

const customerReducer = (state = {}, action) => {
    if (action.type === 'ADD_CUSTOMER'){
        return action.payload
    }
    return state
}

const reduxStore = createStore(
    combineReducers({
        pizzaReducer,
        customerReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
