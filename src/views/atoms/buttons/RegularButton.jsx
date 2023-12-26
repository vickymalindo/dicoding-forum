import React from 'react';
import PropTypes from 'prop-types';

function RegularButton({ text, className, onSearch }) {
  return (
    <button
      className={`${className} outline-none border border-slate-500 text-slate-700 px-3 py-1.5 rounded inline-block`}
      onClick={() => onSearch(text)}
    >
      #{text}
    </button>
  );
}

RegularButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onSearch: PropTypes.func,
};

export default RegularButton;
