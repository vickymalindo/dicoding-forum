import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Index from '../pages/Index';
import Register from '../pages/Register';
import AddThread from '../pages/AddThread';
import Leaderboard from '../pages/Leaderboard';
import Loading from '../views/atoms/Loading';

const Router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Loading />
        <Index />,
      </div>
    ),
  },
  {
    path: '/add-note',
    element: (
      <div>
        <Loading />
        <AddThread />,
      </div>
    ),
  },
  {
    path: '/login',
    element: (
      <div>
        <Loading />
        <Login />,
      </div>
    ),
  },
  {
    path: '/register',
    element: (
      <div>
        <Loading />
        <Register />,
      </div>
    ),
  },
  {
    path: '/leaderboard',
    element: (
      <div>
        <Loading />
        <Leaderboard />,
      </div>
    ),
  },
]);

export default Router;
