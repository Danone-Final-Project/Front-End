import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import parse from 'html-react-parser';

function ArticleContent() {
  const { id } = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    async function fetchArticle() {
      try {
        const response = await axios.get(`https://back-end-production-643c.up.railway.app/article/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchArticle();
  }, []);

  const htmlString = `${article.content}`;
  const reactElement = parse(htmlString);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-3 article-content">
      <h2>{article.title}</h2>
      <p>{reactElement}</p>
    </div>
  );
}

export default ArticleContent;
