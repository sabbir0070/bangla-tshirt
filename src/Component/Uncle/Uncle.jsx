import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = ({ring}) => {
    const[money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Uncle</h2>
            <p><small>grandpa:{money}</small></p>
            <button onClick={()=>setMoney(money+1000)}> Send 1000</button>
            <section className='flex'>
            <Cousin ring={ring}>Navil</Cousin>
            <Cousin>Navila</Cousin>
            </section>
        </div>
    );
};

export default Uncle;