import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';



function PizzaListItem({ pizza }) {

    const dispatch = useDispatch();

    const orderReducer = useSelector(store => store.orderReducer);

    const [isPizza, setIsPizza] = useState(false);



    const isThisPizzaInTheCart = () => {
        console.log(orderReducer)
        if (orderReducer.length === 0) {
            dispatch({ type: 'ADD_PIZZA', payload: pizza })
            setIsPizza(true)
        } else if (orderReducer.length > 0) {
            for (let item of orderReducer) {
                if (item.id !== pizza.id) {
                    dispatch({ type: 'ADD_PIZZA', payload: pizza })
                    setIsPizza(true)
                } else if (item.id === pizza.id) {
                    dispatch({ type: 'REMOVE_PIZZA', payload: pizza })
                    setIsPizza(false)
                }
            }
        }
    }


    console.log(isPizza)

    return (
        <>
            <div className='pizzaItem'>
                <h3>{pizza.name}</h3>
                <p>{pizza.description}</p>
                {isPizza ? <button onClick={(event) => isThisPizzaInTheCart()}>Remove</button> : <button onClick={(event) => isThisPizzaInTheCart()}>Add</button>}
            </div>
        </>
    )
}

export default PizzaListItem;