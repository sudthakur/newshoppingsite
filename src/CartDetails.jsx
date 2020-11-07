import React from 'react';

const CartDetails = () => {
    return (
        <>
            <div className="div_cart">
                <div>
                    <img src="" alt="Image Not Found" />
                    <h3>Name</h3>
                    <h3>Price</h3>
                </div>
                <div className="div_quant">
                    <i class="fa fa-minus-circle" aria-hidden="true"></i>
                    <p></p>
                    <i class="fa fa-plus-circle" aria-hidden="true"></i>
                </div>
                <div className="div_remove">
                    <h3>REMOVE</h3>
                </div>
            </div>
        </>
    )
}

export default CartDetails;