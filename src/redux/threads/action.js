import api from '../../utils/api';

const actionType = {
  GET_THREADS: 'GET_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  TOGGLE_LIKE: 'TOGGLE_LIKE',
};

const getThreadsActionCreator = (threads) => {
  return {
    type: actionType.GET_THREADS,
    payload: {
      threads,
    },
  };
};

const addThreadActionCreator = (thread) => {
  return {
    type: actionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
};

const likeThreadActionCreator = (thread) => {
  return {
    type: actionType.TOGGLE_LIKE,
    payload: {
      thread,
    },
  };
};

const asyncGetThreads = (search = '') => {
  return async (dispacth) => {
    try {
      const threads = (await api.getThreads()).filter((val) => {
        return val.category.includes(search);
      });
      dispacth(getThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
  };
};

const asyncAddThread = ({ title, body, category, navigate }) => {
  return async (dispacth) => {
    try {
      const thread = await api.createThread({ title, body, category });
      dispacth(addThreadActionCreator(thread));
      alert('Insert thread success');
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };
};

const asyncLikeThread = (threadId) => {
  return async (dispacth) => {
    const like = await api.toggleLikeThread(threadId);
    console.log(like);
  };
};

const asyncUnlikeThread = (threadId) => {
  return async (dispacth) => {
    const like = await api.toggleUnlikeThread(threadId);
    console.log(like);
  };
};

export {
  actionType,
  asyncGetThreads,
  asyncAddThread,
  asyncLikeThread,
  asyncUnlikeThread,
};
