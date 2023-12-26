import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Input from '../../atoms/Input';
import FullButton from '../../atoms/buttons/FullButton';

function LoginForm({ handleSubmit, onChangeEmail, onChangePassword }) {
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
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
          text="Sign In"
        />
        <span className="text-sm mt-2">
          Dont have an account?{' '}
          <Link to="/register" className="underline text-blue-400">
            Click here!
          </Link>
        </span>
      </div>
    </form>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
};

export default LoginForm;
