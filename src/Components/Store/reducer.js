export const ADD_ADDRESS = 'ADD_ADDRESS';

export default function reducer (state, action) {
  switch(action.type) {
    case ADD_ADDRESS:
      return {
        ...state,
        addresses: {
          ...state.addresses,
          ...action.payload
        }
      }
    default:
      return state;
  }
}