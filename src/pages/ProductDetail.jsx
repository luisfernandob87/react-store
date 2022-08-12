import React, { useEffect, useState } from "react";
import { InputGroup, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addProductThunk } from "../store/slices/cart.slice";
import {  getProductsThunk } from "../store/slices/products.slice";

const ProductDetail = () => {
  const allProducts = useSelector((state) => state.products);
  const [productDetail, setProductDetail] = useState({});
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  const [quantity, setQuantity ] = useState("");

  const { id } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  useEffect(() => {
    const productsFind = allProducts.find(
      (productItem) => productItem.id == Number(id)
    );
    setProductDetail(productsFind);

    const filteredProducts = allProducts.filter(
      (productItem) => productItem.category.id == productsFind.category.id
    );
    setSuggestedProducts(filteredProducts);
  }, [allProducts, id]);

  const addCart = () =>{
    alert("Añadido")
    const cart = {
        id: productDetail.id,
        quantity
    }
    dispatch(addProductThunk(cart))
  }

  return (
    <section className="details">
      <h1>{productDetail?.title}</h1>
      <img src={productDetail?.productImgs} alt="Imagen_Producto" />
      <p>{productDetail?.price}</p>
      <p>{productDetail?.description}</p>
      <h5>Add to Cart</h5>
      <InputGroup className="mb-3">
        <select value={quantity} onChange={e => setQuantity(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button className="btn"  onClick={addCart}>
          Add to Cart
        </button>
      </InputGroup>

      <h3>Suggestions</h3>
      <ul className="suggested">
        {suggestedProducts.map((product) => (
          <li
            key={product.title}
            onClick={() => navigate(`/products/${product.id}`)}
          >
            <h5>{product.title}</h5>
            <img src={product.productImgs} alt="Product_img" />
            <p className="special">Special Price: {product.price}</p>
            <p>Normal Price: {product.price * 1.25}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductDetail;
