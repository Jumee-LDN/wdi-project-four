import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, deleteToken, tokenUsername, tokenUserId } from '../lib/auth';


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
          <Link to="/"><p>NOMAD</p></Link>
        </div>
        <div>
          <p className="nomad-dictionary">/ˈnəʊmad/ 1 1.1 A person who does not stay long in the same place; a wanderer.</p>
        </div>
        <nav className="nav-container">
          <Link to="/projects" className="nav-item" href="#">All Projects</Link>
          <Link to="/projects/new" className="nav-item" href="#">Create Project</Link>
          {!isAuthenticated() && <Link to="/register" className="nav-item" href="#">Register</Link>}
          {!isAuthenticated() && <Link to="/login" className="nav-item" href="#">Login</Link>}
          {isAuthenticated() && <Link to={`/users/${tokenUserId()}`} className="nav-item" href="#">{tokenUsername()}'s Page</Link>}
          {isAuthenticated() && <a onClick={this.handleLogout}  className="nav-item">Logout</a>}
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
