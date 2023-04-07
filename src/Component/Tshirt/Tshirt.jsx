import React from 'react';
import './Tshirt.css';
const Tshirt = ({tshirt,handleAddToCart}) => {
    const {picture,name,price} = tshirt;
    return (
        <div className='tshirt-container'>
           <img src={picture} alt="" />
           <p>Name:{name}</p>
           <p>Price:{price}</p>
           <button onClick={()=>handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;