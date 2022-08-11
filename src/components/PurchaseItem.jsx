import React from 'react';

const PurchaseItem = ({ purchase }) => {

    return (
        <>
            {
                purchase.cart.products.map(productItem => (
                    <div key={productItem.id}>
                        {/* <p>{productItem.price}</p> */}
                    </div>
                ))
            }
        </>
    );
};

export default PurchaseItem;