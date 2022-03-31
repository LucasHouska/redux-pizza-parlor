import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'

function CustomerForm() {

    let [pizzaToAdd, setPizzaToAdd] = useState({customer_name: '', street_address: '', city: '', zip: '', type: ''});
    let [type, setType] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

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
        event.preventDefault;
        const target = event.target;
        if (target.checked){
            setType(target.value);
        }
        setPizzaToAdd({
            ...pizzaToAdd,
            type: target.value
        })
    }

    const addPizza = (event) => {
        
        console.log(pizzaToAdd);
        dispatch({type: 'ADD_CUSTOMER', payload: pizzaToAdd})
        //clear inputs 
        setPizzaToAdd({customer_name: '', street_address: '', city: '', zip: ''})
        history.push('/checkout')
    }

    console.log(type);

    return (
        <>
        <form onSubmit={(event) => addPizza(event)}>

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
                    value={'pickup'}
                    checked={type == 'pickup'}
                    onChange={handleType} 
                    />
                Pickup</label>

            <label>
                <input 
                    type="radio" 
                    name="radio" 
                    value={'delivery'}
                    checked={type == 'delivery'}
                    onChange={handleType} 
                    />
                Delivery</label>

            <button type="submit">NEXT</button>
        </form>
        </>
    )
}

export default CustomerForm;