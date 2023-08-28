export const titleShortner = title => {
    const splitedTitle = title.split(" ");
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]} ${splitedTitle[2]}`;
    return newTitle;
};
export const isInCart = (state,id) =>{
    let result = !!state.selectedItems.find(item=> item.product_id === id);
    return result;
};
export const quantityCount = (state,id) =>{
    const index = state.selectedItems.findIndex(item => item.product_id === id)
    if (index === -1) {
        return false
    } else {
        return state.selectedItems[index].quantity; 
    }
};
export const priceDivider = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
