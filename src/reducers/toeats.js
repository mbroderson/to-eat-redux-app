const defaultState = [
  {name: 'pasta', eaten: false},
  {name: 'burger', eaten: false},
  {name: 'szwajcar', eaten: false}
];

const toeats = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TEOAT':
      return [...state, action.toeat];
    default:
      return state;
  }
};

export default toeats;
