import React from 'react';
import './index.css'

const Heading = () => {
    return (
        <>
            <div className="div-heading">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <div className="searchcarticon">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </div>
            </div>
        </>
    )
}

export default Heading;