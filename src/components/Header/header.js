import React from 'react';
import './header.css';
import { Link } from "react-router-dom";

function Header() {


    return (
        <nav className=''>
            <div className='container'>
                <div className='row' >

                    <ul className='ac-gn-list row'>
                        <li className='col' >
                            <Link to='/'>
                                <a className="ac-gn-link ac-gn-link-apple" href="" data-analytics-title="apple home" >
                                </a>
                            </Link>
                        </li>

                        <li className='col'>
                            <Link to='/Store'>
                                <a className="ac-gn-link ac-gn-link-store" href="" data-analytics-title="store">
                                    <span className="ac-gn-link-text">Store</span>
                                </a>
                            </Link>
                        </li>

                        <li className='col'>
                            <a className="ac-gn-link ac-gn-link-store" href="" data-analytics-title="store">
                                <span className="ac-gn-link-text">Mac</span>
                            </a>
                        </li>

                        <li className='col'>
                            <a className="ac-gn-link ac-gn-link-store" href="" data-analytics-title="store">
                                <span className="ac-gn-link-text">iPad</span>
                            </a>
                        </li>

                        <li className='col'>
                            <a className="ac-gn-link ac-gn-link-store" href="" data-analytics-title="store">
                                <span className="ac-gn-link-text">iPhone</span>
                            </a>
                        </li>


                        <li className='col'>
                            <a className="ac-gn-link ac-gn-link-store" href="" data-analytics-title="store">
                                <span className="ac-gn-link-text">Watch</span>
                            </a>
                        </li>

                        <li className='col'>
                            <a className="ac-gn-link ac-gn-link-store" href="" data-analytics-title="store">
                                <span className="ac-gn-link-text">AirPods</span>
                            </a>
                        </li>

                        <li className='col'>
                            <a className="ac-gn-link ac-gn-link-store" href="" data-analytics-title="store">
                                <span className="ac-gn-link-text">TV ve Ev</span>
                            </a>
                        </li>


                        <li className='col'>
                            <a className="ac-gn-link ac-gn-link-store" href="" data-analytics-title="store">
                                <span className="ac-gn-link-text">Yalnızca Apple'da</span>
                            </a>
                        </li>

                        <li className='col'>
                            <a className="ac-gn-link ac-gn-link-store" href="" data-analytics-title="store">
                                <span className="ac-gn-link-text">Aksesuarlar</span>
                            </a>
                        </li>

                        <li className='col'>
                            <a className="ac-gn-link ac-gn-link-store" href="" data-analytics-title="store">
                                <span className="ac-gn-link-text">Destek</span>
                            </a>
                        </li>

                        <li className='col'>
                            <a id="ac-gn-link-search" className="ac-gn-link ac-gn-link-search" href="" data-analytics-title="search" aria-label="apple.com/tr’de arayın" role="button"></a>
                        </li>

                        <li className="col">
                            <div className="ac-gn-bag-wrapper dropdown "

                            >
                                <a
                                    className="ac-gn-link ac-gn-link-bag  "
                                    href=""
                                    aria-label="Alışveriş Çantası"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                >
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><p className="dropdown-item"
                                        style={{ padding: "20px", fontSize: "15px", textAlign: "center" }}
                                    >
                                        Alışveriş çantanız boş.
                                    </p>
                                    </li>

                                    <li><hr className="dropdown-divider" /></li>

                                    <li><a className="dropdown-item" href="#">
                                        <img
                                            style={{ marginRight: "10px" }}
                                            src="https://www.apple.com/ac/globalnav/7/tr_TR/assets/ac-store/bag.svg" height="20" alt="" />
                                        Çanta
                                    </a>
                                    </li>

                                    <li><hr className="dropdown-divider" /></li>

                                    <li><a className="dropdown-item" href="#">
                                        <img
                                            style={{ marginRight: "10px" }}
                                            src="https://www.apple.com/ac/globalnav/7/tr_TR/assets/ac-store/savedbyyou.svg" height="20" alt="" />
                                        Kaydedilen Ürünler
                                    </a>
                                    </li>

                                    <li><hr className="dropdown-divider" /></li>

                                    <li><a className="dropdown-item" href="#">
                                        <img
                                            style={{ marginRight: "10px" }}
                                            src="https://www.apple.com/ac/globalnav/7/tr_TR/assets/ac-store/orders.svg" height="20" alt="" />
                                        Siparişler
                                    </a>
                                    </li>

                                    <li><hr className="dropdown-divider" /></li>

                                    <li><a className="dropdown-item" href="#">
                                        <img
                                            style={{ marginRight: "10px" }}
                                            src="https://www.apple.com/ac/globalnav/7/tr_TR/assets/ac-store/account.svg" height="20" alt="" />
                                        Hesap
                                    </a>
                                    </li>

                                    <li><hr className="dropdown-divider" /></li>

                                        
                                    <li >
                                        <Link to='/Account'><a 
                                        className="dropdown-item" 
                                        href="#"
                                        >
                                            <img
                                                style={{ marginRight: "10px" }}
                                                src="https://www.apple.com/ac/globalnav/7/tr_TR/assets/ac-store/signIn.svg" height="20" alt="" />
                                            Oturum açın
                                        </a>
                                        </Link>
                                    </li>

                                </ul>




                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;