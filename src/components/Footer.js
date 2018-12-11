import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, deleteToken, tokenUsername, tokenUserId } from '../lib/auth';


class Footer extends React.Component {
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
      <footer>
        <section className="footer-section">
          <div className="footer-top">
            <div className="footer-brand-container">
              <Link to="/" className="brand-logo">NOMAD</Link>
            </div>
            <div className="footer-project-info">
              <a href='https://github.com/Jumee-LDN/wdi-project-four' target="_blank"><span className="italic">GA Project by</span> JUMEE LEE</a>
            </div>
          </div>
          <div className="site-map">
            <Link to="/projects" className="footer-nav-item" href="#">All Projects</Link>
            <Link to="/projects/new" className="footer-nav-item" href="#">Create Project</Link>
            {!isAuthenticated() && <Link to="/register" className="footer-nav-item" href="#">Register</Link>}
            {!isAuthenticated() && <Link to="/login" className="footer-nav-item" href="#">Login</Link>}
            {isAuthenticated() && <Link to={`/users/${tokenUserId()}`} className="footer-nav-item" href="#">{tokenUsername()}'s Page</Link>}
            {isAuthenticated() && <a onClick={this.handleLogout}  className="footer-nav-item">Logout</a>}
          </div>
        </section>
      </footer>
    );
  }
}

export default withRouter(Footer);
