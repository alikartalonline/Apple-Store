import React from 'react';
import './homepage.css';

function HomePage() {


    return (
        <section className=''>


            <div className="mt-5 ">
                <figure className="mair-image">

                    <div className='posmac'>

                        <h2 className="headlinemair ">MacBook Air</h2>

                        <h3 className="logo-image logo-image-macbook-air-logo-hero-macbookair " role="text"></h3>


                        <div className="cta-links">
                            <a className="me-4" href="" >Daha fazla bilgi<img src="https://i.hizliresim.com/t2bcvmu.png" alt="" /></a>

                            <a className="" href="">Ön sipariş</a><img src="https://i.hizliresim.com/t2bcvmu.png" alt="" />
                        </div>
                    </div>

                </figure>

            </div>

            <div className='' >
                <figure className="watch-image">

                    <div className='WATCH'>
                    </div>
                    <h1 className='watch-text'>Özgürlük çağrısı.</h1>
                    <p className='watch-text-p'> Apple Watch SE, Cellular modeliyle şimdi sizinle</p>
                    <div className="cta-links">
                        <a className="me-4" href="" >Daha fazla bilgi<img src="https://i.hizliresim.com/t2bcvmu.png" alt="" /></a>

                        <a className="" href="">Satın alın</a><img src="https://i.hizliresim.com/t2bcvmu.png" alt="" />
                    </div>
                </figure>
            </div>


            <div className=''>
                <figure className="uni-image">

                    <h2
                        className="headlineuni pt-5" >
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

                </figure>

            </div>


            <div className='d-flex section4pos'>

                <div className='col-6 mbpro'>
                    <figure className='mbpro-image'>
                        <h4 class="headlinesection4" >13 inç MacBook Pro</h4>
                        <h5
                            class="section4subhead"
                        >
                        </h5>
                        <div className="cta-links">
                        <a className="me-4" 
                        style={{fontSize:'1rem'}}
                        href="" >Daha fazla bilgi<img src="https://i.hizliresim.com/t2bcvmu.png" alt="" /></a>

                        <a 
                        style={{fontSize:'1rem'}} 
                        href="">Satın alın</a><img src="https://i.hizliresim.com/t2bcvmu.png" alt="" />
                    </div>
                    </figure>
                </div>



                <div className='col-6'>
                    <figure className='ip13-image'>
                    <h1 className='headlinei13'>iPhone 13</h1>
                    <h3 class="subheadi13">Süper bir güç.</h3>
                    <div className="cta-links">
                        <a className="me-4" 
                        style={{fontSize:'1rem'}}
                        href="" >Daha fazla bilgi<img src="https://i.hizliresim.com/t2bcvmu.png" alt="" /></a>

                        <a 
                        style={{fontSize:'1rem'}} 
                        href="">Satın alın</a><img src="https://i.hizliresim.com/t2bcvmu.png" alt="" />
                    </div>
                    </figure>
                </div>

            </div>







        </section>
    )
}

export default HomePage;