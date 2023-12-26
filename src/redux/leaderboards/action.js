import api from '../../utils/api';

const actionType = {
  GET_LEADERBOARDS: 'GET_LEADERBOARDS',
};

const getLeaderboardsActionCreator = (leaderboards) => {
  return {
    type: actionType.GET_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
};

const asyncGetLeaderboards = () => {
  return async (dispath) => {
    try {
      const leaderboards = await api.getLeaderboards();
      dispath(getLeaderboardsActionCreator(leaderboards));
    } catch (error) {
      alert(error.message);
    }
  };
};

export { actionType, asyncGetLeaderboards };
