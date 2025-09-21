import React from 'react';
import './Bottle.css'

const Bottle = (bottle) => {
    console.log(bottle.bottle);
    const {img,name} = bottle.bottle
    return (
        <div className='bottle-card'>
            <img src={img} alt="" />
            <h2>{name}</h2>
        </div>
    );
};

export default Bottle;