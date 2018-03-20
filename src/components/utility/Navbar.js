import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Auth from '../../lib/Auth';

const Navbar = ({ history, toggleBurger, showBurger }) => {

  function logout(e) {
    e.preventDefault();
    Auth.logout();
    history.push('/');
  }

  return(
    <nav className="navbar is-transparent container" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h1>wordUp</h1>
        </Link>
        <div
          className={`${(showBurger ? 'is-active' : '')} navbar-burger burger`}
          data-target="nav-menu"
          onClick={toggleBurger}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={`${(showBurger ? 'is-active' : '')} navbar-menu`}
        onClick={toggleBurger}
        id="nav-menu"
      >
        <div className="navbar-start">
          <div className="navbar-item">
            { Auth.isAuthenticated() &&
              <Link to={`/users/${Auth.getPayload().userId}`}>
                <i className="far fa-user"></i> Profile
              </Link>
            }
          </div>
          <div className="navbar-item">
            { Auth.isAuthenticated() &&
              <Link to="/decks">
                <i className="fas fa-book"></i> Decks
              </Link>
            }
          </div>
          <div className="navbar-item">
            { Auth.isAuthenticated() &&
              <Link to="/decks/new">
                <i className="far fa-file"></i> Create
              </Link>
            }
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            { Auth.isAuthenticated() &&
              <a href="#" onClick={logout}>
                <i className="fas fa-sign-out-alt"></i> Logout
              </a>
            }
          </div>
          <div className="navbar-item">
            { !Auth.isAuthenticated() &&
              <Link to="/login">Login</Link> }
          </div>
          <div className="navbar-item">
            { !Auth.isAuthenticated() &&
              <Link to="/register">Register</Link> }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
