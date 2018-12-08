import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="section">
      <div className="columns is-mobile"id="home">
        <div className="column is-full">
          <h3>Do you know there are 5million jobs in this world?</h3>
          <h1>What do you want to be?</h1>
          <button className="button is-large"><Link to="/Projects/new">I want to be</Link></button>
        </div>
      </div>
    </section>
  );
}

export default Home;
