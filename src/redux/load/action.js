/**
 * @TODO: Define all the actions (creator) for the isPreLoad state
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
// import api from '../../utils/api';
// import { setAuthUserActionCreator } from '../authUser/action';

const actionType = {
  SET_IS_LOADING: 'SET_IS_LOADING',
};

function setIsPreloadActionCreator(isLoading) {
  return {
    type: actionType.SET_IS_LOADING,
    payload: {
      isLoading,
    },
  };
}

function preloadProcess() {
  return async (dispatch) => {
    dispatch(showLoading());

    dispatch(setIsPreloadActionCreator(false));

    dispatch(hideLoading());
  };
}

export { actionType, setIsPreloadActionCreator, preloadProcess };
