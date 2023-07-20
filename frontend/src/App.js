import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import Login from './components/login';
import ImageList from './components/imagelist';
import SignUp from './components/signup';
import axios from 'axios';
import "./App.css";
import logo from "./fplogo.png";


const Logout = ({ handleLogout }) => {
  const history = useHistory();

  const handleLogoutClick = async () => {
    try {
      await handleLogout(); // Call the handleLogout function passed as prop
      history.push('/'); // Redirect to the root route
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  return (
    <div>
      <button className='logout-btn' onClick={handleLogoutClick}>Logout</button>
    </div>
  );
};

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}logout/`);
      console.log(response.data); // Handle successful logout
      setLoggedIn(false); // Update loggedIn state
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  return (
    <Router>
      <div className='body'>
        <div className='header'>
          <img src={logo} alt="My logo" />
          <h2 className='head-text'> FilterPixel Image Gallery</h2>
          <div className='logout'>
          {loggedIn ? <Logout handleLogout={handleLogout}/> : <p></p>}
          </div>
        </div>

        <Switch>
          <Route exact path="/">
            {loggedIn ? <ImageList /> : <Login setLoggedIn={setLoggedIn}/>}
          </Route>
          <Route exact path="/signup">
            <SignUp setLoggedIn={setLoggedIn}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
