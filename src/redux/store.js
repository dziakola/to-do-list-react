import { createStore } from 'redux';
import initialState from './initialState';
import { strContains } from '../utils/strContains';

//selectors
export const getFilteredCards = ({cards, search}, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, search));

export const getAllColumns = state => state.columns;

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

export const getColumnsByList = ({columns}, listId) => columns.filter(column=> column.listId === listId);

export const getAllLists = state => state.lists;



// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCart = payload => ({type: 'ADD_CARD', payload});
export const addList = payload => ({ type: 'ADD_LIST', payload });
export const searchCarts = payload =>  ({type: 'SEARCH', payload});
export const clearSearch = payload => ({type: 'CLEAR_SEARCH',payload});

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, {...action.payload }]};
    case 'ADD_CARD':
      return {...state, cards: [...state.cards, {...action.payload}]}
    case 'ADD_LIST':
      return {...state, lists: [...state.lists, {...action.payload}]}
    case 'SEARCH':
      return {...state, search: action.payload}
    case 'CLEAR_SEARCH':
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