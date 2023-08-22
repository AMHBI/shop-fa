//Context
import ProductContextProvider from "./Context/ProductContextProvider";
//Components
import Store from "./Components/Store";

//Styles
import "./App.css";

const App = () => {
  return (
  <ProductContextProvider>
      <Store />
  </ProductContextProvider>
  );
};

export default App;
