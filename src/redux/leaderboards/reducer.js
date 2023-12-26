import { actionType } from './action';

const leaderboardsReducer = (leaderboards = [], action = {}) => {
  switch (action.type) {
    case actionType.GET_LEADERBOARDS:
      return action.payload.leaderboards;
    default:
      return leaderboards;
  }
};

export default leaderboardsReducer;
