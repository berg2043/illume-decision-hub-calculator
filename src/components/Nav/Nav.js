import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Nav(){
    // react router hook
    let history = useHistory();

    return(
        <div>
            <button className='circle-btn' onClick={() => history.push('/break-even')}>
                Break Even Calculator</button>
            <button className='circle-btn' onClick={() => history.push('/profit-lever')}>
                Profit Lever Calculator</button>
            <button className='circle-btn' onClick={() => history.push('/price-setting')}>
                Price Setting Calculator</button>
        </div>
    );
}

