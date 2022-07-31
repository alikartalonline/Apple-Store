import React from 'react';
import './accountFooter.css';


function accountFooter() {

    return (
        <div className='footercontainer'>
            <footer className='container'>
                <div className='row '>

                    <div>
                        <p className='col-12 footerbottoms '>
                            Diğer alışveriş seçenekleri: Yakınınızda <a className='text-primary' href="">bir Apple Store</a> veya <a className='text-primary' href="">başka bir yetkili satıcı bulun</a>. Veya 00800 448 829 873 ya da 0216 282 15 11 numaralı telefonu arayın.


                            <p className='col-12 mt-1'>
                                Telif Hakkı © {new Date().getFullYear()} Apple Inc. Tüm hakları saklıdır.

                                <a href="" style={{ fontSize: "1.1em", float: "right" }}>
                                    Türkiye
                                </a>
                            </p>


                            <div className='footer-legal-links mt-1'>
                                <a href="" >Gizlilik Politikası</a>
                                <a href="" >Çerezlerin Kullanımı</a>
                                <a href="" >Kullanım Şartları</a>
                                <a href="" >Satış ve Para İadesi</a>
                                <a href="" >Yasal Bilgiler</a>
                                <a href="" >Site Haritası</a>
                                <a href="" style={{ borderRight: "none" }}>Bilgi Toplumu Hizmetleri</a>
                            </div>

                        </p>
                    </div>

                </div>
            </footer>
        </div>
    )
}


export default accountFooter;
