import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './store.css';


function Store() {
    const [products, setProducts] = useState([]);

    const URL = "http://localhost:3334/api/products";

    useEffect(() => {
        axios.get(URL)
            .then(res => {
                setProducts(res.data);
                console.log(res.data);
            }).catch(err => {
                console.log("error", err);
            })
    }, [])

    return (
        <div className='store'>
            <div className='container'>

                <div className='row'>
                    {
                        products.map((item, index) => (
                            <div className='mt-4 col-4 d-flex' key={index}>
                                <div className="card col  ms-3 cards1">
                                    <div className="card-body row">
                                        <h5 className="card-title Title">{item.name}</h5>
                                        <div style={{ textAlign: "center" }} >
                                            <img
                                                src={item.image}
                                                className="cardImg"
                                                alt="..."
                                                width="250"
                                                height="250"
                                            />
                                        </div>
                                        <div className="card-text cardp col-8">Başlangıç fiyatı: {item.price} TL</div>
                                        <button className='btn btn-primary buybutton col-4'>Sepete ekle</button>
                                    </div>
                                </div>

                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}


export default Store;