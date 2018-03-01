import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar      from './components/utility/Navbar';
import Login       from './components/auth/Login';
import Register    from './components/auth/Register';
import DecksNew    from './components/decks/DecksNew';
import DecksIndex    from './components/decks/DecksIndex';
import DecksShow    from './components/decks/DecksShow';

import './scss/style.scss';
import 'font-awesome/css/font-awesome.css';


class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <header>
            <Navbar />
          </header>
          <main>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/decks/new" component={DecksNew} />
              <Route path="/decks/:id" component={DecksShow} />
              <Route path="/decks" component={DecksIndex} />
            </Switch>
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
