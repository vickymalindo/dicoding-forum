import { actionType } from './action';

const loadReducer = (isLoading = true, action = {}) => {
  switch (action.type) {
    case actionType.SET_IS_LOADING:
      return action.payload.isLoading;
    default:
      return isLoading;
  }
};

export default loadReducer;
