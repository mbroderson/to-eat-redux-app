export const addToeat = (name) => {
  return {
    type: 'ADD_TEOAT',
    toeat: {name: name, eaten: false}
  };
};
