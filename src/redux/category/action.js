import api from '../../utils/api';

const actionType = {
  GET_CATEGORY: 'GET_CATEGORY',
};

const getCategoryActionCreator = (categories) => {
  return {
    type: actionType.GET_CATEGORY,
    payload: {
      categories,
    },
  };
};

const asyncGetCategories = () => {
  return async (dispatch) => {
    const categories = (await api.getThreads()).map((val) => {
      const obj = { id: val.id, category: val.category };
      return obj;
    });
    dispatch(getCategoryActionCreator(categories));
  };
};

export { actionType, asyncGetCategories };
