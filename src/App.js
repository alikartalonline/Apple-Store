import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/header';
import HomePage from './components/HomePage/homepage';
import Account from './components/Account/account.js';
import Store from './components/Store/store';
import StoreDetail from './components/StoreDetail/storeDetail';
import ErrorPage from './components/ErrorPage/errorpage.js';
import Profile from './components/Profile/profile';
import ProtectedRoute from './components/ProtectedRoute.js/protectedRoute';
import SignIn from './components/Signin/signin';
import Basket from './components/Basket/basket';

function App() {
  return (
    <div className="">

      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Signin" element={<SignIn />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Store/:id" element={<StoreDetail />} />
        <Route path="/Basket" element={<Basket />} />
        <Route path="/*" element={<ErrorPage />} />

        <Route path="/profile"
          element={<ProtectedRoute> <Profile /> </ProtectedRoute>} />
        {/* /profile dediğimiz ekran giriş yapılarak görüntülenebilecek bir ekran olduğu için özelleştirilmiş bir tane Route oluşturduk */}

      </Routes>

    </div>
  );
}

export default App;
