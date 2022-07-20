import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/header';
import HomePage from './components/HomePage/homepage';


function App() {
  return (
    <div className="">

      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
