import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <h1>Save Time, Have Accuracy, Save Money</h1>
      <p>Create Your AI Budget</p>
      <Link to="/questions">
        <button>Create AI Budget</button>
      </Link>
    </div>
  );
};

export default HomePage;
