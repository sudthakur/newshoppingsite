import React, { useState, useEffect } from 'react';
import {Route,Switch} from 'react-router-dom';
import Heading from './Heading';
import Login from './Login';
import Products from './Products';
import Cart from './Cart'

const App = () => {

  return(
    <>
      <Heading></Heading>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/products" component={Products}></Route>
        <Route path="/cart" component={Cart}></Route>
      </Switch>
    </>
  )
}

export default App;