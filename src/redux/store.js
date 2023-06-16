import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

const initialState = {
  bmi: '',
  category: '',
  recommendation: '',
  loggedIn: 'false'
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;