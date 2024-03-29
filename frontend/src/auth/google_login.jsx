import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  const clientId = '217985819902-pmslg7589gmraa3237r4ovpicb5aso22.apps.googleusercontent.com';

  const handleSuccess = (response) => {
    onSuccess(response);
  };

  const handleFailure = (error) => {
    onFailure(error);
  };

  return (
    <div  >
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          buttonText="Login with Google"
          onSuccess={handleSuccess}
          onFailure={handleFailure}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleLoginButton;
