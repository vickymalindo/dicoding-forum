import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import LoginForm from '../views/molecules/forms/LoginForm';
import Title from '../views/atoms/Title';
import BackMain from '../views/atoms/links/BackMain';
import { asyncSetAuthUser } from '../redux/authUser/action';

export default function Login() {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(asyncSetAuthUser({ email, password, navigate }));
  };

  return (
    <section className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
      <BackMain />
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Title
          text="Sign in to your account"
          className="text-gray-900 mt-10 text-center"
        />
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginForm
          handleSubmit={handleLogin}
          onChangeEmail={setEmail}
          onChangePassword={setPassword}
        />
      </div>
    </section>
  );
}
