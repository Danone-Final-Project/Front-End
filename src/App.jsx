import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Article from './components/article';
import DietSatu from '../src/components/DietSatu';
import DietDua from '../src/components/DietDua';
import DietTiga from '../src/components/DietTiga';
import DietEmpat from '../src/components/DietEmpat';
import DietLima from '../src/components/DietLima';
import Login from './components/login';
import BMICalculator from './components/BMICalculator';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './homepage.css';
import './style.css';
import Footer from './components/footer';
import ArticleContent from './components/articleContent';



function App() {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/bmi' element={<BMICalculator />} />
          <Route path='/article' element={<Article />} />
          <Route path='/login' element={<Login />} />
          <Route path="/article/:id" element={<ArticleContent />} />
          <Route path="/diet-satu" element={<DietSatu />} />
          <Route path="/diet-dua" element={<DietDua />} />
          <Route path="/diet-tiga" element={<DietTiga />} />
          <Route path="/diet-empat" element={<DietEmpat />} />
          <Route path="/diet-lima" element={<DietLima />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
