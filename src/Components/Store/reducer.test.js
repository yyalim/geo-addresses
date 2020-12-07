import reducer, { ADD_ADDRESS } from './reducer';

const initialState = {
  addresses: {
    address_id_1: { lat: 10, long: 20 },
    address_id_2: { lat: 11, long: 21 }
  }
}

it('should not change the state if unknown action dispatched', () => {
  const action = { type: 'what is this?' };

  expect(reducer(initialState, action)).toMatchObject(initialState)
})

it('should add new address when ADD_ADDRESS action dispatched', () => {
  const action = {
    type: ADD_ADDRESS,
    payload: { address_id_3: { lat: 12, long: 22 }}
  };

  expect(reducer(initialState, action)).toMatchObject({
    addresses: {
      address_id_1: { lat: 10, long: 20 },
      address_id_2: { lat: 11, long: 21 },
      address_id_3: { lat: 12, long: 22 }
    }
  });
});
