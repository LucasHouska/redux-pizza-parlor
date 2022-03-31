import axios from 'axios';
import {useSelector} from 'react-redux';
import {dispatch, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';


function Checkout() {
    const checkoutTotal = require('../checkoutTotal');

    const dispatch = useDispatch();
    const history = useHistory();

    const customerInfo = {
        customer_name: 'Freddy',
        street_address: '123 Main Ave',
        city: 'Eagan',
        zip: '55122',
        type: 'Pickup',
        total: '12.50',
        time: '2022-03-31 11:28'
    };

    const pizzaList = [{
            id: '1',
            name: 'Tomato Soup',
            price: '12.99'
        }, {
            id: '2',
            name: 'Pepperoni',
            price: '14.99'
        }
    ];

    const handleCheckout = () => {
        // TODO: Clear the cart and navigate to the product page
        

        axios.post('/api/order', )

        dispatch({
            type: 'CLEAR_CART'
        })
        history.push('/')
    }

    return (
        <>
            <h2>Step 3: Checkout</h2>
            <p>{customerInfo.customer_name} {customerInfo.type}</p>
            <p>{customerInfo.street_address}</p>
            <p>{customerInfo.city}</p>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {pizzaList.map(pizza => (
                            <tr key={pizza.id}>
                                <td>{pizza.name}</td>
                                <td>{pizza.price}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <h1>Total: {checkoutTotal(pizzaList)}</h1>
            <button onClick={handleCheckout}>CHECKOUT</button>
        </>
    )
}

export default Checkout;