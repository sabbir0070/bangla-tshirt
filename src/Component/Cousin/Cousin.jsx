import React, { Children } from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({hasFriend,ring}) => {
    return (
        <div>
           <h2>Cousin</h2>
           { hasFriend && <Friend ring={ring} ></Friend>}
           {/* <p><small>{Children}</small></p>  */}
        </div>
    );
};

export default Cousin;