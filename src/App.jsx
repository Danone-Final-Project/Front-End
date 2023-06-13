import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Article from './components/article';
import Login from './components/login';
import BMICalculator from './components/BMICalculator';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homepage.css';
import './style.css';



function App() {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/bmi' element={<BMICalculator />} />
          <Route path='/article' element={<Article />} />
          <Route path='/login' element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
