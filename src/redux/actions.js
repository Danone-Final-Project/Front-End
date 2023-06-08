export const calculateBMI = (height, weight) => {
  const parsedHeight = parseFloat(height);
  const parsedWeight = parseFloat(weight);

  if (isNaN(parsedHeight) || isNaN(parsedWeight)) {
    return {
      type: 'CALCULATE_BMI',
      payload: null,
    };
  }

  const bmi = parsedWeight / (parsedHeight * parsedHeight);

  return {
    type: 'CALCULATE_BMI',
    payload: bmi.toFixed(2),
  };
};
