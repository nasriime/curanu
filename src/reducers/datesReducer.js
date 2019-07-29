import { FETCH_DATES } from '../constants/types';

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATES:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
