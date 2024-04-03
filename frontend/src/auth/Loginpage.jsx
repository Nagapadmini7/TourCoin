 


import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import GoogleLoginButton from './google_login';
import ConnectButton from './ConnectButton';

function Sign() {

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
               <Signup />
               <ConnectButton />


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

export default Sign;

