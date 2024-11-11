import React from 'react';
import { BellIcon, ChevronLeftIcon } from 'lucide-react';
//import './Header.css';
import "../styles/Header.css";
import logo from '../assets/Aquanidhi.png';
//import logo from './assets/AquaNidhi_logo.png';

const Header: React.FC = () => {
  return (
    <>

      <header className="main-header">
        <div className="header-left">
          <ChevronLeftIcon className="back-arrow" />
          <div className="logo-container">
            <img 
              src={logo} 
              alt="Aquanidhi Logo" 
              className="logo-image"
            />
            <span className="logo-text">AQUANIDHI</span>
          </div>
        </div>
        <nav className="main-nav">
          <a href="#about">About us</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
          <BellIcon className="bell-icon" />
          <div className="profile-avatar"></div>
        </nav>
      </header>

      <div className="sub-header">
        <div className="nav-links">
          <span className="active">Admin Dashboard</span>
          <span>Data Analysis</span>
          <span>Settings</span>
        </div>
      </div>

    </>
  );
};

export default Header;



