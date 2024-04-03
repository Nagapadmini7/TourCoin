import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import GoogleLoginButton from './google_login';


const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const url = 'http://localhost:8080';

  const handleSignup = async () => {
    try {
      const response = await axios.post(`${url}/auth/signup`, { email, password });
       
      const token = response.data.token;
      
      localStorage.setItem('token', token);
     
      navigate('/main');
    } catch (error) {
  
      console.error('Signup failed:', error);
    }
  };
  

  const handleLoginSuccess = () => {
    navigate('/main');
  };

  const handleLogin = () => {
    navigate('/');
  };

  return (
    <div className="mt-12 flex flex-col items-center">
      <h1 className="text-2xl xl:text-3xl font-extrabold">
        Sign up for cryptoconverse(company name)
      </h1>
      <div className="w-full flex-1 mt-8">
        <div className="flex flex-col items-center">
          <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
            <GoogleLoginButton onSuccess={handleLoginSuccess} />
          </button>
        </div>

        <div className="my-12 border-b text-center">
          <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
            Or sign up with e-mail
          </div>
        </div>

        <div className="mx-auto max-w-xs">
          <input
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
         
          <input
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" onClick={handleSignup}>
            <svg
              className="w-6 h-6 -ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <path d="M20 8v6M23 11h-6" />
            </svg>
            <span className="ml-3">Sign Up</span>
          </button>
          <h3 className='flex justify-center items-center mt-2 p-2'>
            Already have an account :  <span className="ml-3 text-blue-700 cursor-pointer" onClick={handleLogin}>Login</span>
          </h3>
          <p className="mt-6 text-xs text-gray-600 text-center">
            I agree to abide by cryptoconverse's
            <a
              href="#"
              className="border-b border-gray-500 border-dotted"
            >
              Terms of Service
            </a>
            and its
            <a
              href="#"
              className="border-b border-gray-500 border-dotted"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
