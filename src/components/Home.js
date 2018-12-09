import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated, tokenUsername } from '../lib/auth';

function Home() {
  return (
    <section className="section" id="home">
      {isAuthenticated() &&
        <div className="flash-message-container">
          <p className="flash-message">Welcome back {tokenUsername()}</p>
        </div>
      }
      <div className="columns">
        <div className="column is-full">
          <div className="home-message">
            <h3>There are about 5 billion jobs in the world.</h3>
            <h3>What do you want to be?</h3>
          </div>
          <button className="button"><Link to="/Projects/new" id="italic">I want to be</Link></button>
        </div>
      </div>
    </section>
  );
}

export default Home;
