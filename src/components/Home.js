import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated, tokenUsername } from '../lib/auth';

function Home() {
  return (
    <div>
      {isAuthenticated() && <p>Welcome back! {tokenUsername()}</p>}
      <h1>What do you want to be?</h1>
      <button><Link to="/Projects/new">Click to Change</Link></button>
    </div>
  );
}

export default Home;
