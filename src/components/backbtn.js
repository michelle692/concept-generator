import React from 'react';
import '../css/backbtn.css'
import { useNavigate } from 'react-router-dom';

const Backbtn = () => {
  const navigate = useNavigate();
  return (
      <button className="back-button" onClick={() => navigate('/')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="arrow-icon"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

  );
};

export default Backbtn;