export const titleShortner = title => {
    const splitedTitle = title.split(" ");
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]} ${splitedTitle[2]}`;
    return newTitle;
};
export const isInCart = (state,id) =>{
    let result = !!state.selectedItems.find(item=> item.id === id);
    return result;
};
export const quantityCount = (state,id) =>{
    const index = state.selectedItems.findIndex(item => item.id === id)
    if (index === -1) {
        return false
    } else {
        return state.selectedItems[index].quantity; 
    }
};