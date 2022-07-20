import React from 'react';
import './homepage.css';

function HomePage() {


    return (
        <section className='container '>
            <div className='row '  >

                {/* 
            <div className='col-md-12 mair'>
            <h1 className=''>MacBook Air</h1>
            <h3 className="logo-m2"     role="text"   aria-label="Süper güçlü Apple M2 çip">
                <span className="visuallyhidden">Süper güçlü M2</span>
            </h3>
            </div> */}

                <div class="module-content col-12  ">

                    <div class="unit-wrapper ">
                        <a class="unit-link" href="/tr/macbook-air-m2/" target="_self" rel="follow" data-analytics-region="learn more" aria-hidden="true" tabindex="-1">&nbsp;</a>
                        <div class="unit-copy-wrapper">

                            <h2 class="headline">MacBook Air</h2>
                            <h3 class="logo-image logo-image-macbook-air-logo-hero-macbookair subhead" role="text" aria-label="Süper güçlü Apple M2 çip"><span class="visuallyhidden">Süper güçlü M2</span></h3>


                            <div class="cta-links">
                                <a class="icon icon-after icon-chevronright" href="/tr/macbook-air-m2/" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="Learn more about MacBook Air M2 chip model" aria-label="M2 çipli MacBook Air hakkında daha fazla bilgi edinin">Daha fazla bilgi</a><img  src="https://i.hizliresim.com/t2bcvmu.png" alt="" />

                                <a class="icon icon-after icon-chevronright" href="/tr/shop/goto/buy_mac/macbook_air_m2" target="_self" rel="follow" data-analytics-region="buy" data-analytics-title="View pricing for Macbook Air M2 chip model" aria-label="M2 çipli MacBook Air için ön sipariş verin">Ön sipariş</a><img  src="https://i.hizliresim.com/t2bcvmu.png" alt="" />
                            </div>
                        </div>
                            <figure class="unit-image "></figure>
                            {/* <img src="https://www.apple.com/v/home/ap/images/heroes/macbook-air/hero_macbookair__el7scava26mq_largetall_2x.png" width={1500} height={800} alt="" /> */}
                    </div>
                </div>


            </div>
        </section>
    )
}

export default HomePage;