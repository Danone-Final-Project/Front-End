import axios from 'axios';

export const calculateBMI = async (height, weight) => {
  if (height && weight) {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    const roundedBMI = bmiValue.toFixed(2);

    let bmiCategory = '';
    let level = '';
    if (roundedBMI < 18.5) {
      bmiCategory = 'Underweight';
      level = 'high';
    } else if (roundedBMI >= 18.5 && roundedBMI < 25) {
      bmiCategory = 'Ideal';
      level = 'medium';
    } else {
      bmiCategory = 'Overweight';
      level = 'low';
    }


    let foodRecommendation = '';
    try {
      const response = await axios.get('https://back-end-production-643c.up.railway.app/food/', {
        params: {
          level: level
        },
        headers: {
          'authuser': 'token'
        }
      });
      const food = response.data;
      const filteredFood = food.filter(food => food.calLevel.level === level);
      console.log("success");
      console.log(filteredFood);
      foodRecommendation = filteredFood;
      console.log(foodRecommendation);

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
