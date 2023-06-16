import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Article from './components/article';
import Login from './components/login';
import Register from './components/register';
import BMICalculator from './components/BMICalculator';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import "./login.css"
import Footer from './components/footer';
import ArticleContent from './components/articleContent';



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/bmi' element={<BMICalculator />} />
          <Route path='/article' element={<Article />} />
          <Route path='/login' element={<Login handleLogin={handleLogin} />} />
          <Route path='/register' element={<Register />} />
          <Route path="/article/:id" element={<ArticleContent />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
