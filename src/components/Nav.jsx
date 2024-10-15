// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './nav.css'
import logo from '../../public/logo.jpg'
const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${isScrolled ? 'bg-white' : 'bg-transparent'} py-3 transition`} style={{position: "fixed", width: "100%", zIndex: "40"}}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo Image */}
        <img src={logo} alt="Logo" className="me-3" style={{ maxWidth: '150px' }} />

        {/* Hamburger Toggler Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Items and Let's Talk Button */}
        <div className="collapse navbar-collapse" id="navbarNav"> {/* Added id for collapse */}
          <ul className="navbar-nav me-auto justify-content-center"> {/* Centering nav items */}
            <li className="nav-item mx-3">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link active" href="#">Work</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link active" href="#">Service</a>
            </li>
            <li className="nav-item dropdown mx-3">
              <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About Us
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Speciality</a></li>
                <li><a className="dropdown-item" href="#">Privacy Policy</a></li>
                <li><a className="dropdown-item" href="#">Term of Use</a></li>
                <li><a className="dropdown-item" href="#">Refund Policy</a></li>
              </ul>
            </li>
          </ul>

          {/* Let's Talk Button inside the collapsible section */}
          <div className="d-lg-none"> {/* Hide on larger screens */}
            <button type="button" className="btn btn-dark px-4">Let's Talk</button>
          </div>
        </div>

        {/* Let's Talk Button for larger screens */}
        <div className="d-none d-lg-block"> {/* Show only on larger screens */}
          <button type="button" className="btn btn-dark px-4">Let's Talk</button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
