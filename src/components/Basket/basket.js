import React from 'react'
import { useStore } from '../../contexts/StoreContext';
import './basket.css';

function Basket() {

    const { items, removeFromBasket } = useStore();

    const getPrice = items.map((x) => x.price)
    const total = getPrice.reduce((a, b) => Number(a) + Number(b));

    return (
        <div>
            {
                // sepette ürün yok ise hata mesajı versin
                items.length < 1 && (<div> You have not any items in your basket...</div>)
            }

            {
                items.length > 0 &&
                <>
                    <ul className='ms-5 '>
                        {
                            items.map((item) => (

                                <li
                                    key={item.id}
                                    style={{ marginBottom: 20 }}
                                    className="mt-5 mb-5"
                                >


                                    <h4>{item.name}</h4>
                                    <img src={item.image} height="100" alt="" className='d-flex' />
                                    <div style={{fontSize:"20px", textAlign:"center"}}>{item.price}</div>


                                    <button
                                        className='btn btn-danger'
                                        onClick={() => removeFromBasket(item.id)}>
                                        Remove from Basket
                                    </button>

                                </li>
                            ))
                        }
                    </ul>
                </>
            }

            <div mt="5" >
                <div fontSize="22" >
                    Total: {total} TL
                </div>
            </div>


        </div>
    )
}

export default Basket;