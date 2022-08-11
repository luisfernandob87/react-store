import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../store/slices/purchases.slice';
import PurchaseItem from '../components/PurchaseItem';

const Purchases = () => {
    const dispatch = useDispatch();

    const purchases = useSelector(state => state.purchases)

    useEffect(()=>{
        dispatch(getPurchasesThunk())

    },[dispatch])

    return (
        <ul>
            <h1>Purchases</h1>
            {
                purchases.map(purchase => (
                    <li key={purchase.id}>
                    <p>{purchase.id}</p>
                    <p>{purchase.createdAt}</p>
                    <PurchaseItem purchase={purchase}/>
                    </li>
                ))
            }
           
        </ul>
    );
};

export default Purchases;