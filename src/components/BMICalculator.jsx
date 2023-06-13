import React, { useState } from 'react';
import { calculateBMI } from '../redux/actions';
import Image from 'react-bootstrap/Image';
import bmiImage from '../assets/img/BMI.png';
import Form from 'react-bootstrap/Form';
import { Button, Card } from 'react-bootstrap';

function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState('');
  const [category, setCategory] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleCalculateBMI = async () => {
    const { bmi: calculatedBMI, category: calculatedCategory, recommendation: calculatedRecommendation } = await calculateBMI(height, weight);
    setBMI(calculatedBMI);
    setCategory(calculatedCategory);
    setRecommendation(calculatedRecommendation);
  };

  const extractFoodItems = () => {
      if (recommendation[0] && typeof recommendation[0] === 'object') {
        return recommendation.map(food => {
          const {name, calory, proteins, carbo, fat, carbon, img, category} = food;
          return {name, calory, proteins, carbo, fat, carbon, img, category};
        });
      }
      return [recommendation];
  };

  const foodItems = extractFoodItems();

  return (
    <div>
      <h1 className='d-flex justify-content-center fw-bold mt-5 bmihead'>Body Mass Index (BMI)</h1>
      <div className='d-flex justify-content-center my-5'>
        <Image src={bmiImage} alt='BMI Graphic'/>
      </div>
      <Form className='d-flex justify-content-center gap-5 my-3'>
        <Form.Group>
          <Form.Label>Tinggi (cm):</Form.Label>
          <Form.Control type="text" value={height} onChange={handleHeightChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Berat Badan (kg):</Form.Label>
          <Form.Control type="text" value={weight} onChange={handleWeightChange} />
        </Form.Group>
      </Form>
      <div className='d-flex flex-column justify-content-center align-items-center my-4'>
        <Button onClick={handleCalculateBMI}>Calculate BMI</Button>
        {bmi && (
          <div className='d-flex flex-column justify-content-center align-items-center mt-3'>
            <p className='fw-bold fs-3 m-0'>BMI: {bmi}</p>
            <p className='fw-semibold fs-4 m-0'>Berat: {category}</p>
            {recommendation && (
            <div className='d-flex flex-column mt-4'>
              <h3 className='text-center fs-2'>Food Recommendation</h3>
              <div className='d-flex flex-row justify-content-center'>
                {foodItems.map((food, index) => (
                  <Card key={index}>
                    <Card.Img variant="top" src={food.img} fluid/>
                    <Card.Body>
                      <Card.Title className="fw-semibold mb-2">
                        {food.name}
                      </Card.Title>
                      <Card.Text className="my-1">
                        Calories: {food.calory}
                      </Card.Text>
                      <Card.Text className="my-1">
                        Proteins: {food.proteins}
                      </Card.Text>
                      <Card.Text className="my-1">
                        Carbohydrates: {food.carbo}
                      </Card.Text>
                      <Card.Text className="my-1">
                        Fat: {food.fat}
                      </Card.Text>
                      <Card.Text className="my-1">
                        Carbon: {food.carbon}
                      </Card.Text>
                      <Card.Text className="my-1">
                        Category: {food.category.name}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          )}
          </div>
        )}
      </div>
    </div>
  );
}

export default BMICalculator;
