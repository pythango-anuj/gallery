import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = () => {
  const Google_auth_client_id = process.env.GOOGLE_AUTH_CLIENT_ID;
  const responseGoogle = (response) => {
    // Handle the response from the Google Sign-In API
    console.log(response);
  };

  return (
    <div>
      <GoogleLogin
        className='google btn'
        clientId = {Google_auth_client_id}
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
};

export default GoogleLoginButton;
