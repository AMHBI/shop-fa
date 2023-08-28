import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

//Functions :
import { titleShortner, isInCart, quantityCount , priceDivider } from "../../Helper/fuctions";

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
      <img
        src={productData.image_link}
        alt='product'
        className={styles.cardImage}
      />
      <h3>{productData.title}</h3>
      <p>{priceDivider(productData.price)} تومان</p>
      <div className={styles.linkContainer}>
        <div className={styles.buttonContainer}>
          {quantityCount(state, productData.product_id) === 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }>
              <img src={trashIcon} alt='trash' style={{ width: "15px" }} />
            </button>
          )}
          {quantityCount(state, productData.product_id) > 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }>
              -
            </button>
          )}
          {isInCart(state, productData.product_id) ? (
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
              افزودن به سبد خرید
            </button>
          )}
        </div>
        <Link to={`/products/${productData.product_id}`}>جزئیات</Link>
      </div>
    </div>
  );
};

export default Product;
