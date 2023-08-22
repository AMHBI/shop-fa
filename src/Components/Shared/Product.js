import React from 'react';
import { titleShortner } from '../../Helper/fuctions';


const Product = ({productData}) => {
    return (
        <div>
            <h3>{titleShortner(productData.title)}</h3>
            <p>{productData.price} $</p>
            <div>
                <a>Details</a>
                <div>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;