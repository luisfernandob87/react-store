import React from 'react';

const PurchaseItem = ({ purchase }) => {


    return (
        <ul>
            {
                purchase.cart.products.map(productItem => (
                    <li key={productItem.id}>
                        <p>{productItem.price}</p>
                    </li>
                ))
            }
        </ul>
    );
};

export default PurchaseItem;