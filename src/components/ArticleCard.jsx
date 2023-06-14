import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import HeartIcon from './HeartIcon';

function ArticleCard({ article }) {
  return (
    
      <Card className='card-makanan card-dimension'>
        <Card.Body>
          <HeartIcon />
          <Card.Title className='d-flex justify-content-center'>
            {article.title}
          </Card.Title>
          <Card.Text className='my-3'>
            {article.desc}
          </Card.Text>
          <Card.Text className='my-5'>
            <Link to={`/article/${article._id}`}>
              <a className='position-absolute bottom-0 py-2'>Selengkapnya...</a>
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    
    
  );
}

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await axios.get('https://back-end-production-643c.up.railway.app/article/');
        setArticles(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchArticles();
  }, []);  

  return (
    <>
      <div className="d-flex flex-row">
        {articles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    </>
  );
};

export default ArticleList;