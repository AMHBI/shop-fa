export const titleShortner = title => {
    const splitedTitle = title.split(" ");
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]} ${splitedTitle[2]}`;
    return newTitle;
}
export const isInCart = (state,id) =>{
    let result = !!state.selectedItems.find(item=> item.id === id);
    return result;
}