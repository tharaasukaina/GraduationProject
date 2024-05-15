import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo2.png';
import '../style/Nav.css';

<img src={logo} alt="Bootstrap" width="100" />

const Navbar = () => {
  return (
    <>
 <nav className="navbar ms-5 navbar-expand-lg bg-transparent">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Bootstrap" width="100" />
          </Link>
          <Link className="nav-link" to="/Home">Home</Link>
          <Link className="nav-link" to="/About">About</Link>
          <Link className="nav-link" to="/Feedback">Feedback</Link>
          <Link className="nav-link" to="/Contact">Contact Us</Link>
            
        
          <div className="navbar bg-bg-transparent">
            <div className="container-fluid">
             
            </div>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;