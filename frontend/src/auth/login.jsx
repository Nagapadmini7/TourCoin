import React from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLoginButton from './google_login';
 

const LoginButton = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
 
    navigate('/login');
  };

  const signup = () => {
 
    navigate('/');
  };

  const handleLoginSuccess = () => {
 
    navigate('/main');
  };

  return (
    <div className="mt-12 flex flex-col items-center">
    <h1 className="text-2xl xl:text-3xl font-extrabold">
      Login for cryptoconverse(company name)
    </h1>
    <div className="w-full flex-1 mt-8">
      <div className="flex flex-col items-center">
        <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
          <GoogleLoginButton onSuccess={handleLoginSuccess} />
        </button>

      </div>

      <div className="my-12 border-b text-center">
        <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
          Or Login with e-mail
        </div>
      </div>

      <div className="mx-auto max-w-xs">
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type="password"
          placeholder="Password"
        />
        <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
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
          <span className="ml-3">Login</span>
        </button>
        <h3 className='flex justify-center items-center mt-2 p-2'>
          Do not have an account :  <span className="ml-3 text-blue-700 cursor-pointer" onClick={signup}>Sign Up</span>
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



function Login() {

  const navigate = useNavigate();

  const handleLoginSuccess = () => {
 
    navigate('/main');
  };
  
  return (
        <body className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
          <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
            <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
              <div>
                <img
                  src="https://d1fdloi71mui9q.cloudfront.net/uakBPZaHTku4EMCBmzWg_qVSUhEzZ7j7YnH8F"
                  className="w-32 mx-auto"
                />
              </div>

               {/* copy  */}
               <LoginButton />
        


            </div>
            <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
              <div
                className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    "url('https://www.rapidqube.com/wp-content/uploads/2021/03/Blockchain-wallet.png')",
                }}
              ></div>
            </div>
          </div>
          <div
            className="REMOVE-THIS-ELEMENT-IF-YOU-ARE-USING-THIS-PAGE hidden treact-popup fixed inset-0 flex items-center justify-center"
            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          >
            <div className="max-w-lg p-8 sm:pb-4 bg-white rounded shadow-lg text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 flex flex-col sm:flex-row items-center">
                <div className="bg-green-200 p-2 rounded-full flex items-center mb-4 sm:mb-0 sm:mr-2">
                  <svg
                    className="text-green-800 inline-block w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                  </svg>
                </div>
              </h3>
            </div>
          </div>
        </body>
 
   
  );
}

export default Login;


