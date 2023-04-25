const columnsReducer = (statePart = [], action) => {
    switch(action.type) {
      case 'ADD_COLUMN':
        return [...statePart, { ...action.payload}];
      default:
        return statePart;
    }
  }
  
  export const getAllColumns = state => state.columns;
  export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
  export default columnsReducer;