import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Navbar      from './components/utility/Navbar';
import Login       from './components/auth/Login';
import Register    from './components/auth/Register';
import DecksNew    from './components/decks/DecksNew';
import DecksIndex    from './components/decks/DecksIndex';
import DecksShow    from './components/decks/DecksShow';

import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <header>
            <Navbar />
          </header>
          <main>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/decks/new" component={DecksNew} />
            <Route path="/decks/:id" component={DecksShow} />
            <Route exact path="/decks" component={DecksIndex} />
          </main>
        </div>
      </Router>

    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
