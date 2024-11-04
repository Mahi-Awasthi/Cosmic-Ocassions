import React from 'react';
import { Link } from 'react-router-dom';
import '../Corporate.css'; // Ensure this file exists
import 'bootstrap/dist/css/bootstrap.min.css';

const mitzvahCards = [
    { image: 'cp1.jpeg', title: 'A night time event with many string lights a tall, narrow sculpture.' },
    { image: 'cp2.jpg', title: 'A large ballroom with white linens on the tables ' },
    { image: 'cp3.jpg', title: 'A large banquet hall with an ornate, patterned ceiling.' },
    { image: 'cp4.jpg', title: 'A ceiling covered in balloons and streamers.' },
    { image: 'cp5.jpg', title: 'A large, modern room with a long table decoration.' },
    { image: 'cp6.jpg', title: 'A bohemian outdoor event space.' },
];
const Corporate = () => {
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
                <h1>CORPORATE EVENTS</h1>
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

export default Corporate;
