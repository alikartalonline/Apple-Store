import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './store.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from "react-router-dom";



function Store() {
    const [products, setProducts] = useState([]);
    const { loggedIn } = useAuth();
    const navigate = useNavigate();

    // navigate("/profile", { replace: true });

    const signinClick = () => {
        navigate("/Signin", { replace: true });
    }

    // const URL = "http://localhost:3334/api/products";
    const URL = `${process.env.REACT_APP_APPLE_API}api/products`;

    useEffect(() => {
        axios.get(URL)
            .then(res => {
                setProducts(res.data);
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

                                            <Link to={`/Store/${item.id}`}>
                                                <img
                                                    src={item.image}
                                                    alt="..."
                                                    width="250"
                                                    height="250"
                                                />
                                            </Link>

                                        </div>
                                        <div className="card-text cardp col-8">Başlangıç fiyatı: {item.price} TL</div>
                                        {/* <Link to={`/Signin`} >  */}
                                        {
                                            !loggedIn && (

                                                <button
                                                    className='btn btn-primary buybutton col-5 mt-1 '
                                                    onClick={signinClick}
                                                >
                                                    Oturum açın
                                                </button>

                                            )
                                        }
                                         {/* </Link>  */}

                                        {/* <Link to={`/Store/${item.id}`} > */}
                                        {
                                            loggedIn && (
                                                <button
                                                    className='btn btn-primary buybutton col-4'
                                                    onClick={() => { }}
                                                >
                                                    Sepetim
                                                </button>
                                            )
                                        }
                                        {/* </Link> */}
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