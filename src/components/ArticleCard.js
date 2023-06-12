import React from 'react';
import { Card } from 'react-bootstrap';



const ArticleCard = () => {
  return (
    <>
    <Card className='card'>
      <Card.Img className='card-img' variant="top" src="https://img.freepik.com/free-vector/healthy-eating-plate-concept-illustration_114360-11823.jpg?size=626&ext=jpg&uid=R103942302&ga=GA1.2.1063005302.1686303953&semt=ais" />
      <Card.Body>
        <Card.Title>Diet Tinggi Protein</Card.Title>
        <p><a class="link-opacity-100" href="ArticlePage.js">Selengkapnya...</a></p>
      </Card.Body>
    </Card>
    
    <Card className='card'>
      <Card.Img className='card-img' variant="top" src="https://img.freepik.com/free-vector/healthy-eating-plate-concept-illustration_114360-12333.jpg?size=626&ext=jpg&ga=GA1.1.696200391.1683087027&semt=robertav1_2_sidr" />
      <Card.Body>
        <Card.Title>Diet Mediterania</Card.Title>
        <p><a class="link-opacity-100" href="#">Selengkapnya...</a></p>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img className='card-img' variant="top" src="https://img.freepik.com/free-vector/food-nutritional-quality-illustration_335657-4622.jpg?size=626&ext=jpg&ga=GA1.1.696200391.1683087027&semt=robertav1_2_sidr" />
      <Card.Body>
        <Card.Title>Diet Mayo</Card.Title>
        <p><a class="link-opacity-100" href="#">Selengkapnya...</a></p>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img className='card-img' variant="top" src="https://img.freepik.com/free-vector/healthy-eating-plate-concept-illustration_114360-13382.jpg?size=626&ext=jpg&ga=GA1.1.696200391.1683087027&semt=robertav1_2_sidr" />
      <Card.Body>
        <Card.Title>Diet Atkins</Card.Title>
        <p><a class="link-opacity-100" href="#">Selengkapnya...</a></p>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img className='card-img' variant="top" src="https://img.freepik.com/free-vector/healthy-food-concept-illustration_114360-12327.jpg?size=626&ext=jpg&ga=GA1.1.696200391.1683087027&semt=robertav1_2_sidr" />
      <Card.Body>
        <Card.Title>Diet Protein Shake</Card.Title>
        <p><a class="link-opacity-100" href="#">Selengkapnya...</a></p>
      </Card.Body>
    </Card>
    </>
  );
};

export default ArticleCard;
