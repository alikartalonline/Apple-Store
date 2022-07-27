import React from 'react';
import './footer.css';


function Footer() {

    return (
        <div className='footercontainer'>

            <footer className='container'>
                <div className='row '>

                    <p className='col-12 footerheadline'>* Koşullara Uygun Müşteriler, Kampanya Dahilindeki Yerlerden kampanya dahilinde bir Mac veya kampanya dahilinde bir iPad ile birlikte kampanya dahilinde AirPods satın aldıklarında Kampanya İndirimi’nden yararlanabilirler. Kampanya dahilinde bir Mac veya kampanya dahilinde bir iPad satın alan Koşullara Uygun Müşteri başına yalnızca bir AirPods çifti için geçerlidir. Teklif stoklarla sınırlıdır. Burada belirtilen hüküm ve koşullara tabidir.

                    </p>


                    <div className='col'>
                        <ul className='container'>
                            <h3 class="directory-section-title">Alışveriş ve Detaylı Bilgi</h3>
                            <li>
                                <a href="">store</a>
                            </li>
                            <li>
                                <a href="">Mac</a>
                            </li>
                            <li>
                                <a href="">iPad</a>
                            </li>
                            <li>
                                <a href="">iPhone</a>
                            </li>
                            <li>
                                <a href="">Watch</a>
                            </li>
                            <li>
                                <a href="">AirPods</a>
                            </li>
                            <li>
                                <a href="">TV ve EV</a>
                            </li>
                            <li>
                                <a href="">AirTag</a>
                            </li>
                            <li>
                                <a href="">Aksesuarlar</a>
                            </li>
                        </ul>
                    </div>


                    <div className='col'>
                        <ul className='container'>
                            <h3 class="directory-section-title">Servisler</h3>
                            <li>
                                <a href="">Apple Music</a>
                            </li>
                            <li>
                                <a href="">Apple Arcade</a>
                            </li>
                            <li>
                                <a href="">iCloud</a>
                            </li>
                            <li>
                                <a href="">Apple Books</a>
                            </li>
                            <li>
                                <a href="">Apple Podcasts</a>
                            </li>
                            <li>
                                <a href="">App Store</a>
                            </li>
                        </ul>

                        <ul className='container' >
                            <h3 class="directory-section-title mt-5">Hesap</h3>

                            <li>
                                <a href="">Apple ID'nizi Yönetin</a>
                            </li>
                            <li>
                                <a href="">Apple Store Hesabı</a>
                            </li>
                            <li>
                                <a href="">iCloud.com</a>
                            </li>
                        </ul>

                    </div>


                    <div className='col'>
                        <ul className='container'>
                            <h3 class="directory-section-title">Apple Store</h3>
                            <li>
                                <a href="">Mağaza Bulun</a>
                            </li>
                            <li>
                                <a href="">Genius Bar</a>
                            </li>
                            <li>
                                <a href="">Today at Apple</a>
                            </li>
                            <li>
                                <a href="">Apple Yaz Kampı</a>
                            </li>
                            <li>
                                <a href="">Apple Store Uygulaması</a>
                            </li>
                            <li>
                                <a href="">Ödeme Kolaylıkları</a>
                            </li>
                            <li>
                                <a href="">Apple Geri Dönüşüm Programı</a>
                            </li>
                            <li>
                                <a href="">Sipariş Durumu</a>
                            </li>
                            <li>
                                <a href="">Alışveriş Yardımı</a>
                            </li>
                        </ul>
                    </div>



                    <div className='col'>
                        <ul className='container'>
                            <h3 class="directory-section-title">Kurumsal Müşteriler İçin</h3>
                            <li>
                                <a href="">Apple ve İş Dünyası</a>
                            </li>
                            <li>
                                <a href="">Şirketiniz için Alışveriş Yapın</a>
                            </li>
                        </ul>

                        <ul className='container'>
                            <h3 class="directory-section-title mt-5">Eğitim İçin</h3>
                            <li>
                                <a href="">Apple ve Eğitim</a>
                            </li>
                            <li>
                                <a href="">K-12 için Alışveriş Yapın</a>
                            </li>
                            <li>
                                <a href="">Üniversite için Alışveriş Yapın </a>
                            </li>
                        </ul>

                    </div>



                    <div className='col'>
                        <ul className='container'>
                            <h3 class="directory-section-title">Apple'ın Değerleri</h3>
                            <li>
                                <a href="">Erişebilirlik</a>
                            </li>
                            <li>
                                <a href="">Çevre</a>
                            </li>
                            <li>
                                <a href="">Gizlilik</a>
                            </li>
                            <li>
                                <a href="">Tedarikçi Sorumluluğu</a>
                            </li>
                        </ul>

                        <ul className='container'>
                            <h3 class="directory-section-title mt-5"> Apple Hakkında</h3>
                            <li>
                                <a href="">Newsroom</a>
                            </li>
                            <li>
                                <a href="">Apple Yönetimi</a>
                            </li>
                            <li>
                                <a href="">Kariyer Fırsatları</a>
                            </li>
                            <li>
                                <a href="">Garanti</a>
                            </li>
                            <li>
                                <a href="">Etik ve Uyumluluk</a>
                            </li>
                            <li>
                                <a href="">Etkinlikler</a>
                            </li>
                            <li>
                                <a href="">Apple ile İletişim</a>
                            </li>
                        </ul>

                    </div>

                    <p className='col-12 footerbottom'>
                        Diğer alışveriş seçenekleri: Yakınınızda <a className='text-primary' href="">bir Apple Store</a> veya <a className='text-primary' href="">başka bir yetkili satıcı bulun</a>. Veya 00800 448 829 873 ya da 0216 282 15 11 numaralı telefonu arayın.
                    </p>


                    <div className='mb-3 col-12' >

                        <p className='col-12'>
                            Telif Hakkı © {new Date().getFullYear()} Apple Inc. Tüm hakları saklıdır.

                            <a href="" style={{ fontSize: "1.1em", float: "right" }}>
                                Türkiye
                            </a>
                        </p>


                        <div className='footer-legal-links'>
                            <a href="" >Gizlilik Politikası</a>
                            <a href="" >Çerezlerin Kullanımı</a>
                            <a href="" >Kullanım Şartları</a>
                            <a href="" >Satış ve Para İadesi</a>
                            <a href="" >Yasal Bilgiler</a>
                            <a href="" >Site Haritası</a>
                            <a href="" style={{ borderRight: "none" }}>Bilgi Toplumu Hizmetleri</a>
                        </div>

                    </div>


                </div>
            </footer>
        </div>
    )
}


export default Footer;
