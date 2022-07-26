import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/header';
import HomePage from './components/HomePage/homepage';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="">

      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
