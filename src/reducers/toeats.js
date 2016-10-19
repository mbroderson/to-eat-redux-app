import _ from 'lodash';
import update from 'react-addons-update';
import {
  ADD,
  TOGGLE,
  REMOVE
} from 'actions/toeats';

const defaultState = [
  {name: 'pasta', eaten: false},
  {name: 'burger', eaten: false},
  {name: 'szwajcar', eaten: false}
];

const toeats = (state = defaultState, action) => {
  let toeat, index;

  switch (action.type) {
    case ADD:
      return [...state, action.toeat];
    case TOGGLE:
      toeat = _.find(state, {name: action.name});
      index = state.indexOf(toeat);
      const newItem = {...toeat, eaten: !toeat.eaten};

      return update(state, {$splice: [[index, 1, newItem]]});
    case REMOVE:
      toeat = _.find(state, {name: action.name});
      index = state.indexOf(toeat);
      return update(state, {$splice: [[index, 1]]});
    default:
      return state;
  }
};

export default toeats;
