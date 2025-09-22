/**
 * 1. to getsomething from local storage, you will get it as a string. 
 * 2. convert this to javascript object/array 
 * 
 */

const getCartFromLocalStorage = () =>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
}

const savecartToLocalStorage = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}

const addItemToCartLocalStorage = (id) =>{
    const cart = getCartFromLocalStorage();
    // cart.push(id)
    const newCart = [...cart,id];

    //save new cart to the local storage
    savecartToLocalStorage(newCart);
}

const removeItemFromLocalStorage = id =>{
    const storedCart =  getCartFromLocalStorage();
    const remainingCart = storedCart.filter(storedId => storedId !== id);
    savecartToLocalStorage(remainingCart)
}

export {getCartFromLocalStorage as getStoreCart,addItemToCartLocalStorage as addStoreCart, removeItemFromLocalStorage as removeFormCart};