import React from 'react';
import { Link } from 'react-router-dom';
import "../Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <main>
      {/* NAVBAR SECTION */}
      <nav className="navbar navbar-expand-sm sticky-top navbar-dark" style={{ backgroundColor: '#6c7d5a' }}>
        <div className="container-fluid">
          <Link className="navbar-brand d-md-none" to="/">
            <img src="Black_And_White_Aesthetic_Minimalist_Modern_Simple_Typography_Coconut_Cosmetics_Logo__1_-removebg-preview (1).png" alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">ABOUT</Link>
              </li>
              <Link className="navbar-brand d-none d-md-block" to="/">
                <img src="Black_And_White_Aesthetic_Minimalist_Modern_Simple_Typography_Coconut_Cosmetics_Logo__1_-removebg-preview (1).png" alt="Logo" />
              </Link>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">PORTFOLIO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* LOGO */}
      <div className="logo2">
        <center>
          <img src="S-removebg-preview.png" className="img-fluid" alt="Logo" />
        </center>
      </div>
      <br />

      {/* MARQUEE SECTION */}
      <marquee className="marq" direction="right" loop="" scrollAmount="6">
        <div className="geek1">
          <img src="vogue.svg" alt="Vogue" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src="harpers.svg" alt="Harpers" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src="martha.svg" alt="Martha" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src="nytm.svg" alt="NY Times" />
        </div>
      </marquee>
      <marquee className="marq2" direction="left" loop="" scrollAmount="6">
        <div className="geek2">
          <h4>Planning an event should, in fact, be fun and enjoyable.</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src="star.png" alt="Star" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <h4>Our clients never need to spend a single iota of time searching for inspiration.</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src="star.png" alt="Star" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <h4>You don’t know what you don’t know—but we do.</h4>
        </div>
      </marquee>

      {/* TWO CARDS SECTION */}
      <div className="container1">
        <div className="image-section">
          <img src="luxury-wedding-planner-michigan.jpg" alt="Decorative Image" />
        </div>
        <div className="text-box">
          <h3>THE KIND OF PARTY YOUR GUESTS TALK ABOUT FOR DECADES</h3>
          <p>We’re a perfect match to help you plan a celebration that resonates on a deeply personal level; a party that one day you’ll look back on and say: <i>“Wow, that was everything we wanted and more.”</i></p>
          <a href="portfolio.html" className="button1">Wander Through Our Eventspiration →</a>
        </div>
      </div>

      {/* PARALLAX SECTION */}
      <div className="un">
        <h2 id="hi">WELCOME TO COSMIC OCCASIONS</h2>
        <br /><br />
        <p id="a">Events That Guests Will Talk About for Years To Come
          Our parties are beautiful, but that's just the beginning.
          We bring 35 years of experience to planning events that are tailor-made for each host and their guest list.
          Our events have been described as fun, unique, elegant, and always innovative.
        </p>
      </div>
      <br /><br />

      {/* MINI CARDS */}
      <div className="booknine">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="p3" key={index}>
            <div className="im2"><img src={`i${index + 1}.jpeg`} alt={`Mini Card ${index + 1}`} /></div>
          </div>
        ))}
      </div>
      <br /><br />

      {/* VIDEO SECTION */}
      <div className="loop">
        <video autoPlay muted loop id="myVideo">
          <source src="tara_highlight_2 (1080p).mp4" type="video/mp4" />
        </video>
        <div className="overlay">
          <h2><span id="tx">we are</span><br />A FULL-SERVICE<br />
            EVENT PLANNING<br />
            AND DESIGN COMPANY</h2>
        </div>
      </div>

      {/* FOOTER SECTION */}
      <div className="logo-container">
        <div className="line"></div>
        <div className="logo">
          <img src="Black_And_White_Aesthetic_Minimalist_Modern_Simple_Typography_Coconut_Cosmetics_Logo__1_-removebg-preview (1).png" alt="Logo" />
        </div>
        <div className="line"></div>
      </div>
      <footer>
        <table>
          <tr>
            <td id="one">
            <ul id="link">
                  <li><Link to="/portfolio">PORTFOLIO</Link></li>
                  <li><Link to="/services">SERVICES</Link></li>
                  <li><Link to="/about">ABOUT</Link></li>
                  <li><Link to="/expense-tracker">EXPENSE TRACKER</Link></li>
                </ul>
            </td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td id="two">
              <div className="next">
                <p>Destination weddings & events worldwide.</p>
                <h6>join us @cosmic_occasions</h6>
                <br /><br /><br />
                <h7>© 2019 Cosmic Occasions. All Rights Reserved.</h7>
              </div>
            </td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td id="three">
              <img src="COSMIC_OCCASSIONS-removebg-preview.png" id="lg" alt="Logo" /><br /><br />
              <a href="contact.html" id="button">CONTACT</a>
            </td>
          </tr>
        </table>
      </footer>
    </main>
  );
};

export default Home;
