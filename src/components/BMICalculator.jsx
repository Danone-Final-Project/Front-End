import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateBMI } from '../redux/actions';

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
      <h1>BMI Calculator</h1>
      <div>
        <label>Height (m):</label>
        <input type="text" value={height} onChange={handleHeightChange} />
      </div>
      <div>
        <label>Weight (kg):</label>
        <input type="text" value={weight} onChange={handleWeightChange} />
      </div>
      <button onClick={handleCalculateClick}>Calculate BMI</button>
      {bmi && (
        <div>
          <p>BMI: {bmi}</p>
          <p>Category: {getCategory()}</p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;
