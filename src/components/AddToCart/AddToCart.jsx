import PizzaList from '../PizzaList/PizzaList';
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import {useSelector} from 'react-redux';


function AddToCart() {

    const history = useHistory();
    const checkoutTotal = require('../checkoutTotal');
    const orderList = useSelector(store => store.orderReducer);


    const handleNext = () => {
        history.push('/customerInfo')
    }

    return (
        <>
            <div className='App-header'>
                <h1 className='App-title'>Prime Pizza</h1>
                <h2 className='total'>Total: ${checkoutTotal(orderList)}</h2>
            </div>
            <PizzaList />
            <button onClick={handleNext} className="next">NEXT</button>
        </>
    )
}

export default AddToCart;