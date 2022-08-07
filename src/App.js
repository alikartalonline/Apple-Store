import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/header';
import HomePage from './components/HomePage/homepage';
import Account from './components/Account/account.js';
import Store from './components/Store/store';
import ErrorPage from './components/ErrorPage/errorpage.js';

function App() {
  return (
    <div className="">

      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/Account" element={<Account />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>


    </div>
  );
}

export default App;
