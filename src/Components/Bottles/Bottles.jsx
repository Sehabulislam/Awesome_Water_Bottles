import React, { use, useState } from 'react';
import Bottle from './Bottle/Bottle';
import './Bottles.css'
const Bottles = ({bottlesPromise}) => {
    const [cart,setCart] = useState([]);

    const handleAddToCart =(bottle) =>{
        console.log("bottel added",bottle);
        const newCart = [...cart,bottle]
        setCart(newCart)
    }
    const bottles = use(bottlesPromise)
    // console.log(bottles);
    return (
        <div>
            <h3>Total Bottles : {bottles.length} Items</h3>
            <h4>Add to Cart : {cart.length} Items</h4>
            <div className='bottles-container'>
                {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;