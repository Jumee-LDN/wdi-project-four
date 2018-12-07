import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Header extends React.Component {
  constructor(props) {
    super(props);
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
          <Link to="/">Logout</Link>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
