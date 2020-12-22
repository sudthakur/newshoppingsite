import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Heading=()=>{
    return(
        <>
        <div className="div-heading">
            <Link to="/">Login</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
        </div>
        </>
    )
}

export default Heading;