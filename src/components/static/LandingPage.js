import React from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {

  state = {

  }

  render() {
    return(
      <div className="front-div">
        <Link to="/login" className="button is-link is-outlined front-buttons">
          Login
        </Link>
        <Link to="/register" className="button is-primary front-buttons">
          Register
        </Link>
      </div>
    );
  }
}

export default LandingPage;
