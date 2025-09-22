import React from 'react';
import "./Cart.css"

const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div className='add-cart'>
            {
                cart.map(bottle => <div key={bottle.id} className='cart-item'>
                    <img src={bottle.img} alt="" />
                    <h4>{bottle.name}</h4>
                    <button className='delete' onClick={() => handleRemoveFromCart(bottle.id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default Cart;