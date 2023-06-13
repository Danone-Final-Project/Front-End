import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import HeartIcon from './HeartIcon';


const ArticleCard = () => {
  
  const navigate = useNavigate();  

  return (
    <>
    <Card className="align-items-start card-layanan">
      <Card.Img variant="top" src="https://img.freepik.com/free-vector/healthy-eating-plate-concept-illustration_114360-11823.jpg?size=626&ext=jpg&uid=R103942302&ga=GA1.2.1063005302.1686303953&semt=ais" fluid/>
      <Card.Body>
      <HeartIcon/>
        <Card.Title className='judulcard'>Diet Tinggi Protein</Card.Title>
        <p className='position-absolute bottom-0'><a class="link-opacity-100" onClick={() => navigate("/diet-satu")}>Selengkapnya...</a></p>
      </Card.Body>
    </Card>
    
    <Card className="align-items-start card-layanan">
      <Card.Img className='card-img' variant="top" src="https://img.freepik.com/free-vector/healthy-eating-plate-concept-illustration_114360-12333.jpg?size=626&ext=jpg&ga=GA1.1.696200391.1683087027&semt=robertav1_2_sidr" />
      <Card.Body>
      <HeartIcon/>
        <Card.Title className='judulcard'>Diet Mediterania</Card.Title>
        <p className='position-absolute bottom-0'><a class="link-opacity-100" onClick={() => navigate("/diet-dua")}>Selengkapnya...</a></p>
      </Card.Body>
    </Card>

    <Card className="align-items-start card-layanan">
      <Card.Img className='card-img' variant="top" src="https://img.freepik.com/free-vector/food-nutritional-quality-illustration_335657-4622.jpg?size=626&ext=jpg&ga=GA1.1.696200391.1683087027&semt=robertav1_2_sidr" />
      <Card.Body>
      <HeartIcon/>
        <Card.Title className='judulcard'>Diet Mayo</Card.Title>
        <p className='position-absolute bottom-0'><a class="link-opacity-100" onClick={() => navigate("/diet-tiga")}>Selengkapnya...</a></p>
      </Card.Body>
    </Card>

    <Card className="align-items-start card-layanan">
      <Card.Img className='card-img' variant="top" src="https://img.freepik.com/free-vector/healthy-eating-plate-concept-illustration_114360-13382.jpg?size=626&ext=jpg&ga=GA1.1.696200391.1683087027&semt=robertav1_2_sidr" />
      <Card.Body>
      <HeartIcon/>
        <Card.Title className='judulcard'>Diet Atkins</Card.Title>
        <p className='position-absolute bottom-0'><a class="link-opacity-100" onClick={() => navigate("/diet-empat")}>Selengkapnya...</a></p>
      </Card.Body>
    </Card>

    <Card className="align-items-start card-layanan">
      <Card.Img className='card-img' variant="top" src="https://img.freepik.com/free-vector/healthy-food-concept-illustration_114360-12327.jpg?size=626&ext=jpg&ga=GA1.1.696200391.1683087027&semt=robertav1_2_sidr" />
      <Card.Body>
      <HeartIcon/>
        <Card.Title className='judulcard'>Diet Protein Shake</Card.Title>
        <p className='position-absolute bottom-0'><a class="link-opacity-100" onClick={() => navigate("/diet-lima")}>Selengkapnya...</a></p>
      </Card.Body>
    </Card>
    </>
  );
};

export default ArticleCard;