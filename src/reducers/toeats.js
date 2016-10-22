import _ from 'lodash'

const defaultState = [
  {name: 'pasta', eaten: false},
  {name: 'burger', eaten: false},
  {name: 'szwajcar', eaten: false}
];

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
    default:
      return state;
  }
};

export default toeats;
