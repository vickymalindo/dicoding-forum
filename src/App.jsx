import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import Router from './routes/Router';
import { preloadProcess } from './redux/load/action';

function App() {
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(preloadProcess());
  }, [dispatch]);

  if (isLoading) {
    return null;
  }
  return <RouterProvider router={Router} />;
}

export default App;
