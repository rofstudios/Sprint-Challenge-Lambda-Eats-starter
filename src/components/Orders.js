import React from 'react'

function Orders(props){
    return (
        <>
        <h2>Your Order(s)</h2>
        {/* show all orders place from pizza array */}
        <div className='member-list'>
            {props.orders.map(order => (
                <div className='note' key={props.orders.id}>
                    <h3>Name: {props.orders.name}</h3>
                    <p>Size: {props.orders.size}</p>
                    {/* <p>Toppings: {props.orders.toppings.filter(topping => props.orders.topping.[topping] === true)}</p> */}
                    <p>Toppings: {props.orders.toppings}</p>
                    <p>Instructions: {props.orders.instructions}</p>
                </div>
            ))}
        </div>

        </>
    )
}

export default Orders;