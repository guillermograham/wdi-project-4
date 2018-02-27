import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Navbar      from './components/utility/Navbar';
import Login       from './components/auth/Login';
import Register    from './components/auth/Register';

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
