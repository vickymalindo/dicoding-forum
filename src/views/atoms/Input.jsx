import React from 'react';
import PropTypes from 'prop-types';

function Input({ htmlFor, type, label, onChange }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={htmlFor}
          type={type}
          required
          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={onChange}
        />
      </div>
    </div>
  );
}

Input.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
