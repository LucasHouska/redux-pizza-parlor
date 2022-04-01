import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';



function PizzaListItem({ pizza }) {

    const dispatch = useDispatch();
    const orderReducer = useSelector(store => store.orderReducer);

    const isThisPizzaInTheCart = () => {
        if (isInCart) {
            dispatch({ type: 'REMOVE_PIZZA', payload: pizza })
        } else {
            pizza.quantity = '1';
            dispatch({ type: 'ADD_PIZZA', payload: pizza })
        }
    }

    let isInCart = false;
    for (let item of orderReducer) {
        if (item.id == pizza.id) {
            isInCart = true;
        }
    }

    return (
        <>
            <div className='pizzaItem'>
                <h3>{pizza.name}</h3>
                <p>{pizza.description}</p>
                {isInCart ? <button onClick={(event) => isThisPizzaInTheCart()}>Remove</button> : <button onClick={(event) => isThisPizzaInTheCart()}>Add</button>}
            </div>
        </>
    )
}

export default PizzaListItem;