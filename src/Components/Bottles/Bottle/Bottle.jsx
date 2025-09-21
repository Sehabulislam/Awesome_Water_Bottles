import React from 'react';
import './Bottle.css'

const Bottle = ({bottle,handleAddToCart}) => {
    // console.log(bottle);
    const {img,name,price,stock,ratings} = bottle
    return (
        <div className='bottle-card'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>Price : {price} USD</h4>
            <p>Quantity : {stock} Available</p>
            <p>Reatings : {ratings}</p>
            <button onClick={()=> handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;