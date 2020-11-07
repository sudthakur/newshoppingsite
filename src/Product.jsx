import React, { useEffect, useState } from 'react';
import { Component } from 'react';



const Product = (props) => {
    
    const [cartitem,setCartItem]=useState([
        props.pImage
    ]);

    const addtocart=()=>{
        setCartItem(function(){
            
        })
    }

    return (
        <>
            <div className="div_main">
                <img src={props.pImage} alt="Image not Found" />
                <h4>{props.pName}</h4>
                <p className="div_detail">
                    <h4 className="displayprice">&#x20B9;{props.pDisplayPrice}</h4>
                    <h4 className="actualprice">{props.pActualPrice}</h4>
                    <h4 className="discount">{props.pDiscount+"% off"}</h4>
                </p>
                <button className="addtocart" onClick={addtocart}>Add to Cart</button>
            </div>
        </>
    );
}

export default Product;