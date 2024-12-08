import React from 'react';
import { Link } from 'react-router-dom';
import babyBoyImage from '../assets/baby-boy1.jpg'; 
import babyGirlImage from '../assets/baby-girl1.jpg'; 
import logo from '../assets/logo.png'; 
import '../styles/HomePage.css';

<img src={logo} alt="Baby Name Finder Logo" className="logo" />
function HomePage() {
  return (
    <div className="home-container">
      <img src={logo} alt="Baby Name Finder Logo" className="logo" />
      <h1 className="welcome-title">Welcome to Baby Name Finder</h1>
      <p className="welcome-subtitle">Choose a gender to start finding names</p>

      <div className="gender-selection">
        <Link to="/names/boy" className="gender-card">
          <img src={babyBoyImage} alt="Baby Boy" className="gender-image" />
          <div className="overlay">
            <span className="gender-text">Baby Boy</span>
          </div>
        </Link>

        <Link to="/names/girl" className="gender-card">
          <img src={babyGirlImage} alt="Baby Girl" className="gender-image" />
          <div className="overlay">
            <span className="gender-text">Baby Girl</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
