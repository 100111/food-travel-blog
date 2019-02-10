import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { foodReducer } from './foodReducer';
import { generalReducer } from './generalReducer';

//Combine all reducers together
export default (history) => combineReducers({
  router: connectRouter(history),
  general: generalReducer,
  food: foodReducer,
})