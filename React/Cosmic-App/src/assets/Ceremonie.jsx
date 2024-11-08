import React from 'react';
import { Link } from 'react-router-dom';
import '../Ceremonie.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const ceremonyCards = [
    { image: 'c1.jpg', title: 'A charming outdoor ceremony setup with a floral arch and tables under palm trees.' },
    { image: 'c2.jpg', title: 'A romantic setting under a canopy of flowers.' },
    { image: 'c3.jpeg', title: 'An elegant white aisle lined with flower arrangements.' },
    { image: 'c4.jpeg', title: 'A stunning church interior with ornate decorations.' },
    { image: 'c5.jpeg', title: 'A grand and airy hall with a beautiful floral centerpiece.' },
    { image: 'c6.jpeg', title: 'A contemporary space with a glass ceiling and chandeliers.' },
];

const Ceremonie = () => {
    return (
        <main8>
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

            <div className="blank"></div>
            <div className="container9">
                <h1>CEREMONIES</h1>
            </div>
            <div className="blank"></div>

            <div className="written">
                Our stunning waterfall ceremony captured on film.
                This incredible Las Vegas ceremony had 7 real waterfalls created. Scroll to view more of our beautiful ceremonies we have created.
            </div>

            {/* <div className="loop">
                <video autoPlay muted loop id="myVideo">
                    <source src="/ceremonie_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div> */}

            <div className="container99">
                {ceremonyCards.map((card, index) => (
                    <div className="card" key={index}>
                        <div className="image">
                            <img src={card.image} alt={card.title} id="pika" />
                        </div>
                        <div className="content">
                            <h3>{card.title}</h3>
                        </div>
                    </div>
                ))}
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
                  <li><Link to="/about">ABOUT</Link></li>
                  <li><Link to="/expensetracker">EXPENSE TRACKER</Link></li>
                  <li><Link to="/Dashboard">DASHBOARD</Link></li>

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
              <a href="/contact" id="button">CONTACT</a>
            </td>
          </tr>
        </table>
      </footer>
        </main8>
    );
};

export default Ceremonie;
