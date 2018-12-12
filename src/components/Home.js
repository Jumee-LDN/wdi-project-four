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

            <h3>There are about 5 billion jobs in the world. </h3>
            <h3>What do you want to be?</h3>
            <button className="button"><Link to="/Projects/new" id="italic">I want to be</Link></button>
            <div className="long-message-container">
              <p>According to career change statistics, the average person will change career
              five to seven times during their working life. Whether your career goals have
              shifted, your values have changed or you’re just ready to try something new,
              navigating a career change can be a daunting prospect.</p>

              <p className="join-message">Join NOMAD now to share your career change idea or just to support someone's.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
