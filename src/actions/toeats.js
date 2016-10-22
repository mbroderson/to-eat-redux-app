export const addToeat = (name) => {
  return {
    type: 'ADD_TOEAT',
    toeat: {name: name, eaten: false}
  };
};

export const toggleToeat = (name) => {
  return {
    type: 'TOGGLE_TOEAT',
    name: name
  };
};
