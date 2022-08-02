import React from 'react';
import './store.css';

function Store() {


    return (
        <div className='store'>
            <div className='container'>
                <div className='row'>

                    <div className='mt-4 col-12 d-flex'>

                        <div className="card col cards1">
                            <div className="card-body row">
                                <h5 className="card-title Title">M1 çipli MacBook Air</h5>
                                <div style={{ textAlign: "center" }} >
                                    <img
                                        src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-macbook-air-202110_FMT_WHH?wid=375&hei=450&fmt=p-jpg&qlt=95&.v=1633726240000"
                                        className="cardImg"
                                        alt="..."
                                        width="250"
                                        height="250"
                                    />
                                </div>
                                    <div className="card-text cardp col-8">Başlangıç fiyatı: 20.999 TL</div>
                                    <button className='btn btn-primary buybutton col-4'>Sepete ekle</button>
                            </div>
                        </div>




                        <div className='col ms-2'>
                            <h1>helllo</h1>

                        </div>



                        <div className='col ms-2'>
                            <h1>helllo</h1>

                        </div>


                    </div>








                </div>
            </div>
        </div>
    )
}


export default Store;