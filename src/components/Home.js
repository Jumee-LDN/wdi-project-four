import React from 'react';
import { isAuthenticated, decodeToken } from '../lib/auth';

function Home() {
  return (
    <div>
      {isAuthenticated() && <p>Welcome back! {decodeToken().username}</p>}
      <h1>What do you want to be?</h1>
      <button>Click to Change</button>
    </div>
  );
}

export default Home;
