import React, { useState } from 'react';
import {useDispatch} from 'react-redux';

function CustomerForm() {

    let [pizzaToAdd, setPizzaToAdd] = useState({customer_name: '', street_address: '', city: '', zip: '', type: ''});
    let [isPickup, setIsPickup] = useState('false');
    const dispatch = useDispatch();

    const handleNameChange = (event) => {
        setPizzaToAdd({
            ...pizzaToAdd,
            customer_name: event.target.value
        });
    }

    const handleAddressChange = (event) => {
        setPizzaToAdd({
            ...pizzaToAdd,
            street_address: event.target.value
        })
    }

    const handleCityChange = (event) => {
        setPizzaToAdd({
            ...pizzaToAdd, 
            city: event.target.value
        })
    }

    const handleZipChange = (event) => {
        setPizzaToAdd({
            ...pizzaToAdd, 
            zip: event.target.value
        })
    }

    const handleType = (event) => {
          {isPickup ? setPizzaToAdd({...pizzaToAdd, type: event.target.value}) : setPizzaToAdd({...pizzaToAdd, type: event.target.value}) }
    }

    const addPizza = (event) => {
        event.preventDefault();
        dispatch({type: 'ADD_PIZZA', payload: pizzaToAdd})
        //clear inputs 
        setPizzaToAdd({customer_name: '', street_address: '', city: '', zip: ''})
    }

    return (
        <>
        <form onSubmit={(event) => addPizza}>

            <input 
            onChange={handleNameChange}
            type="text"
            placeholder="Name"
            value={pizzaToAdd.customer_name}
            />

            <input 
            onChange={handleAddressChange}
            type="text"
            placeholder="Street Address"
            value={pizzaToAdd.street_address}
            />

            <input 
            onChange={handleCityChange}
            type="text"
            placeholder="City"
            value={pizzaToAdd.city}
            />

            <input 
            onChange={handleZipChange}
            type="text"
            placeholder="Zip"
            value={pizzaToAdd.zip}
            />

            <label>
                <input 
                    type="radio" 
                    name="radio" 
                    onChange={handleType} 
                    value={pizzaToAdd.pickup}/>
                Pickup</label>

            <label>
                <input 
                    type="radio" 
                    name="radio" 
                    onChange={handleType} 
                    value={pizzaToAdd.delivery}/>
                Delivery</label>

            <button type="submit">NEXT</button>
        </form>
        </>
    )
}

export default CustomerForm;