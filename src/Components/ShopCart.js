import React , { useContext }from 'react';
import { Link } from 'react-router-dom';

//Contexts : 
import {CartContext} from '../Context/CartContextProvider';
//Components :
import Cart from './Shared/Cart';

const ShopCart = () => {
    const {state, dispatch} = useContext(CartContext);
    return (
        <div>
            <div>
                {
                    state.selectedItems.map(item => <Cart key={item.id} data={item}/>)
                }
            </div>
            {
                state.itemsCounter > 0 && <div>
                    <p><span>Total Item:</span> {state.itemsCounter}</p>
                    <p><span>Total Payments:</span> {state.total}</p>
                    <div>
                        <button onClick={()=>dispatch({type:'CHECKOUT'})}>checkout</button>
                        <button onClick={()=>dispatch({type:'CLEAR'})}>Clear</button>
                    </div>
                </div>
            }
            {
                    state.checkout && <div>
                        <h3>Thank you for your purchase.</h3>
                        <Link to="/products">Go to shop</Link>
                    </div>
            }
            
            {
                    !state.checkout && state.itemsCounter === 0 && <div>
                        <h3>Your cart is empty</h3>
                        <Link to="/products">visit shop</Link>
                    </div>
            }
        </div>
    );
};

export default ShopCart;