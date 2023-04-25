const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case 'UPDATE_SEARCHSTRING':
        return action.payload
      default:
        return statePart;
    }
  }
export const clearSearch = payload => ({type: 'UPDATE_SEARCHSTRING',payload});
export const searchCarts = payload =>  ({type: 'UPDATE_SEARCHSTRING', payload});
export default searchStringReducer;