import React from 'react';
import Article from './components/Article';
import ArticleCard from './components/ArticleCard';
import './App.css';



const App = () => {
  return (
    <div className="App">
      <Article />
      <div className="card-container">
        <ArticleCard />
      </div>
    </div>
  );
};

export default App;
