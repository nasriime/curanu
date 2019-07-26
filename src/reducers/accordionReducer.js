import { OPEN_ACCORDION, CLOSE_ACCORDION } from '../constantns/types';

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case OPEN_ACCORDION:
      return {
        ...state,
        items: action.payload
      };
    case CLOSE_ACCORDION:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
