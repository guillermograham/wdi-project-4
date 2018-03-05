import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar      from './components/utility/Navbar';
import Login       from './components/auth/Login';
import Register    from './components/auth/Register';
import DecksNew    from './components/decks/DecksNew';
import DecksIndex    from './components/decks/DecksIndex';
import DecksShow    from './components/decks/DecksShow';
import DecksEdit    from './components/decks/DecksEdit';
import UsersShow    from './components/users/UsersShow';
import LandingPage    from './components/static/LandingPage';

import './scss/style.scss';
import 'font-awesome/css/font-awesome.css';


class App extends React.Component {

  state = {
    showBurger: false
  }

  toggleBurger = () => {
    return this.setState({ showBurger: !this.state.showBurger });
  }

  render() {
    return (
      <Router>
        <div>
          <header>
            <Navbar
              toggleBurger={this.toggleBurger}
              showBurger={this.state.showBurger}
            />
          </header>


            <main>
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/users/:userId" component={UsersShow} />
                <Route path="/decks/:id/edit" component={DecksEdit} />
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
