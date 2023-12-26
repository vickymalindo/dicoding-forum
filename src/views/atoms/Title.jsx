import React from 'react';
import PropTypes from 'prop-types';

function Title({ className, text }) {
  return (
    <h2 className={`${className} text-2xl font-bold leading-9 tracking-tight`}>
      {text}
    </h2>
  );
}

Title.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Title;
