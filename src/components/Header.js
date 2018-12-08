import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, deleteToken, tokenUsername } from '../lib/auth';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    deleteToken();
    this.props.history.push('/');
  }

  render() {

    return (
      <header className="header">
        <nav>
          <div>
            <Link to="/">APP NAME HERE</Link>
          </div>
          <div>
            <Link to="/projects">All Projects</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            {isAuthenticated() && <a onClick={this.handleLogout} >Log Out {tokenUsername()}</a>}
          </div>
        </nav>
        {isAuthenticated() &&
          <div className="flash-message-container">
            <p className="flash-message">Welcome back {tokenUsername()}</p>
          </div>
        }
      </header>
    );
  }
}

export default withRouter(Header);
