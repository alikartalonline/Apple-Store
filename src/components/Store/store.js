import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './store.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from "react-router-dom";
import Footer from '../Footer/footer';


function Store() {

    const [products, setProducts] = useState([]);
    const { loggedIn } = useAuth();
    const navigate = useNavigate();

    const signinClick = () => {
        navigate("/Signin", { replace: true });
    }

    const basketClick = () => {
        navigate("/Basket", { replace: true });
    }

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

            {/* Header Container  */}
            <div className='container'>
                <div className='row'>

                    <div className='col'></div>

                    {/* Header Title Left Start */}
                    <div className='col-6 store-title-container'>
                        <h1 className='Store-Title-1'>Store.</h1>
                        <div className='Store-Title-2'>
                            En sevdiğiniz ürünleri <br />satın almanın en iyi yolu.
                        </div>
                    </div>
                    {/* Header Title Left Finish */}

                    {/* Header Title Right Start */}
                    <div className='col-5 store-title-container' >
                        <div className='row'>

                            <div className='col d-flex'>
                                <div>
                                    <img width="35" height="35" alt="" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-chat-specialist-icon-202208?wid=35&amp;hei=35&amp;fmt=jpeg&amp;qlt=95&amp;.v=1659043293925" />
                                </div>

                                <div className='st-container-right-h4 ms-2'>
                                    Alışveriş için yardıma mı ihtiyacınız var?
                                    <div>
                                        <a href="#">Bir Uzman ile görüşün</a>
                                    </div>

                                </div>
                            </div>

                            <div className='col d-flex mt-3'>
                                <div>
                                    <svg viewBox="0 0 35 35" class="as-svgicon as-svgicon-applestore as-svgicon-base as-svgicon-applestorebase" role="img" aria-hidden="true" width="35px" height="35px"><path fill="none" d="M0 0h35v35H0z"></path><path d="M17.5 32.217a1.136 1.136 0 01-1-.576l-1.812-2.525c-.053-.087-.1-.116-.156-.116H10.5A4.5 4.5 0 016 24.5V10.518a4.5 4.5 0 014.5-4.5h14a4.5 4.5 0 014.5 4.5V24.5a4.5 4.5 0 01-4.5 4.5h-4.036a.149.149 0 00-.129.074l-1.867 2.609a1.108 1.108 0 01-.968.534zM10.5 7A3.519 3.519 0 007 10.518V24.5a3.5 3.5 0 003.5 3.5h4.036a1.151 1.151 0 011 .576l1.808 2.524c.128.213.211.17.284.042l1.868-2.61a1.125 1.125 0 01.968-.532H24.5a3.5 3.5 0 003.5-3.5V10.518A3.519 3.519 0 0024.5 7z"></path><path d="M21.35 14.635a2.326 2.326 0 00-1.078 1.94 2.215 2.215 0 001.353 2.051 4.733 4.733 0 01-.693 1.444c-.429.617-.9 1.246-1.584 1.246s-.858-.408-1.661-.408c-.77 0-1.045.419-1.672.419s-1.078-.573-1.584-1.29a6.312 6.312 0 01-1.056-3.363 2.719 2.719 0 012.541-3.021c.682 0 1.232.441 1.65.441s1.023-.463 1.782-.463a2.348 2.348 0 012.002 1.004zm-3.729-1.114c-.055 0-.1-.011-.143-.011 0-.033-.011-.11-.011-.187a2.26 2.26 0 01.561-1.378 2.19 2.19 0 011.485-.772 1.074 1.074 0 01.011.2A2.329 2.329 0 0119 12.794a1.967 1.967 0 01-1.379.727z"></path></svg>
                                </div>

                                <div className='st-container-right-h4 ms-2'>
                                    Bir Apple Store'u ziyaret edin
                                    <div>
                                        <a href="#">Yakınınızda bir Apple Store bulun</a>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Header Title Right Finish */}



                    <div className='col-12 mt-5'>
                        <ul className='d-flex header-title-icons'>

                            <li>
                                <img
                                    width="100"
                                    height="70"
                                    alt=""
                                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-mac-nav-202203?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1645051958490" srcset="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-mac-nav-202203?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1645051958490, https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-mac-nav-202203?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1645051958490 2x" />
                                <div style={{ textAlign: "center", marginTop: "10px" }}>
                                    <a href="#" className='header-title-a'>Mac</a>
                                </div>
                            </li>


                            <li>
                                <img
                                    width="100"
                                    height="70"
                                    alt=""
                                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202109_GEO_EMEA?wid=200&hei=130&fmt=png-alpha&.v=1630706116000" />
                                <div style={{ textAlign: "center", marginTop: "10px" }}>
                                    <a href="#" className='header-title-a'>iPhone</a>
                                </div>
                            </li>


                            <li>
                                <img
                                    width="100"
                                    height="70"
                                    alt=""
                                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-ipad-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783381000" />
                                <div style={{ textAlign: "center", marginTop: "10px" }}>
                                    <a href="#" className='header-title-a'>iPad</a>
                                </div>
                            </li>


                            <li>
                                <img
                                    width="100"
                                    height="70"
                                    alt=""
                                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-watch-nav-202203_GEO_TR?wid=200&hei=130&fmt=png-alpha&.v=1645725726868" />
                                <div style={{ textAlign: "center", marginTop: "10px" }}>
                                    <a href="#" className='header-title-a'>Apple Watch</a>
                                </div>
                            </li>


                            <li>
                                <img
                                    width="100"
                                    height="70"
                                    alt=""
                                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airpods-nav-202110?wid=200&hei=130&fmt=png-alpha&.v=1633718741000" />
                                <div style={{ textAlign: "center", marginTop: "10px" }}>
                                    <a href="#" className='header-title-a'>AirPods</a>
                                </div>
                            </li>


                            <li>
                                <img
                                    width="100"
                                    height="70"
                                    alt=""
                                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783380000" />
                                <div style={{ textAlign: "center", marginTop: "10px" }}>
                                    <a href="#" className='header-title-a'>AirTag</a>
                                </div>
                            </li>


                            <li>
                                <img
                                    width="100"
                                    height="70"
                                    alt=""
                                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-appletv-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783378000" />
                                <div style={{ textAlign: "center", marginTop: "10px" }}>
                                    <a href="#" className='header-title-a'>Apple TV</a>
                                </div>
                            </li>


                            <li>
                                <img
                                    width="100"
                                    height="70"
                                    alt=""
                                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-accessories-nav-202203?wid=200&hei=130&fmt=png-alpha&.v=1645051958489" />
                                <div style={{ textAlign: "center", marginTop: "10px" }}>
                                    <a href="#" className='header-title-a'>Aksesuarlar</a>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>









            {/* Store Products Start  */}
            <div className='container mt-5' style={{ marginBottom: "10%" }}>

                <div className='row'>

                    <div className='col-12 ms-3 mt-3' style={{ textAlign: "left" }}>
                        <h2 className='products-titles-1'>Son çıkanlar.</h2>
                        <span className='products-titles-span'>Yeniliklere göz atın.</span>
                    </div>



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


                                        {
                                            loggedIn && (
                                                <button
                                                    className='btn btn-primary buybutton col-4'
                                                    onClick={basketClick}
                                                >
                                                    Sepetim
                                                </button>
                                            )
                                        }

                                    </div>

                                </div>
                            </div>

                        ))
                    }

                </div>
            </div>
            {/* Store Products Finish  */}


            <Footer />
        </div>
    )
}


export default Store;