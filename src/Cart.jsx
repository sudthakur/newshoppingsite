import React, {useContext}from 'react'
import { cartdata } from './Products'


const Cart=() => {

    const details = useContext(cartdata);
    console.log(details)
    
    return(
        <div className="card">
        <div className="cardimage">
            <img src="" alt="Product image" />
        </div>
        <div className="cardbody">
            <p></p>
            <button className="btn button-outline btn-secondary">Remove from Cart</button>
        </div>
    </div>
    )
}

export default Cart
