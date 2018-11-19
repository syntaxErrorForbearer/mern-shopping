import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM } from '../actions/types';

const initialState = {
  items: [
    { id: uuid(), name: 'brot' },
    { id: uuid(), name: 'Hahnchen' },
    { id: uuid(), name: 'Rindfleisch' },
    { id: uuid(), name: 'sprundel' }
  ]
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    default:
      return state;
  }
}
