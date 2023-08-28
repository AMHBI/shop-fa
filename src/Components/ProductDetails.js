import React, { useContext } from "react";
//routing
import { Link } from "react-router-dom/cjs/react-router-dom.min";
//context
import { ProductsContext } from "../Context/ProductContextProvider";
import { priceDivider } from "../Helper/fuctions";
//Styles:
import styles from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const id = props.match.params.product_id;
  const data = useContext(ProductsContext);
  const selectedProduct = data.find((product) => product.product_id === id);
  const { image_link, title, page_url, price, availability } = selectedProduct;
  

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image_link} alt={title} />
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p className={styles.description}>{page_url}</p>
        <p className={styles.category}>
          <span>موجودی :</span>{" "}
          {availability === "instock" ? "موجود در انبار" : "ناموجود"}
        </p>
        <div className={styles.buttonContainer}>
          <span className={styles.price}>{priceDivider(price)} تومان</span>
          <br />
          <Link to='/products'> برگشت به فروشگاه</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
