import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Input from '../../atoms/Input';
import FullButton from '../../atoms/buttons/FullButton';

function RegisterForm({
  handleSubmit,
  onChangeName,
  onChangeEmail,
  onChangePassword,
}) {
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <Input htmlFor="Name" type="Name" label="Name" onChange={onChangeName} />

      <Input
        htmlFor="email"
        type="email"
        label="Email address"
        onChange={onChangeEmail}
      />

      <Input
        htmlFor="password"
        type="password"
        label="Password"
        onChange={onChangePassword}
      />

      <div>
        <FullButton
          type="submit"
          className="bg-indigo-600 focus-visible:outline-indigo-600 text-white shadow-sm hover:bg-indigo-500"
          text="Sign Up"
        />
        <span className="text-sm mt-2">
          Already have an account?{' '}
          <Link to="/login" className="underline text-blue-400">
            Click here!
          </Link>
        </span>
      </div>
    </form>
  );
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
};

export default RegisterForm;
