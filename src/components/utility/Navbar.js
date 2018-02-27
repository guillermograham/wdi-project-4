import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Auth from '../../lib/Auth';

const Navbar = ({ history }) => {

  function logout(e) {
    e.preventDefault();
    Auth.logout();
    history.push('/');
  }

  return(



    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <h1><Link to="/">AppName</Link></h1>
        <div className="navbar-start">
          <Link to="/decks/new" className="button is-primary">New deck</Link>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            { !Auth.isAuthenticated() && <Link to="/login" className="button is-primary">Login</Link> }
            {' '}
            { !Auth.isAuthenticated() && <Link to="/register" className="button is-primary">Register</Link> }
            {' '}
            { Auth.isAuthenticated() && <a href="#" className="button is-primary" onClick={logout}>Logout</a> }
          </div>
        </div>
      </div>

    </nav>
  );
};

// browser router will send the global history
export default withRouter(Navbar);
