import React from 'react';
import './Cart.css'
const Cart = ({cart,handleRemoveCart}) => {
    console.log(cart)
    
        let message;
        if(cart.length===0){
            message=<p>please add some products</p>
        }
        else{
            message = <div>
                <h3>Boroloxxxs</h3>
                <p><small>Thanks for giving money</small></p>
            </div>
        }
    
    return (
        <div>
            <h2 className={cart.length ===0 ? 'red':'green'}>order summary: {cart.length}</h2>
            {cart.length>2 ? <span className='purple'>Aro kino</span> : <span>fookiraaaa</span>}
            {message}
            <p className={`bold ${cart.length ===4 ? 'yellow' : 'purple'}`}>Something</p>
            {
                cart.map(tshirt=><p>
                        Name:{tshirt.name}
               
                <button onClick={()=>handleRemoveCart(tshirt._id)}>X</button>
                </p>)
            }
        {
            cart.length === 2 && <p>Double bonunja</p>
        }
    {
        cart.length === 3 || <h3>Three tho hoilo na miya</h3>
    }
        </div>
    );
};

export default Cart;

/**conditional rendaring
 * 1.use if else to set a variable that will contain an element or component single dewa jave etccc
 * 2. ternary: condition ? 'for true' : 'false'
 * 3.Logical &&: (if the conditon is true then the next thing will be display )
 *4.Logial || (if the condition is false then the next thing will be display )
 * 
 *  */ 

 /**
  * CONDITIONAL CSS CLASS
  */
