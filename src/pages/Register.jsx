import React from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import Title from '../views/atoms/Title';
import RegisterForm from '../views/molecules/forms/RegisterForm';
import BackMain from '../views/atoms/links/BackMain';
import { asyncRegister } from '../redux/authUser/action';

function Register() {
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    // const response = await api.register({ name, email, password });
    dispatch(asyncRegister({ name, email, password }));
  };

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
      <BackMain />

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Title text="Sign up" className="text-gray-900 mt-10 text-center" />
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <RegisterForm
          handleSubmit={handleRegister}
          onChangeName={setName}
          onChangeEmail={setEmail}
          onChangePassword={setPassword}
        />
      </div>
    </div>
  );
}

export default Register;
