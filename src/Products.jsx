import React, { useState, useEffect, createContext } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Cart from './Cart'

const cartdata = createContext();

const Products = () => {

    const [data, setdata] = useState([]);

    const [cart, setcart] = useState([]);

    async function getdata() {
        const res = await fetch("https://fakestoreapi.com/products")
        res.json()
            .then(res => setdata(res));
    }

    useEffect(() => {
        getdata();
    }, [])

    //console.log(data);

    const addtocart = (data) => {
        console.log("data",data);
        setcart([...cart, data]);
    }


    console.log("cart",cart);

    return (
        <>
        <cartdata.Provider value={cart}>
            <Cart></Cart>
        </cartdata.Provider>
        <div className="product_div">
            {data.map((val) => {
                return (
                    <div key={val.id} className="card">
                        <div className="cardimage">
                            <img src={val.image} alt="Product image" />
                        </div>
                        <div className="cardbody">
                            <p>{val.title}</p>
                            <div>
                                <button onClick={() => addtocart(val)} className="btn button-outline btn-secondary">Add to Cart</button>
                                <p>${val.price}</p>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
        </>
    )
}

export default Products

export { cartdata }
