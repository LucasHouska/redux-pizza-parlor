import axios from 'axios';
import {useSelector} from 'react-redux';
import {dispatch, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';


function Checkout() {
    const checkoutTotal = require('../checkoutTotal');

    const dispatch = useDispatch();
    const history = useHistory();

    const customerInfo =  useSelector(store => store.customerReducer);

    const pizzaList = useSelector(store => store.orderReducer);

    // {
    //     "customer_name": "Donatello",
    //     "street_address": "20 W 34th St",
    //     "city": "New York",
    //     "zip": "10001",
            // "type": "Pickup",
    //     "total": "27.98",
    //     
    //     "pizzas": [{
    //       "id": "1",
    //       "quantity": "1"
    //     },{
    //       "id": "2",
    //       "quantity": "1"
    //     }]
    //   }

    

    const handleCheckout = () => {
        const order = {
            customer_name: customerInfo.customer_name,
            street_address: customerInfo.street_address,
            city: customerInfo.city,
            zip: customerInfo.zip,
            type: customerInfo.type,
            total: checkoutTotal(pizzaList),
            pizzas: pizzaList
        };
        axios.post('/api/order', order)
            .then( response => {
                dispatch({
                    type: 'CLEAR_CART'
                })
                history.push('/')
            })
            .catch( err => {
                console.log(err);
            })

        
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