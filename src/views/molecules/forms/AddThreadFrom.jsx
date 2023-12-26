import React from 'react';
import PropTypes from 'prop-types';
import FullButton from '../../atoms/buttons/FullButton';
import Input from '../../atoms/Input';

function AddThreadFrom({ setTitle, setBody, setCategory, addThread }) {
  return (
    <form onSubmit={addThread}>
      <Input htmlFor="title" type="text" label="Title" onChange={setTitle} />
      <Input htmlFor="body" type="text" label="Body" onChange={setBody} />
      <Input
        htmlFor="category"
        type="text"
        label="Category"
        onChange={setCategory}
      />
      <FullButton
        type="submit"
        text="Save"
        className="bg-indigo-600 focus-visible:outline-indigo-600 text-white shadow-sm hover:bg-indigo-500 mt-2"
      />
    </form>
  );
}

AddThreadFrom.propTypes = {
  setTitle: PropTypes.func.isRequired,
  setBody: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  addThread: PropTypes.func.isRequired,
};

export default AddThreadFrom;
