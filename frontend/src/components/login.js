import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import "./login.css";
import GoogleLoginButton from './google';

const API_BASE_URL = 'http://127.0.0.1:8000/api/';

const Login = ({setLoggedIn}) => {
  const history = useHistory();
  const signuppage = () => {
    history.push("/signup");
    console.log("Hello");
  }
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_BASE_URL}login/`, {
        username,
        password,
      });
      console.log(response.data);
      setLoggedIn(true); // Handle successful login
    } catch (error) {
      setErrorMessage('Invalid credentials. Please try again.');
      console.error(error); // Handle error
    }
  };

  return (
    <>
    <div className='auth-box'>
          <div className='auth-head'>
            <h3 className='loginheadtext'>Please login to access Image Gallery</h3>
          </div>
        <div className="google btn">
          <GoogleLoginButton/>
        </div>
    <h4>OR</h4>
    <form onSubmit={handleLogin}>
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
        <button type="submit" className="button buttona">Login</button>
    </form>
    <hr/>
    <h3 className='signuptext'>New User? <b>|</b> Please register first!</h3>
    <button onClick={signuppage} className="button buttonb">Click here to register</button>
    <p>{errorMessage}</p>
</div>
</>
  );
};

export default Login;
