import actionTypes from '../actionTypes';

const addCounter = (counter) => counter + 1;

const mainReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case  actionTypes.HANDLING_CLICK:
      return {
        ...state,
        counter : addCounter(state.counter)
      }
    default:
      return state;
  }
};

export default mainReducer;
