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

  return (
    <Offcanvas show={show} onHide={handleClose} scroll={true} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <button style={{background: '#ff0000', border:'none', color:'white', padding:'10px', borderRadius:'10px', marginBottom:'20px'}} onClick={() => dispatch(buyCartThunk())}>Buy Cart</button>
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/products/${product.id}`)}
          >
            <p><strong>{product.title}</strong></p>
            <p>Quantity: {product.productsInCart?.quantity} Price: ${product.price} <strong>Total:</strong> ${(product.productsInCart?.quantity)*(product.price)}</p>
            <hr />
          </div>
        ))}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
