export const ADD_PLACE = 'ADD_PLACE';

export default function reducer (state, action) {
  switch(action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: {
          ...state.places,
          ...action.payload
        }
      }
    default:
      return state;
  }
}