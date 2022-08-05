import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import { getProductsThunk } from '../store/slices/products.slice';

const ProductDetail = () => {

    const allProducts = useSelector(state => state.products);
    const [ productDetail, setProductDetail ] = useState({});
    const [ suggestedProducts, setSuggestedProducts ] = useState([])

    const { id } = useParams();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(()=> {
        dispatch(getProductsThunk());
    },[]);

    useEffect(()=>{
        const productsFind = allProducts.find(( productItem) => productItem.id == Number(id));
        setProductDetail(productsFind);

        const filteredProducts = allProducts.filter((productItem) => productItem.category.id == productsFind.category.id)
        setSuggestedProducts(filteredProducts);
    },[allProducts, id])

    return (
        <div>
            <h1>{productDetail?.title}</h1>
            <img src={productDetail?.productImgs} alt="Imagen_Producto" />
            <p>{productDetail?.price}</p>
            <ul>
            {
                suggestedProducts.map(product => (
                    <li onClick={() => navigate(`/products/${product.id}`)}>
                        <h3>{product.title}</h3>
                        <img src={product.productImgs} alt="" />
                    </li>
                ))
            }
            </ul>
        </div>
    );
};

export default ProductDetail;