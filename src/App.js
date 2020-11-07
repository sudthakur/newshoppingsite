import React, { useState, useEffect } from 'react';
import Heading from './Heading';
import Subheading from './Subheading';
import Product from './Product'
import Footer from './Footer';
import CartDetails from './CartDetails'

const App = () => {

  const [apiData, setApiData] = useState([]);
    console.log(apiData);


    async function fetchData() {
        const res = await fetch("https://my-json-server.typicode.com/prograk/demo/items");
        res.json()
            .then(res => setApiData(res));
    }

    useEffect(() => {
        fetchData();
    },[]);

  return(
    <>
    <Heading/>
    <Subheading/>
    {apiData.map((val)=>{
      return(
      <Product
        pImage={val.image}
        pName={val.name}
        pDisplayPrice={val.price.display}
        pActualPrice={val.price.actual}
        pDiscount={val.discount}
      />
      )
    })
    }
    {/* <CartDetails/> */}
    <Footer/>
    </>
  )
}

export default App;