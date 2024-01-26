import React from 'react';
import '../css/nextbtn.css'
import { useNavigate } from 'react-router-dom';

const Nextbtn = () => {
  const navigate = useNavigate();
  return (
      <button className="next-button" onClick={() => navigate('/moodboard')}>
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
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>

  );
};

export default Nextbtn;