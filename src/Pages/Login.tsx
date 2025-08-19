import React, { FormEvent, useState } from 'react';
import useAuthStore from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const { id, password, remember, setId, setPassword, setRemember } = useAuthStore();
  const navigate = useNavigate();


  const [idError, setIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setIdError('');
    setPasswordError('');

    let hasError = false;

    if (!id.trim()) {
      setIdError('Please enter ID');
      hasError = true;
    }

    if (!password.trim()) {
      setPasswordError('Please enter password');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    if (id === 'admin' && password === 'supercoder2025') {
      alert('Login successful!');
      navigate('/home');
    } else {
      alert('Invalid ID or password.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md md:max-w-lg lg:max-w-xl">
        <h1 className="text-yellow-500 font-bold text-3xl text-center mb-8 tracking-wider">LANDAS</h1>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-5">
            <label className="block text-gray-700 mb-2" htmlFor="id">ID</label>
            <input
              id="id"
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 ${
                idError ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your ID"
            />
            {idError && <p className="text-red-600 text-sm mt-1">{idError}</p>}
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 ${
                passwordError ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your password"
            />
            {passwordError && <p className="text-red-600 text-sm mt-1">{passwordError}</p>}
          </div>
          <div className="flex items-center mb-6">
            <input
              id="remember"
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="mr-3"
            />
            <label htmlFor="remember" className="text-gray-700">Remember Me</label>
            <button type="button" className="ml-auto text-xs text-yellow-600 underline">Forgot ID or Password?</button>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-xl shadow hover:bg-yellow-600 transition"
          >
            Login
          </button>
          <button
            type="button"
            className="w-full mt-4 border border-yellow-500 text-yellow-500 font-semibold py-2 rounded-xl"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
