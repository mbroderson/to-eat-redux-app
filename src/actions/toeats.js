import axios from 'axios'

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

export const fetchToeats = () => {
  return (dispatch) => {
    dispatch(fetchToeatsPending());
    axios.get('http://192.168.1.178:3000').then((response) =>{
      dispatch(fetchToeatsSuccess(response.data.toeats));
    }).catch((err) => {
      dispatch(fetchToeatsError());
    });
  };
};
const fetchToeatsPending = () => {
  return {type: 'FETCH_TOEATS_PENDING'};
}
const fetchToeatsSuccess = (toeats) => {
  return {type: 'FETCH_TOEATS_SUCCESS', toeats: toeats};
}
const fetchToeatsError = () => {
  return {type: 'FETCH_TOEATS_ERROR'};
}
