import {createStore} from 'redux';

const INITIAL_STATE = {
  data: [],
};

function tags(state = INITIAL_STATE, action){
  switch(action.type){
    case 'ADD_TAG':
      return {...state, data: [...state.data, action.tagValue]};
    case 'REMOVE_TAG':
      return {
          ...state, 
          data: state.data.filter(
            (tagItem, currentId) => action.idToRemove !== currentId
          )
      };
    default:
      return state;
  }
}


const store = createStore(tags);

export default store;