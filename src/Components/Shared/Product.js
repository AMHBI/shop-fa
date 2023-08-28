import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

//Functions :
import { titleShortner, isInCart, quantityCount } from "../../Helper/fuctions";

//Contexts:
import { CartContext } from "../../Context/CartContextProvider";
//Icons
import trashIcon from "../../assets/icon/trash.svg";
//Styles:
import styles from "./Product.module.css";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <img src={productData.image} alt='product' className={styles.cardImage} />
      <h3>{titleShortner(productData.title)}</h3>
      <p>{productData.price} $</p>
      <div className={styles.linkContainer}>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div className={styles.buttonContainer}>
          {quantityCount(state, productData.id) === 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }>
              <img src={trashIcon} alt='trash' style={{ width: "15px" }} />
            </button>
          )}
          {quantityCount(state, productData.id) > 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }>
              -
            </button>
          )}
          {isInCart(state, productData.id) ? (
            <button
            className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }>
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }>
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
