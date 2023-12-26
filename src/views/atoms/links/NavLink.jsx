import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavLink({ className, text, to }) {
  return (
    <li>
      <Link
        to={to}
        className={`${className} block py-1 px-1.5 rounded md:hover:bg-transparent md:border-0 md:p-0 text-sm md:text-base `}
      >
        {text}
      </Link>
    </li>
  );
}

NavLink.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavLink;
