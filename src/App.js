import Article from './components/Article';
import ArticleCard from './components/ArticleCard';
import Navbar from './components/Navbar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import DietSatu from '../src/components/DietSatu';
import DietDua from '../src/components/DietDua';
import DietTiga from '../src/components/DietTiga';
import DietEmpat from '../src/components/DietEmpat';
import DietLima from '../src/components/DietLima';




const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path='/article' element={<Article />} />
        </Routes>

    <div className="App">
      <div className="card-container">
        <ArticleCard />
    </div>
      <Routes>
        <Route path="/diet-satu" Component={DietSatu} />
        <Route path="/diet-dua" Component={DietDua} />
        <Route path="/diet-tiga" Component={DietTiga} />
        <Route path="/diet-empat" Component={DietEmpat} />
        <Route path="/diet-lima" Component={DietLima} />
      </Routes>
    </div>
    </div>
  );
};

export default App;
