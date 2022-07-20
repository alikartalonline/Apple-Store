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
                                {/* <span className="ac-gn-link-text">Apple</span> */}
                            </a>
                            </Link>
                        </li>

                        <li className='col'>
                            <a className="ac-gn-link ac-gn-link-store" href="" data-analytics-title="store">
                                <span className="ac-gn-link-text">Store</span>
                            </a>
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

                        {/* <a className=" ac-gn-link ac-gn-link-search" href="" data-analytics-title="store"> */}

                        <li className='col'>
                            <a id="ac-gn-link-search" className="ac-gn-link ac-gn-link-search" href="" data-analytics-title="search" data-analytics-intrapage-link="" aria-label="apple.com/tr’de arayın" role="button" aria-haspopup="true"></a>
                        </li>

                        <li className="ac-gn-item ac-gn-bag col" id="ac-gn-bag">
                            <div className="ac-gn-bag-wrapper dropdown ">
                                <a
                                    className="ac-gn-link ac-gn-link-bag dropdown-toggle "
                                    href=""
                                    aria-label="Alışveriş Çantası"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    aria-controls="ac-gn-bagview-content"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                >
                                </a>

                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><p class="dropdown-item" >Alışveriş çantanız boş.</p></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
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