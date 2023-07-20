import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import "./signup.css";
import GoogleLoginButton from './google';

const SignUp = ({setLoggedIn}) => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}register/`, {
        username,
        password,
      });
      console.log(response.data);
      setLoggedIn(true); // Handle successful signup
      history.push('/');
    } catch (error) {
      setErrorMessage('User registration failed. Please try again.');
      console.error(error); // Handle error
    }
  };

  return (
    <div className='auth-box'>
          <div className='auth-head'>
            <h3 className='signupheadtext'> Welcome to FilterPixel </h3>
          </div>
            <div className="google btn">
                <GoogleLoginButton/>
            </div>
    <h4>OR</h4>
    <form onSubmit={handleSignup}>
        <br/>
        <div className="form-group">
            <input  type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                    className="form-control" 
                    id="usernameInput"
            />
        </div>
        <br/>
        <div className="form-group">
            <input type="password" 
                   placeholder="Password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   className="form-control" id="exampleInputPassword1"
                   />
        </div>
        <br/>
        <button type="submit" className="button buttona">SignUp</button>
    </form>
    <hr/>
    <h3 className='logintext'>Already registered?</h3>
    <button onClick={()=> history.push("/")} className="button buttonb">Click here to Login</button>
    <p>{errorMessage}</p>
</div>
  );
};

export default SignUp;
