import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {

    const dispatch = useDispatch();

    const purchases = useSelector(state => state.purchases)

    useEffect(()=>{
        dispatch(getPurchasesThunk())
    },[])


    return (
        <ul>
            <h1>Purchases</h1>
            {
                purchases.map(purchase => (
                    <li>
                        <p>{purchase.createdAt}</p>
                    </li>
                ))
            }
        </ul>
    );
};

export default Purchases;