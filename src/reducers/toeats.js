import _ from 'lodash'

const defaultState = [];

const toeats = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TOEAT':
      return [...state, action.toeat];
    case 'TOGGLE_TOEAT':
      const newState = state.map((t) => {
        if (t.name === action.name) {
          return {name: t.name, eaten: !t.eaten};
        } else {
          return t;
        }
      });
      return newState;
    case 'FETCH_TOEATS_SUCCESS':
      return action.toeats;
    default:
      return state;
  }
};

export default toeats;
