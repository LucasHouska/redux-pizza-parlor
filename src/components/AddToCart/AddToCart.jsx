import PizzaList from '../PizzaList/PizzaList';
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom';


function AddToCart() {

    const history = useHistory()


    const handleNext = () => {
        history.push('/customerInfo')
    }

    return (
        <>
            <header className='App-header'>
                <h1 className='App-title'>Prime Pizza</h1>
            </header>
            <PizzaList />
            <button onClick={handleNext}>NEXT</button>
        </>
    )
}

export default AddToCart;