import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm sticky-top navbar-dark sticky-top" style={{ backgroundColor: '#6c7d5a' }}>
      <div className="container-fluid">
        <a className="navbar-brand d-md-none" href="Home.html">
          <img src="Black_And_White_Aesthetic_Minimalist_Modern_Simple_Typography_Coconut_Cosmetics_Logo__1_-removebg-preview (1).png" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="Home.html">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="About.html">ABOUT</a>
            </li>
            <a className="navbar-brand d-none d-md-block" href="Home.html">
              <img src="Black_And_White_Aesthetic_Minimalist_Modern_Simple_Typography_Coconut_Cosmetics_Logo__1_-removebg-preview (1).png" alt="" />
            </a>
            <li className="nav-item">
              <a className="nav-link" href="portfolio.html">PORTFOLIO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;