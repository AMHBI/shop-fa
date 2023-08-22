import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//Context
import ProductContextProvider from "./Context/ProductContextProvider";

//Components
import Store from "./Components/Store";
import ProductDetails from "./Components/ProductDetails";

//Styles
import "./App.css";

const App = () => {
  return (
    <ProductContextProvider>
      <Switch>
        <Route path='/products/:id' component={ProductDetails} />
        <Route path='/products' component={Store} />
        <Redirect to="/products" />
      </Switch>
    </ProductContextProvider>
  );
};

export default App;
