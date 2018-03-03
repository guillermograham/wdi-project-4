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



    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <h1><Link to="/">AppName</Link></h1>
        <div className="navbar-burger burger" data-target="nav-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="navbar-menu" id="nav-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <Link to="/decks">Decks</Link>
            { Auth.isAuthenticated() && <Link to={`/users/${Auth.getPayload().userId}`}>My profile</Link> }
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            { !Auth.isAuthenticated() && <Link to="/login" className="">Login</Link> }
            {' '}
            { !Auth.isAuthenticated() && <Link to="/register" className="">Register</Link> }
            {' '}
            { Auth.isAuthenticated() && <a href="#" className="" onClick={logout}>Logout</a> }
          </div>
        </div>
      </div>
    </nav>
  );
};

// browser router will send the global history
export default withRouter(Navbar);
