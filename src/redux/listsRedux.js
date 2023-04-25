const listsReducer = (statePart = [], action) => {
    switch(action.type) {
      case 'ADD_LIST':
        return [...statePart, { ...action.payload}];
      default:
        return statePart;
    }
  }
  export const getAllLists = state => state.lists;
  export const getColumnsByList = ({columns}, listId) => columns.filter(column=> column.listId === listId);
  export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
  export const addList = payload => ({ type: 'ADD_LIST', payload });
  export default listsReducer;