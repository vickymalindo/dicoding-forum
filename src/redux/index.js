import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import threadsReducer from './threads/reducer';
import categoryReducer from './category/reducer';
import leaderboardsReducer from './leaderboards/reducer';
import loadReducer from './load/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    threads: threadsReducer,
    categories: categoryReducer,
    leaderboards: leaderboardsReducer,
    isLoading: loadReducer,
  },
});

export default store;
