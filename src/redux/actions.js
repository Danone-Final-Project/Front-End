import axios from "axios";

export const calculateBMI = (height, weight) => {
  return (dispatch) => {
    const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
    const category = getBMICategory(bmi);
    dispatch({
      type: 'CALCULATE_BMI',
      payload: {
        bmi,
        category
      }
    });
  };
};

const getBMICategory = (bmi) => {
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    return 'Ideal';
  } else {
    return 'Overweight';
  }
};


const categoryMap = (bmiCategory) => {
  if (bmiCategory === 'Underweight') {
    return 'high';
  } else if (bmiCategory === 'Ideal') {
    return 'medium';
  } else if (bmiCategory === 'Overweight') {
    return 'low';
  }
};

export const fetchFoodRecommendation = (bmiCategory) => {
  return (dispatch) => {
    const calLevel = categoryMap(bmiCategory);
    axios.get('https://back-end-production-643c.up.railway.app/food/')
    .then((response) => {
      const food = response.data;
      const filterFood = food.filter(food => food.calLevel.level === calLevel);

      dispatch(fetchFoodRecommendationSuccess(filterFood));
    })
    .catch((error) => {
      dispatch(fetchFoodRecommendationError(error));
    });
  };
};

export const fetchFoodRecommendationSuccess = (recommendation) => {
  return {
    type: 'FETCH_FOOD_RECOMMENDATION_SUCCESS',
    payload: recommendation
  };
};

export const fetchFoodRecommendationError = (error) => {
  return {
    type: 'FETCH_FOOD_RECOMMENDATION_ERROR',
    payload: error
  };
};
