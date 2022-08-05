import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import { getProductsThunk } from '../store/slices/products.slice';

const ProductDetail = () => {

    const allProducts = useSelector(state => state.products);
    const [ productDetail, setProductDetail ] = useState({});

    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getProductsThunk());
    },[]);

    useEffect(()=>{
        const products = allProducts.find(( productItem) => productItem.id == Number(id));
        setProductDetail(products)
    },[allProducts])

    return (
        <div>
            <h1>{productDetail?.title}</h1>
            <img src={productDetail?.productImgs} alt="Imagen_Producto" />
            <p>{productDetail?.price}</p>
        </div>
    );
};

export default ProductDetail;