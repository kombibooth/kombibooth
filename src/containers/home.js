import React from 'react';
import { Link } from 'react-router';


const Home = () => (
  <div>
    <Link to="/photos/start">Start photo booth</Link>
    <br />
    <Link to="/settings/preferences">Settings</Link>
  </div>
);

export default Home;
