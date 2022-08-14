import React from 'react'
import { useStore } from '../../contexts/StoreContext';
import './basket.css';

function Basket() {

    const { items, removeFromBasket } = useStore();

    const getPrice = items.map((x) => x.price)
    const total = getPrice.reduce((a, b) => Number(a) + Number(b));

    return (
        <div>
            <div className='container'>
                <div className='row'>


                    {
                        // sepette ürün yok ise hata mesajı versin
                        items.length < 1 && (
                        <div style={{textAlign:"center"}}> You have not any items in your basket...</div>)
                    }

                    {
                        items.length > 0 &&
                        <div className='col-8'>
                                {
                                    items.map((item, key) => (

                                       <div className=''>
                                            <div className='basket-item' key={item.id}>
                                                <h4>{item.name}</h4>
                                                <div className="d-flex">
                                                    <img src={item.image} height="100" alt="" className='d-flex' />
                                                    <div style={{ fontSize: "20px", marginTop: "20px", padding: "10px" }}>{item.price} TL</div>
                                                </div>
                                            </div>


                                            <button
                                                className='btn btn-danger'
                                                onClick={() => removeFromBasket(item.id)}>
                                                Remove from Basket
                                            </button>
                                        </div>
                                    ))
                                }
                        </div>
                    }

                    <div className='col-4 total-price'  >
                            Toplam Fiyat: {total} TL
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Basket;