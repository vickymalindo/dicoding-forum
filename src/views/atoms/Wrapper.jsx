import React from 'react';
import PropTypes from 'prop-types';

function Wrapper({ children }) {
  return (
    <section className="max-w-4xl bg-white mx-auto py-3 px-4">
      {children}
    </section>
  );
}

Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Wrapper;
