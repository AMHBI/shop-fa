import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

//Functions :
import { titleShortner, isInCart, quantityCount } from "../../Helper/fuctions";

//Contexts:
import { CartContext } from "../../Context/CartContextProvider";
//Icons
import trashIcon from "../../assets/icon/trash.svg";
const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div>
      <img src={productData.image} alt='product' style={{ width: "100px" }} />
      <h3>{titleShortner(productData.title)}</h3>
      <p>{productData.price} $</p>
      <div>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div>
          {isInCart(state, productData.id) ? (
            <button
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
          {quantityCount(state,productData.id) === 1 && <button onClick={()=> dispatch({type:"REMOVE_ITEM",payload:productData})}><img src={trashIcon} alt="trash" style={{width:"15px"}}/></button>}
          {quantityCount(state,productData.id) > 1 && <button onClick={()=> dispatch({type:"DECREASE",payload:productData})}>-</button>}
          
        </div>
      </div>
    </div>
  );
};

export default Product;
