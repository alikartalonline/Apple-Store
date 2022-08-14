import React, { useEffect, useState } from 'react'
import './storeDetail.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useStore } from '../../contexts/StoreContext';
import Footer from '../Footer/footer';

function StoreDetail() {

    const [product, setProduct] = useState([]);

    const { id } = useParams();
    const { addToBasket, items } = useStore();

    const URL = `${process.env.REACT_APP_APPLE_API}api/product`;

    useEffect(() => {
        axios.get(`${URL}/${id}`)
            .then(res => {
                setProduct(res.data);
            }).catch(err => {
                console.log("error", err);
            })
    }, [])

    const findBasketItem = items.find((item) => item.id === product.id)

    const toastTrigger = document.getElementById('liveToastBtn')

    const toastLive = document.getElementById('liveToast')
    if (toastTrigger) {
        toastTrigger.addEventListener('click', () => {
            const toast = toastLive.classList.add('show')
            toast.show()
        })

        setTimeout(() => {
            document.getElementById('liveToast').classList.remove('show')
        }, 4000)
    }



    // setTimeout(selamVer, 1000);

    const date = new Date();
    // console.log(date.getHours(), date.getMinutes(), date.getSeconds())


    return (
        <div>

            {/* Store Detail Titles Start */}
            <div className='container'>
                <div className='row'>

                    <div className='col-5'>
                        <h4 className='Apple-Title'>
                            Store
                        </h4>
                    </div>


                    <div className="col-5 ">
                        <ul className="Apple-Title-ul">

                            <li>
                                <a href="#">
                                    Genel Bakış
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    macOS
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Karşılaştırın
                                </a>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
            {/* Store Detail Titles Finish */}


            <hr style={{ marginTop: "1px" }} />


            {/* Store Detail Container Start */}
            <div className='container' style={{ marginBottom: "10%" }}>
                <div className='row'>

                    <div className='col-12 account-title'>
                        <h2 className='mt-5'>{product.name}</h2>

                        <div>
                            <svg viewBox="0 0 35 35" className="mt-3" role="img" aria-hidden="true" width="35px" height="35px">
                                <path fill="none" d="M0 .213h35v35H0z"></path>
                                <path d="M14.4 21.048a13.284 13.284 0 01-1.344.076q-.411 0-.829-.025l-.334-.02-.279.185a15.461 15.461 0 01-4.388 2.109 16.182 16.182 0 001.365-2.054l.484-.923-.941-.446a7.127 7.127 0 01-4.384-6.276c0-4.114 4.274-7.461 9.529-7.461s9.529 3.347 9.529 7.461c0 .059-.009.116-.011.174.33-.029.664-.046 1-.046 0-.043.008-.085.008-.128 0-4.677-4.67-8.461-10.529-8.461S2.75 9 2.75 13.674a8.1 8.1 0 004.95 7.181 18.048 18.048 0 01-1.573 2.305c-.481.6-.236 1.28.613 1.28 1.17 0 3.557-1.1 5.425-2.343q.448.027.888.027c.455 0 .9-.028 1.34-.069-.011-.157-.029-.312-.029-.472 0-.183.018-.357.036-.535z"></path>
                                <path d="M32.25 21.583c0-3.749-3.745-6.782-8.443-6.782h-.1c-.351 0-.694.027-1.032.063-3.876.413-6.886 2.906-7.269 6.036a5.584 5.584 0 00-.042.678c0 .117.015.23.021.345.222 3.737 3.994 6.428 8.6 6.428.235 0 .473-.007.712-.021a10.723 10.723 0 004.35 1.878c.681 0 .878-.543.492-1.026a14.459 14.459 0 01-1.263-1.848 6.5 6.5 0 003.974-5.751zm-4.4 4.852l-.942.446.484.923a10.673 10.673 0 00.759 1.2 14.28 14.28 0 01-2.9-1.5l-.279-.185-.334.02c-.219.013-.437.019-.653.019-4.21 0-7.515-2.462-7.614-5.629 0-.048-.009-.1-.009-.144a4.521 4.521 0 01.1-.922c.5-2.386 2.87-4.288 5.908-4.75a9.506 9.506 0 011.092-.1c.113 0 .225-.013.339-.013 4.1 0 7.443 2.594 7.443 5.782a5.517 5.517 0 01-3.394 4.853z"></path>
                            </svg>
                            <p style={{ fontSize: "18px"}}>
                                Mac satın alma konusunda sorularınız mı var?
                                <br /><a href="#" style={{ fontSize: "18px", letterSpacing: "0.030em" }}>Bir Mac Uzmanı ile sohbet edin</a>
                            </p>
                        </div>

                        <div>
                            <img src={product.image}
                                alt=""
                                height={300}
                            />
                        </div>

                        <div className='row'>
                            <div className='col'></div>
                            <div className='col'></div>

                            <div className='detail-titles col-5'>

                                <div className="as-macbundle-eyebrow">
                                    <img
                                        src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-m1-icon-mac-202206?wid=72&amp;hei=72&amp;fmt=png-alpha&amp;.v=1652975333734"
                                        alt=""
                                        width="36"
                                        height="36"
                                    />
                                </div>

                                <h2 className='mt-2'>
                                    8 Çekirdekli CPU <br />
                                    7 Çekirdekli GPU<br />
                                    8 GB Birleşik Bellek<br />
                                    256 GB SSD Depolama¹
                                </h2>

                                <p>
                                    Lorem ipsum dolor sit,<br /> amet consectetur adipisicing elit. <br /> Aut repudiandae aspernatur amet?<br /> Id ab natus tempora corporis, <br />saepe amet repellat tenetur! <br />Itaque, reprehenderit! <br /> Accusamus unde aliquid velit. <br /> Nam, voluptatum porro?
                                </p>

                                <h3 className='mt-5'>{product.price} TL
                                    <span className='price-p'>KDV ve yasal ücretler dahildir</span>
                                </h3>

                                <button
                                    className={findBasketItem ? "btn btn-warning w-50 mt-3" : "btn btn-primary w-50 mt-3"}
                                    onClick={() => addToBasket(product, findBasketItem)}
                                >
                                    {
                                        findBasketItem ? "Ürünü Çıkar" : "Sepete Ekle"
                                    }
                                </button>

                                <div className='mt-4 row'>
                                    <div className='col-6'>

                                        <h3
                                            className="content-header-storedetail"><span>Hala karar veremediniz mi?</span></h3>
                                        <div className="content-description-storedetail">Bu ürünü bir listeye ekleyin ve daha sonra kolayca yeniden bulun.</div>
                                    </div>

                                    <div className='col-6'>
                                        <svg width="35" height="35"
                                            className="storedetail-icon"
                                            id="liveToastBtn"
                                            role="img" aria-hidden="true"><path fill="none" d="M0 0h35v35H0z"></path><path d="M21.952 6.433a2.157 2.157 0 011.567.481A2.228 2.228 0 0124 8.516v19.866a.709.709 0 01-.018.178.7.7 0 01-.058-.013 8.985 8.985 0 01-.757-.674l-4.866-4.901a1.111 1.111 0 00-1.602 0l-4.857 4.891a7.25 7.25 0 01-.754.676.145.145 0 01-.053.028h-.015a.681.681 0 01-.02-.185V8.516a2.228 2.228 0 01.48-1.602 2.158 2.158 0 011.568-.48h8.904m0-1h-8.904a3.077 3.077 0 00-2.278.776A3.144 3.144 0 0010 8.516v19.866a1.276 1.276 0 00.276.868.956.956 0 00.76.317 1.073 1.073 0 00.632-.213 8.377 8.377 0 00.874-.776l4.866-4.9a.115.115 0 01.184 0l4.866 4.9a10.454 10.454 0 00.868.77 1.048 1.048 0 00.639.219.956.956 0 00.76-.317 1.276 1.276 0 00.275-.868V8.516a3.144 3.144 0 00-.77-2.306 3.077 3.077 0 00-2.278-.776z"></path></svg>

                                        {/* Alert Toast Bootstrap  */}
                                        <div className="toast-container position-fixed bottom-0 end-0 p-3">
                                            <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                                                <div className="toast-header">
                                                    {/* <img src="..." className="rounded me-2" alt="..." /> */}
                                                    <strong className="me-auto">⚠️ UYARI:</strong>
                                                    <small>{date.getHours()}:{date.getMinutes()}</small>
                                                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                                </div>
                                                <div className="toast-body">
                                                    Sunucu ile ilgili bir hata oluştu :(
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className='mt-4  d-flex'>
                                    <div >
                                        <svg width="25" height="25" className="as-svgicon as-svgicon-boxtruck as-svgicon-reduced as-svgicon-boxtruckreduced" role="img" aria-hidden="true"><path fill="none" d="M0 0h25v25H0z"></path><path d="M23.482 12.847l-2.92-3.209A1.947 1.947 0 0018.985 9H17V6.495a2.5 2.5 0 00-2.5-2.5h-11a2.5 2.5 0 00-2.5 2.5v9.75a2.5 2.5 0 002.5 2.5h.548A2.746 2.746 0 006.75 21.02 2.618 2.618 0 009.422 19h6.681a2.744 2.744 0 005.347-.23h.735A1.656 1.656 0 0024 16.98v-2.808a1.937 1.937 0 00-.518-1.325zM8.426 18.745a1.74 1.74 0 01-3.352 0 1.577 1.577 0 01.015-1 1.738 1.738 0 013.322 0 1.578 1.578 0 01.015 1zM9.447 18a2.726 2.726 0 00-5.394-.255H3.5a1.502 1.502 0 01-1.5-1.5v-9.75a1.502 1.502 0 011.5-1.5h11a1.502 1.502 0 011.5 1.5V18zm10.972.77a1.738 1.738 0 01-3.337 0 1.573 1.573 0 010-1 1.742 1.742 0 113.337 1zM23 16.98c0 .569-.229.79-.815.79h-.735A2.73 2.73 0 0017 16.165V10h1.986a.976.976 0 01.838.314l2.927 3.214a.95.95 0 01.249.644zm-1.324-3.36a.512.512 0 01.174.38h-3.306a.499.499 0 01-.544-.528V11h1.073a.76.76 0 01.594.268z" fill="#1d1d1f"></path></svg>
                                    </div>

                                    <div className='ms-3'>
                                        <h3
                                            className="content-header-storedetail"><span>Gönderim:</span></h3>
                                        <div className="content-description-storedetail">1-2 hafta <br />Ücretsiz Gönderim</div>
                                        <div className='mt-2'><a href="#" className='storeDetail-deliveryDate'>Teslim tarihlerini öğrenin</a></div>
                                    </div>
                                </div>

                            </div>

                            <div className='col'></div>

                        </div>
                    </div>



                </div>
            </div>
            {/* Store Detail Container Finish */}


            <Footer />
        </div>
    )
}

export default StoreDetail;