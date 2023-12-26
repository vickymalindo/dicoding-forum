import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineLogout } from 'react-icons/md';
import DicodingLogo from '../../assets/images/dicoding-logo.png';
import NavLink from '../atoms/links/NavLink';
import {
  asyncGetProfile,
  asyncUnsetAuthUser,
} from '../../redux/authUser/action';

function Navbar() {
  const authUser = useSelector((state) => state.authUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(asyncUnsetAuthUser());
  };

  React.useEffect(() => {
    dispatch(asyncGetProfile());
  }, []);

  return (
    <header className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex  items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={DicodingLogo}
            alt="DicodingLogo"
            className="block md:hidden w-8 h-8"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hidden md:block ">
            Dicoding Forum
          </span>
        </a>
        <ul className="font-medium flex borderborder-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <NavLink
            className="text-gray-900 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:bg-gray-100"
            text="Thread"
            to="/"
          />
          <NavLink
            className="text-gray-900 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:bg-gray-100"
            text="Leaderboards"
            to="/leaderboard"
          />
          {!authUser ? (
            <NavLink
              className="text-white bg-blue-700 md:text-blue-700  md:bg-transparent dark:text-white md:dark:text-blue-500"
              text="Login"
              to="/login"
            />
          ) : (
            <div className="flex items-center justify-center gap-2 text-white">
              <div className="flex justify-center items-center gap-1">
                <img
                  src={authUser.avatar}
                  alt={authUser.name}
                  className="w-6 h-6"
                />
                <span className="block h-max">{authUser.name}</span>
              </div>
              <MdOutlineLogout
                className="block w-6 h-6 cursor-pointer"
                onClick={handleLogout}
              />
            </div>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
