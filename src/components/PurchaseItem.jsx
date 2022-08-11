import React from 'react';

const PurchaseItem = ({ purchase }) => {


    return (
        <>
            {
                purchase.cart.products.map(productItem => (
                    <li key={productItem.id}>
                        <p>{productItem.price}</p>
                    </li>
                ))
            }
        </>
    );
};

export default PurchaseItem;