import React, { useEffect, useState } from 'react'
import './storeDetail.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useStore } from '../../contexts/StoreContext';

function StoreDetail() {

    const [product, setProduct] = useState([]);

    const { id } = useParams();
    const { addToBasket, items } = useStore();

    // const URL = "http://localhost:3334/api/product";
    const  URL = `${process.env.REACT_APP_APPLE_API}api/product`;

    useEffect(() => {
        axios.get(`${URL}/${id}`)
            .then(res => {
                setProduct(res.data);
            }).catch(err => {
                console.log("error", err);
            })
    }, [])

    const findBasketItem = items.find((item) => item.id === product.id)

    return (
        <div>
            <h1>STORE DETAIL {id}</h1>
            <h3>{product.name}</h3>
            <h3>{product.price}</h3>
            <img src={product.image} alt="" />
            <button 
            className='btn btn-warning'
            onClick={() => addToBasket(product, findBasketItem)}
            >
            {
                findBasketItem ? "Ürünü Çıkar" : "Sepete Ekle"
            }
            </button>
        </div>
    )
}

export default StoreDetail;