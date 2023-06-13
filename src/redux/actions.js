import axios from 'axios';

export const calculateBMI = async (height, weight) => {
  if (height && weight) {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    const roundedBMI = bmiValue.toFixed(2);

    let bmiCategory = '';
    if (roundedBMI < 18.5) {
      bmiCategory = 'Underweight';
    } else if (roundedBMI >= 18.5 && roundedBMI < 25) {
      bmiCategory = 'Ideal';
    } else {
      bmiCategory = 'Overweight';
    }

    const categoryMap = {
      Underweight: 'high',
      Ideal: 'medium',
      Overweight: 'low'
    };

    const calLevel = categoryMap[bmiCategory];

    let foodRecommendation = '';
    try {
      const response = await axios.get('https://back-end-production-643c.up.railway.app/food/');
      const data = response.data;

      if (data && data[bmiCategory]) {
        foodRecommendation = data[bmiCategory];
      }
    } catch (error) {
      console.log('Error fetching food recommendation:', error);
    }

    return {
      bmi: roundedBMI,
      category: bmiCategory,
      recommendation: foodRecommendation
    };
  } else {
    return {
      bmi: '',
      category: '',
      recommendation: ''
    };
  }
};
