import React from 'react';
import { Link } from 'react-router-dom';
import '../Mitzvahs.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const mitzvahCards = [
    { image: 'm1.jpg', title: 'A table set with a large, white paper flower centerpiece' },
    { image: 'm2.jpg', title: 'A long table set with balloons and lights.' },
    { image: 'm3.jpg', title: 'A table set with floral arrangements and white chairs' },
    { image: 'm4.jpg', title: 'A ceiling covered in balloons and streamers.' },
    { image: 'm5.jpg', title: 'A table set with clear balloons and gold and pink decorations.' },
    { image: 'm6.jpg', title: 'A large room with a dance floor and a ceiling covered in clouds.' },
];
const Mitzvahs = () => {
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
            {/* PARALLAX SECTION */}
            <div className="container9">
                <h1>MITZVAHS</h1>
            </div>
            <div className="blank"></div>
            {/* CARDS */}
            <div className="container99">
                {mitzvahCards.map((card, index) => (
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
                  <li><Link to="/services">SERVICES</Link></li>
                  <li><Link to="/about">ABOUT</Link></li>
                  <li><Link to="/expense-tracker">EXPENSE TRACKER</Link></li>
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
              <a href="contact.html" id="button">CONTACT</a>
            </td>
          </tr>
        </table>
      </footer>
        </main8>
    );
};

export default Mitzvahs;
