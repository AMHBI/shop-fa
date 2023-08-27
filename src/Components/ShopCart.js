import React , { useContext }from 'react';

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
        </div>
    );
};

export default ShopCart;