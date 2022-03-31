import PizzaList from '../PizzaList/PizzaList';


function AddToCart() {
    return (
        <>
            <header className='App-header'>
                <h1 className='App-title'>Prime Pizza</h1>
            </header>
            <PizzaList />
            <button>NEXT</button>
        </>
    )
}

export default AddToCart;