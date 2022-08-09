import React from 'react';

const PurchaseItem = ({ purchase }) => {


    return (
        <ul>
            {
                purchase.cart.products.map(productItem => (
                    <li>
                        <p>{productItem.price}</p>
                    </li>
                ))
            }
        </ul>
    );
};

export default PurchaseItem;