import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';

class LandingPage extends React.Component {

  state = {

  }

  render() {
    return(
      <div className="landingBackground">
        <div>
          <div className="front-title typewriter">
            <h2>create and use flashcards for language learning</h2>
          </div>
          {!Auth.isAuthenticated() && <div className="front-div">
            <Link to="/login" className="button is-link is-outlined front-buttons">
              Login
            </Link>
            <Link to="/register" className="button is-primary front-buttons">
              Register
            </Link>
          </div>}
          {Auth.isAuthenticated() && <div className="front-div">
            <Link to="/decks" className="button is-link is-outlined front-buttons">
              Decks
            </Link>
            <Link to="/decks/new" className="button is-primary front-buttons">
              Create
            </Link>
          </div>}
        </div>
      </div>
    );
  }
}

export default LandingPage;
