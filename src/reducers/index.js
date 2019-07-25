import { combineReducers } from 'redux';
import accordionReducer from './accordionReducer';

export default combineReducers({
  accordion: accordionReducer
});
