

function Checkout() {

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

    const checkoutTotal = () => {
        let total = 0;

        for (let pizza of pizzaList) {
            total += Number(pizza.price);
        }

        return total;
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
            <h1>Total: {checkoutTotal()}</h1>
            <button>CHECKOUT</button>
        </>
    )
}

export default Checkout;