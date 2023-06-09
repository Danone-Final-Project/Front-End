import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateBMI } from '../redux/actions';
import Image from 'react-bootstrap/Image';
import bmiImage from '../assets/img/BMI.png';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const bmi = useSelector((state) => state.bmi);
  const dispatch = useDispatch();

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleCalculateClick = () => {
    dispatch(calculateBMI(height, weight));
  };

  const getCategory = () => {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return 'Ideal';
    } else {
      return 'Overweight';
    }
  };

  return (
    <div>
      <h1 className='d-flex justify-content-center fw-bold mt-5 bmihead'>Body Mass Index (BMI)</h1>
      <div className='d-flex justify-content-center my-5'>
        <Image src={bmiImage} alt='BMI Graphic'/>
      </div>
      <Form className='d-flex justify-content-center gap-5 my-3'>
        <Form.Group>
          <Form.Label>Tinggi (m):</Form.Label>
          <Form.Control type="text" value={height} onChange={handleHeightChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Berat Badan (kg):</Form.Label>
          <Form.Control type="text" value={weight} onChange={handleWeightChange} />
        </Form.Group>
      </Form>
      <div className='d-flex flex-column justify-content-center align-items-center my-4'>
        <Button onClick={handleCalculateClick}>Calculate BMI</Button>
        {bmi && (
          <div className='d-flex flex-column justify-content-center align-items-center mt-3'>
            <p className='fw-bold fs-3 m-0'>BMI: {bmi}</p>
            <p className='fw-semibold fs-4 m-0'>Berat: {getCategory()}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BMICalculator;
