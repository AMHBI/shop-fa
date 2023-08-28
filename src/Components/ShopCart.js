import React , { useContext }from 'react';
import { Link } from 'react-router-dom';

//Contexts : 
import {CartContext} from '../Context/CartContextProvider';
import {priceDivider} from "../Helper/fuctions";
//Components :
import Cart from './Shared/Cart';
//Styles:
import styles from "./ShopCart.module.css";

const ShopCart = () => {
    const {state, dispatch} = useContext(CartContext);
    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {
                    state.selectedItems.map(item => <Cart key={item.id} data={item}/>)
                }
            </div>
            {
                state.itemsCounter > 0 && <div className={styles.payments}>
                    <p><span>Total Item:</span> {state.itemsCounter}</p>
                    <p><span>Total Payments:</span> {priceDivider(state.total)}</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.clear} onClick={()=>dispatch({type:'CHECKOUT'})}>checkout</button>
                        <button className={styles.checkout} onClick={()=>dispatch({type:'CLEAR'})}>Clear</button>
                    </div>
                </div>
            }
            {
                    state.checkout && <div className={styles.complete}>
                        <h3>Thank you for your purchase.</h3>
                        <Link to="/products">Go to shop</Link>
                    </div>
            }
            
            {
                    !state.checkout && state.itemsCounter === 0 && <div className={styles.complete}>
                        <h3>Your cart is empty</h3>
                        <Link to="/products">visit shop</Link>
                    </div>
            }
        </div>
    );
};

export default ShopCart;