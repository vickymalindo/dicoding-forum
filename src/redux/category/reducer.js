import { actionType } from './action';

const categoryReducer = (categories = [], action = {}) => {
  switch (action.type) {
    case actionType.GET_CATEGORY:
      return action.payload.categories;
    default:
      return categories;
  }
};

export default categoryReducer;
