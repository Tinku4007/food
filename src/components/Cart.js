import React from 'react';
import { useCart, useDispatch } from './ContextReducer';

const Cart = () => {
    const data = useCart();
    const dispatch = useDispatch();

    if (data.length === 0) {
        return (
            <div className='m-5 w-100 text-center fs-3 text-white'>
                This cart is Empty
            </div>
        );
    }
    
    let totalPrice = data.reduce((acc, curr) => acc + curr.price, 0);

    const handleCheckOut = async () => {
        const email = JSON.parse(localStorage.getItem("email"));
        try {
            const response = await fetch("http://localhost:5000/api/order_Data", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    order_Data: data,
                    order_date: new Date().toDateString()
                })
            });

            const result = await response.json();
            console.log(result);

            if (result.success) {
                dispatch({ type: "DROP" });
            } else {
                // Handle error
                console.error(result.message);
                alert("Failed to place order: " + result.message);
            }
        } catch (error) {
            console.error("Error during checkout:", error);
            alert("An error occurred during checkout. Please try again.");
        }
    };

    return (
        <div className='container m-auto mt-5 table-responsive'>
            <table className='table text-white'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Options</th>
                        <th scope='col'>Amount</th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.qty}</td>
                            <td>{item.size}</td>
                            <td>{item.price}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => dispatch({ type: "REMOVE", index: index })}>
                                    X
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <h1 className='fs-2 text-white'>Total Price: ₹{totalPrice}/-</h1>
            </div>
            <div>
                <button className='btn btn-success mt-5' onClick={handleCheckOut}>
                    Check Out
                </button>
            </div>
        </div>
    );
};

export default Cart;
