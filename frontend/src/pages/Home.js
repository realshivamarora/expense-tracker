import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const options = [
    { label: 'Add Expense', path: '/add' },
    { label: 'View Expenses', path: '/view' },
    { label: 'Visualization', path: '/visualize' },
  ];

  return (
    <div className="home-wrapper">
      <h2 className="home-title">Welcome to Expense Tracker</h2>
      <div className="home-options">
        {options.map((opt, index) => (
          <button
            key={index}
            className="home-btn"
            onClick={() => navigate(opt.path)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
