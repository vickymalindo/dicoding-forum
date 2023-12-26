import { actionType } from './action';

const threadsReducer = (threads = [], action = {}) => {
  switch (action.type) {
    case actionType.GET_THREADS:
      return action.payload.threads;
    // case actionType.ADD_THREAD:
    //   return [action.payload.thread, ...threads];
    default:
      return threads;
  }
};

export default threadsReducer;
