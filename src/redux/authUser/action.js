import api from '../../utils/api';

const actionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

const setAuthUserActionCreator = (authUser) => {
  return {
    type: actionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
};

const unsetAuthUserActionCreator = () => {
  return {
    type: actionType.UNSET_AUTH_USER,
    payload: {
      authUser: null,
    },
  };
};

const asyncSetAuthUser = ({ email, password, navigate }) => {
  return async (dispatch) => {
    try {
      const token = await api.login({ email, password });
      api.putAccessToken(token);
      const profile = await api.getProfile();
      dispatch(setAuthUserActionCreator(profile));
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };
};

const asyncUnsetAuthUser = () => {
  return (dispatch) => {
    api.removeAccessToken();
    dispatch(unsetAuthUserActionCreator);
  };
};

const asyncGetProfile = () => {
  return async (dispatch) => {
    try {
      const profile = await api.getProfile();
      dispatch(setAuthUserActionCreator(profile));
    } catch (error) {
      dispatch(unsetAuthUserActionCreator(null));
    }
  };
};

const asyncRegister = ({ email, name, password }) => {
  return async (dispatch) => {
    try {
      const user = await api.register({ email, name, password });
      dispatch(setAuthUserActionCreator(user));
      alert('Create account success');
    } catch (error) {
      alert(error.message);
    }
  };
};

export {
  asyncSetAuthUser,
  asyncUnsetAuthUser,
  asyncGetProfile,
  setAuthUserActionCreator,
  asyncRegister,
  actionType,
};
