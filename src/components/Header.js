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
        <div className="header-brand-container">
          <Link to="/">NOMAD</Link>
        </div>
        <nav className="nav-container">
          <Link to="/projects" className="nav-item" href="#">All Projects</Link>
          {!isAuthenticated() && <Link to="/register" className="nav-item" href="#">Register</Link>}
          {!isAuthenticated() && <Link to="/login" className="nav-item" href="#">Log in</Link>}
          {isAuthenticated() && <a onClick={this.handleLogout}  className="nav-item">Log out {tokenUsername()}</a>}
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
