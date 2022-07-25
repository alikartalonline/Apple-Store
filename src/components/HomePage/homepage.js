import React from 'react';
import './homepage.css';

function HomePage() {


    return (
        <section className='container'>
            <div className='row '>


                <div className="col-12  ">
                    <div className='posmac'>
                        <h2 className="headline ">MacBook Air</h2>

                        <h3 className="logo-image logo-image-macbook-air-logo-hero-macbookair " role="text"></h3>


                        <div className="cta-links">
                            <a className="me-4" href="" >Daha fazla bilgi<img src="https://i.hizliresim.com/t2bcvmu.png" alt="" /></a>

                            <a className="" href="">Ön sipariş</a><img src="https://i.hizliresim.com/t2bcvmu.png" alt="" />
                        </div>
                    </div>

                    <figure className="mair-image">
                    </figure>

                </div>

                <div className='col-12' >
                    <div className='WATCH'>
                    </div>
                    <h1 className='watch-text'>Özgürlük çağrısı.</h1>
                    <p className='watch-text-p'> Apple Watch SE, Cellular modeliyle şimdi sizinle</p>
                    <div className="cta-links">
                        <a className="me-4" href="" >Daha fazla bilgi<img src="https://i.hizliresim.com/t2bcvmu.png" alt="" /></a>

                        <a className="" href="">Satın alın</a><img src="https://i.hizliresim.com/t2bcvmu.png" alt="" />
                    </div>
                    <figure className="watch-image">
                    </figure>
                </div>


                <div className='col-12 '>

                    <h2
                        className="headlineuni" >
                        Üniversitede
                        {" "}
                        <span className='section3'>süper güçleriniz</span>
                        {" "}
                        olsun.
                    </h2>

                    <h3 className='subheadsection3 '>
                        Mac veya iPad satın alın, tasarruf edin. Ve AirPods sahibi olun.
                    </h3>

                    <div className="cta-links">
                        <a className="me-4" href="" >Alışveriş yapın<img src="https://i.hizliresim.com/t2bcvmu.png" alt="" /></a>
                    </div>

                    <figure className="uni-image">
                    </figure>

                </div>


            </div>
        </section>
    )
}

export default HomePage;