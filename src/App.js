import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//Context
import ProductContextProvider from "./Context/ProductContextProvider";
import CartContextProvider from "./Context/CartContextProvider";
//Components
import Store from "./Components/Store";
import ProductDetails from "./Components/ProductDetails";
import Navbar from "./Components/Shared/Navbar";
import ShopCart from "./Components/ShopCart";
//Styles
import "./App.css";

const App = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Switch>
          <Route path='/products/:product_id' component={ProductDetails} />
          <Route path='/products' component={Store} />
          <Route path="/cart" component={ShopCart}/>
          <Redirect to='/products' />
        </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default App;
