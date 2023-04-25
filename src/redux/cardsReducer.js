import { strContains } from '../utils/strContains';
const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
      case 'ADD_CARD':
        return [...statePart, { ...action.payload}];
      case 'TOGGLE_CARD_FAVORITE':
        return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
      case 'REMOVE_CARD': 
        return statePart.filter(card => card.id !== action.payload);
        default:
        return statePart;
    }
  }
  export const getFavoriteCards = ({cards}) => cards.filter(card => card.isFavorite);
  export const getFilteredCards = ({cards, search}, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, search));
  export const toggleFavorite = payload => ({type: 'TOGGLE_CARD_FAVORITE', payload});
  export const addCart = payload => ({type: 'ADD_CARD', payload});
  export const removeCard = payload => ({type: 'REMOVE_CARD', payload});
  export default cardsReducer;