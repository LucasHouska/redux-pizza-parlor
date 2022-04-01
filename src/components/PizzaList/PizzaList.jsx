import axios from 'axios';
import PizzaListItem from '../PizzaListItem/PizzaListItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';





function PizzaList() {

    const dispatch = useDispatch();

    const fetchPizzas = () => {
        axios.get('/api/pizza')
            .then(response => {
                dispatch({ type: 'SET_PIZZA_LIST', payload: response.data })
            }).catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        fetchPizzas();
    }, [])

    const pizzaReducer = useSelector(state => state.pizzaReducer)

    return (
        <>
            <h2>Step 1: Select Your Pizza</h2>
            <div className='pizzaContainer'>
                {pizzaReducer.map(pizza => {
                return <PizzaListItem key={pizza.id} pizza={pizza}/>;
                })}
            </div>

        </>
    )
}

export default PizzaList;