import axios from 'axios';
import { useEffect, useState } from 'react';

function Admin() {

    const [orderList, setOrderList] = useState([]);

    const fetchOrders = () => {
        axios.get('/api/order')
            .then((response) => {
                setOrderList(response.data);
            }).catch(error => {
                console.log('Error on the GET', error);
            });
    }

    useEffect(() => {
        fetchOrders();
    }, [])

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Time Order Placed</th>
                        <th>Type</th>
                        <th>Cost</th>
                    </tr>
                    {orderList.map((order) => {
                        return (
                            <tr key={order.id}>
                                <td>{order.customer_name}</td>
                                <td>{order.time}</td>
                                <td>{order.type}</td>
                                <td>{order.total}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </>
    )
}

export default Admin;