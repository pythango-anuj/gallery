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
        clientId="370405615318-sit8s87a99nad6ac0eluhjou486mr0hs.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
};

export default GoogleLoginButton;
