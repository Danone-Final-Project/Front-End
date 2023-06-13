const initialState = {
    bmi: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CALCULATE_BMI':
        return {
          ...state,
          bmi: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;