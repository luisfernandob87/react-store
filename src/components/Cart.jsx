import React, { useEffect } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { buyCartThunk, getCartThunk } from "../store/slices/cart.slice";

const Cart = ({ show, handleClose }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const products = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartThunk());
  }, []);

  // console.log(products);

  return (
    <Offcanvas show={show} onHide={handleClose} scroll={true} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Button onClick={() => dispatch(buyCartThunk())}>Buy Cart</Button>
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/products/${product.id}`)}
          >
            <p>{product.title}</p>
            <p>{product.productsInCart?.quantity}</p>
          </div>
        ))}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
