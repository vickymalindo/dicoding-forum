import React from 'react';
import PropTypes from 'prop-types';

function FullButton({ type, className, text }) {
  return (
    <button
      type={type}
      className={`${className} flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
    >
      {text}
    </button>
  );
}

FullButton.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default FullButton;
