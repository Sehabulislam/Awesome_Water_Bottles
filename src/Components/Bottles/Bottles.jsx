import React, { use, useEffect, useState } from 'react';
import Bottle from './Bottle/Bottle';
import './Bottles.css'
import { addStoreCart, getStoreCart, removeFormCart } from '../../Utilities/localstorage';
import Cart from '../Cart/Cart';
const Bottles = ({bottlesPromise}) => {
    const [cart,setCart] = useState([]);
    
    const bottles = use(bottlesPromise)
    // console.log(bottles);

    //useEffect 
    useEffect(() => {
        const storedCartIds = getStoreCart();
        // console.log(storedCart,bottles);

        const storedCart = [];

        for(const id of storedCartIds){
           // console.log(id);
            const cartBottle = bottles.find(bottle => bottle.id === id );
            if(cartBottle){
                storedCart.push(cartBottle)
            }
        }
        setCart(storedCart)
    },[bottles] )

    const handleAddToCart =(bottle) =>{
        // console.log("bottel added",bottle);
        const newCart = [...cart,bottle]
        setCart(newCart)

        //save the bottle id to local storage
        addStoreCart(bottle.id);
    }

    const handleRemoveFromCart = (id)=>{
        console.log("remeve item", id);

        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        removeFormCart(id)
    }
    return (
        <div>
            <h3>Total Bottles : {bottles.length} Items</h3>
            <h4>Add to Cart : {cart.length} Items</h4>
            <Cart cart= {cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className='bottles-container'>
                {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;