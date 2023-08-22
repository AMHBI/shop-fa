import React,{useReducer} from 'react';
const initialstate = {
    selectedItems= [],
    itemCounter: 0,
    total:0,
    checkout:false
};
const cartReducer =(state , action) =>{
    switch(action.type){
        case "ADD_ITEM":
            if (state.selectedItems.find())
    }
}

const CartContextProvider = () => {

    const [state, dispatch] = useReducer(cartReducer, initialstate);
    return (
        <div>
            
        </div>
    );
};

export default CartContextProvider;