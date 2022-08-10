import React, { useEffect } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCartThunk } from '../store/slices/cart.slice';

const Cart = ({ show, handleClose}) => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const products = useSelector((state) => state.cart)

  useEffect(()=>{
    dispatch(getCartThunk())
  },[])

    return (
        <Offcanvas show={show} onHide={handleClose} scroll={true} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {
            products.map(product => (
              <div key={product.id} onClick={() => navigate(`/products/${product.id}`)}>
                <p>{product.title}</p>
              </div>
            ))
          }
        </Offcanvas.Body>
      </Offcanvas>
    );
};

export default Cart;