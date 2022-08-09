import { useState, useEffect, useContext, createContext } from "react";

const StoreContext = createContext();

const defaultBasket = JSON.parse(localStorage.getItem("basket")) || [];
//localStorage'de o an bir tanım varsa onu kullansın eğer yoksa boş olarak [] tanımlansın
// unutmayalım localStorage'e stringfy şeklinde gideceği için bizim bunu JSON.parse etmemiz gerekir.

const StoreProvider = ({ children }) => {

    // const [items, setItems] = useState([]);
    const [items, setItems] = useState(defaultBasket);

    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(items))
    }, [items]);
    // basket (items yani) her değiştiğinde git localStorage.setItem basket key'ine, JSON.stringfy ederek item'sı yaz

    // (data) parametresi hangi ürün eklenecekse o ürün demek.
    // önceki değerleri (prev) alıp yeni data'yı ekleyerek yeni değerleri set ediyoruz
    const addToBasket = (data, findBasketItem) => {
        // parametre olarak sepete atacağımız api datamız

        if (!findBasketItem) { // findBasketItem bize false geliyor ise
            return setItems((items) => [data, ...items]);
        } // Eğer ilk defa ekleniyorsa sepete burası çalışacak

        const filtered = items.filter((item) => item.id !== findBasketItem.id);
        // Eğer eklenmişse ve tekrar bir butona kaldırılması için basılıyorsa burası çalışacak
        //Burada eklenmiş olan id'li haricindekiler bulunup tekrardan Set ediliyor.
        setItems(filtered);
    };


    const values = {
        items,
        setItems,
        addToBasket
    };


    return (
        <StoreContext.Provider value={values}>
            {children}
        </StoreContext.Provider>
    );


};

const useStore = () => useContext(StoreContext);
// Her componentte kullanırken useContext ifadesini kullanmak yerine tek bir yerde yazıyoruz



export {
    StoreProvider,
    useStore
}








