import React, {useContext} from 'react';

//Context
import {ProductsContext} from '../Context/ProductContextProvider';
import Product from './Shared/Product';
//Styles:
import styles from "./Store.module.css";

const Store = () => {
    const products = useContext(ProductsContext);

    return (
        <div className={styles.container}>
            {
                products.map(product => <Product key={product.id} productData={product}/>)
                
            }
        </div>
    );
};

export default Store;