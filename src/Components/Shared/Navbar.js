import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Contexts:
import { CartContext } from "../../Context/CartContextProvider";
//Icons :
import cartIcon from "../../assets/icon/cart.svg";
//Styles:
import styles from "./Navbar.module.css";
const Navbar = () => {
  const { state } = useContext(CartContext);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link className={styles.productLink} to='/products'>محصولات</Link>
        <div className={styles.iconContainer}>
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
