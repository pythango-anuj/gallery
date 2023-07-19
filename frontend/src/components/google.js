import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = () => {
  const responseGoogle = (response) => {
    // Handle the response from the Google Sign-In API
    console.log(response);
  };

  return (
    <div>
      <GoogleLogin
        className='google btn'
        clientId=""
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
};

export default GoogleLoginButton;
