import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Contexts:
import { CartContext } from "../../Context/CartContextProvider";
//Icons :
import cartIcon from "../../assets/icon/cart.svg";

const Navbar = () => {
  const { state } = useContext(CartContext);

  return (
    <div>
      <div>
        <Link to='/products'>Products</Link>
        <div>
          <Link to="/cart">
            <img src={cartIcon} alt='shop' />
          </Link>
          <span>{state.itemsCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
