import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = () => {
  const googleAuthClientId = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID;
  const responseGoogle = (response) => {
    // Handle the response from the Google Sign-In API
    console.log(response);
  };

  return (
    <div>
      <GoogleLogin
        className='google btn'
        clientId = {googleAuthClientId}
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
};

export default GoogleLoginButton;
