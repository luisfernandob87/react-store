import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPurchasesThunk } from "../store/slices/purchases.slice";
import PurchaseItem from "../components/PurchaseItem";

const Purchases = () => {
  const dispatch = useDispatch();

  const purchases = useSelector((state) => state.purchases);

  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, [dispatch]);

  const getTotal = (products) => {
    let total = 0
    products.forEach(product => {
        total += Number(product.price) 
    });
        return total
  };

  const getDate = (date) =>{
    
    date = new Date(date)

    let result = date.toLocaleString();
    
    return result
  }

  return (
    <>
      <h4 style={{ textAlign: "center" }}>Purchases</h4>
      <section>
        {purchases.map((purchase) => (
          <div className="purchases" key={purchase.id}>
            <p>Order # {purchase.id}</p>
            <p>Date: {getDate(purchase.createdAt)}</p>
            {/* <PurchaseItem purchase={purchase} /> */}
            <p>Total: {getTotal(purchase.cart.products)}</p>
            <p>Status: {purchase.cart.status}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Purchases;
