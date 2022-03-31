import {React, useState}  from 'react';
import {useDispatch, useSelector} from 'react-redux';



function PizzaListItem({pizza}) {

    const dispatch = useDispatch();

    const orderReducer = useSelector(store => store.orderReducer);

    const addDelete = () => {
        setIsShowing(!isShowing);
    }

    const addPizza = () => {

    }

    let isPizza = false

    const isThisPizzaInTheCart = () => {
        console.log(orderReducer)
    for (let item of orderReducer) {
        if (item.id === pizza.id) {
            dispatch({type: 'ADD_PIZZA', payload: pizza})
            isPizza = true;
        } else {
            dispatch({type: 'REMOVE_PIZZA', payload: pizza})
            isPizza = false;
        }
    }
    console.log (isPizza)
}



    return (
        <>
            <div className='pizzaItem'>
                <h3>{pizza.name}</h3>
                <p>{pizza.description}</p>
                {isPizza ? <button onClick={isThisPizzaInTheCart}>Remove</button> : <button onClick={isThisPizzaInTheCart}>Add</button>}
            </div>
        </>
    )
}

export default PizzaListItem;