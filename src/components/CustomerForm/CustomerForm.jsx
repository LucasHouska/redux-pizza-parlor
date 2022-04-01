import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'

function CustomerForm() {

    const checkoutTotal = require('../checkoutTotal');
    let [pizzaToAdd, setPizzaToAdd] = useState({customer_name: '', street_address: '', city: '', zip: '', type: ''});
    let [type, setType] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const pizzaList = useSelector(store => store.orderReducer);

    

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
            <div className='App-header'>
                <h1 className='App-title'>Prime Pizza</h1>
                <h2 className='total'>Total: ${checkoutTotal(pizzaList)}</h2>
            </div>
        

        <form className="form" onSubmit={(event) => addPizza(event)}>

            <h2>Step 2: Customer Information</h2>

            <input 
            className="formInput"
            onChange={handleNameChange}
            type="text"
            placeholder="Name"
            value={pizzaToAdd.customer_name}
            />

            <input 
            className="formInput"
            onChange={handleAddressChange}
            type="text"
            placeholder="Street Address"
            value={pizzaToAdd.street_address}
            />

            <input 
            className="formInput"
            onChange={handleCityChange}
            type="text"
            placeholder="City"
            value={pizzaToAdd.city}
            />

            <input 
            className="formInput"
            onChange={handleZipChange}
            type="text"
            placeholder="Zip"
            value={pizzaToAdd.zip}
            />

            <h2>Pickup or Delivery?</h2>

            <label>
                <input 
                    className="radio"
                    type="radio" 
                    name="radio" 
                    value={'Pickup'}
                    checked={type == 'Pickup'}
                    onChange={handleType} 
                    />
                Pickup</label>

            <label>
                <input 
                    className="radio"
                    type="radio" 
                    name="radio" 
                    value={'Delivery'}
                    checked={type == 'Delivery'}
                    onChange={handleType} 
                    />
                Delivery</label>

            <button type="submit">NEXT</button>
        </form>
        </>
    )
}

export default CustomerForm;