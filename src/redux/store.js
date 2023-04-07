import { createStore } from 'redux';
import initialState from './initialState';
import { strContains } from '../utils/strContains';

//selectors
export const getFilteredCards = ({cards, search}, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, search));

export const getAllColumns = state => state.columns;


// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCart = payload => ({type: 'ADD_CARD', payload});
export const searchCarts = payload =>  ({type: 'SEARCH', payload});

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, {...action.payload }]};
    case 'ADD_CARD':
      return {...state, cards: [...state.cards, {...action.payload}]}
    case 'SEARCH':
      return {...state, search: action.payload}
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;