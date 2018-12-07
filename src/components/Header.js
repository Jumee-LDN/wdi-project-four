import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, deleteToken } from '../lib/auth';


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
      <nav>
        <div>
          <Link to="/">APP NAME HERE</Link>
        </div>
        <div>
          <Link to="/Projects">All Projects</Link>
          <Link to="/Register">Register</Link>
          <Link to="/Login">Login</Link>
          {isAuthenticated() && <a onClick={this.handleLogout} >Log Out</a>}
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
