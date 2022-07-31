import React from 'react';
import './account.css';


function Account() {


    return (
        <div>
            <div className='container'>
                <div className='row'>

                    <div className='col-5'>
                        <h4 className='Apple-Title'>
                            Apple Kimliği
                        </h4>
                    </div>


                    <div className="col-5 ">
                        <ul className="Apple-Title-ul">

                            <li>
                                <a href="/account">
                                    Giriş Yap
                                </a>
                            </li>

                            <li>
                                <a href="/account">
                                    Apple Kimliğinizi Oluşturun
                                </a>
                            </li>

                            <li>
                                <a href="/">
                                    SSS
                                </a>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>

            <hr style={{ marginTop: "10px" }} />

            <div className='container'>
                <div className='row'>

                    <div className='col-12 account-title'>
                        <h2 className=''>Apple Kimliğinizi Oluşturun</h2>
                        <p>
                            Tüm Apple hizmetlerine erişim için tek ihtiyacınız olan bir Apple Kimliği.
                            <br />Zaten Apple Kimliğiniz var mı? <a href="/">Burada bulabilirsiniz<img src="https://i.hizliresim.com/t2bcvmu.png" alt="" /></a>
                        </p>

                    </div>



                    <div className='d-flex col-12'>

                        <div className='col'></div>

                        <div className="form-floating mb-3 col-2">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Ad" />
                            <label htmlFor="floatingInput">Ad </label>
                        </div>


                        <div className="form-floating mb-3 ms-3 col-2" >
                            <input type="text" className="form-control" id="floatingInput" placeholder="Soyad" />
                            <label htmlFor="floatingInput">Soyad </label>
                        </div>

                        <div className='col'></div>


                    </div>


                    <div className='col-12 d-flex account-selected mt-3' >

                        <div className='col'></div>

                        <div className='col-4'>
                            <h3
                                className=''
                            >
                                ÜLKE / BÖLGE
                            </h3>
                            <select className="form-select" >
                                <option defaultValue>Türkiye</option>
                                <option value="Canada">Canada</option>
                                <option value="USA">USA</option>
                                <option value="Germany">Germany</option>
                            </select>
                        </div>

                        <div className='col'></div>

                    </div>


                    <div className='col-12 d-flex mt-2'>

                        <div className='col'></div>

                        <div className="form-floating mt-2 col-4" >
                            <input
                                type="number"
                                className="form-control"
                                id="floatingInput"
                                placeholder="gg.aa.yyyy"

                            />
                            <label htmlFor="floatingInput">Doğum Tarihi </label>
                        </div>

                        <div className='col'></div>


                    </div>


                    <hr style={{ marginTop: "40px" }} />


                    <div className='col-12 d-flex account-selected mt-3' >

                        <div className='col'></div>

                        <div className='col-4'>

                            <select className="form-select" >
                                <option defaultValue>+90 (Türkiye)</option>
                                <option value="USA">+1 (Amerika Birleşik Devletleri)</option>
                                <option value="Germany">+49 (Almanya)</option>
                                <option value="Spanish">+34 (İspanya)</option>
                            </select>
                        </div>

                        <div className='col'></div>

                    </div>

                    <div className='col-12 d-flex mt-2'>

                        <div className='col'></div>

                        <div className="form-floating mt-2 col-4" >
                            <input
                                type="number"
                                className="form-control"
                                id="floatingInput"
                                placeholder="gg.aa.yyyy"

                            />
                            <label htmlFor="floatingInput">Telefon numarası </label>

                            <div className="tel">
                                Her zaman erişebileceğiniz bir telefon numarası girdiğinizden emin olun. Yeni bir aygıtta veya web tarayıcısında her giriş yaptığınızda bu telefon numarası kimliğinizi doğrulamak için kullanılacak. Mesajlaşma veya veri ücreti uygulanabilir.
                            </div>



                        </div>


                        <div className='col'></div>


                    </div>


                    <div className='col-12 d-flex mt-1'>

                        <div className='col'></div>

                        <div className=" col mt-3 d-flex">
                            <legend className="col-form-label col-sm-5 ">Şununla doğrulayın:</legend>

                            <div className="d-flex mt-2">

                                <div className="form-check col-6">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                    <label className="form-check-label" htmlFor="gridRadios1">
                                        SMS
                                    </label>
                                </div>

                                <div className="form-check col-2" style={{ whiteSpace: "nowrap" }}>
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                    <label className="form-check-label" htmlFor="gridRadios2">
                                        Telefon Araması
                                    </label>
                                </div>

                            </div>


                        </div>
                        <div className='col'></div>

                    </div>

                    <hr style={{ marginTop: "20px" }} />



                    <div className='col-12 d-flex mt-1'>

                        <div className='col'></div>

                        <div className="form-check col-4">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Duyurular
                            </label>
                            <p>Apple ürünleri, hizmetleri ve yazılımları hakkında e-postalar ve duyurular, pazarlama, öneriler ve güncellemeler gibi iletişimleri alın.</p>
                        </div>

                        <div className='col'></div>

                    </div>



                    <div className='col-12 d-flex mt-1'>

                        <div className='col'></div>

                        <div className="form-check col-4">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                            <label className="form-check-label" for="flexCheckChecked">
                                Uygulamalar, Müzik, TV ve Daha Fazlası
                            </label>
                            <p>Uygulamalar, müzik, filmler, TV, kitaplar, podcast’ler ve daha fazlası hakkında öneriler, pazarlamalar, yeni çıkanlar, özel teklifler ve içerikler olan Apple e-postalarını ve iletişimlerini alın.</p>
                        </div>

                        <div className='col'></div>

                    </div>

                    <hr style={{ marginTop: "20px" }} />


                    <div className='col-12 d-flex mt-1'>

                        <div className='col'></div>

                        <div className=" col-4">
                            <div className='privacy-icon'></div>
                            <div className='privacy'>Apple Kimliği bilgileriniz, güvenli bir şekilde giriş yapmanızı sağlar. Apple; güvenlik, destek ve raporlama amaçları doğrultusunda bazı kullanım verilerini kaydeder. Eğer kabul ederseniz Apple, Apple hizmetlerini kullanmanıza dayalı olanlar da dâhil olmak üzere size pazarlama e‑postaları ve iletişimleri göndermek için Apple Kimliği bilgilerinizi kullanabilir. <a href="">Verilerinizin nasıl yönetildiğini görün.</a></div>

                        </div>

                        <div className='col'></div>

                    </div>




                    <div className='col-12 d-flex mt-1'>

                        <div className='col'></div>

                        <div className=" col-1">
                            <button type="button" className="privacy-button">
                                Devam
                            </button>
                        </div>

                        <div className='col'></div>

                    </div>








                </div>
            </div>



        </div >
    )
}


export default Account;