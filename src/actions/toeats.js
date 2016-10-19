export const ADD = 'TOEAT/ADD';
export const add = (name) => {
  return {
    type: ADD,
    toeat: {name: name, eaten: false}
  };
};

export const REMOVE = 'TOEAT/REMOVE';
export const remove = (name) => {
  return {
    type: REMOVE,
    name: name
  };
};

export const TOGGLE = 'TOEAT/TOGGLE';
export const toggle = (name) => {
  return {
    type: TOGGLE,
    name: name
  };
};
