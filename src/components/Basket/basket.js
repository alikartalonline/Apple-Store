import React from 'react'
import { useStore } from '../../contexts/StoreContext';
import { Link } from 'react-router-dom';
import './basket.css';

function Basket() {

    const { items, removeFromBasket } = useStore();

    const total = items.reduce((acc, obj) => acc + obj.price, 0);
    // acc = o ana kadar ki toplanmış değer
    // acc'ye obj'nin price'ını ekliyorum ve bunun 0'dan başlaması gerektiğini söylüyorum

    return (
        <div>
            {
                // sepette ürün yok ise hata mesajı versin
                items.length < 1 && (<div> You have not any items in your basket...</div>)
            }

            {
                items.length > 0 &&
                <>
                    <ul style={{ listStyleType: "decimal" }}>
                        {
                            items.map((item) => (

                                <li key={item.id} style={{ marginBottom: 20 }}>


                                    <div fontSize={18}>{item.name}</div>
                                    <div fontSize={18}>{item.price}</div>
                                    <img src={item.image} alt="" />


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