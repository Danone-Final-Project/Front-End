const initialState = {
    bmi: null,
    category: null,
    recommedation: null
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CALCULATE_BMI':
        return {...state, 
          bmi: action.payload.bmi,
          category: action.payload.category};

      case 'FETCH_FOOD_RECOMMENDATION':
        return{
          ...state,
          loading: true,
          error: null
        };
      
      case 'FETCH_FOOD_RECOMMENDATION_SUCCESS':
        return{
          ...state,
          recommendation: action.payload,
          loading: false
        };

      case 'FETCH_FOOD_RECOMMENDATION_ERROR':
        return{
          ...state,
          loading: false,
          error: action.payload
        }
      default:
        return state;
    }
  };
  
  export default reducer;