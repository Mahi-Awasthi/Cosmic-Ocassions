import React from 'react';
import { Link } from 'react-router-dom';
import '../Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Portfolio = () => {
    return (
        <main11>
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

            <div>
                {/* Background Image */}
                <div id="back">
                    <h1 id="portfolio">Portfolio</h1>
                </div>
                <div id="mid">
                    <br /><br /><br /><br />
                    COSMIC OCCASION <br />
                    <h2>Floral Designer. Event Director. Sculpture Artist.<br /></h2>
                    With Works Featured In Jakarta, New York, Hong Kong, Bahrain, London, Las Vegas
                    And Beyond<br /> Cosmic Occasion Creates Everything From Dramatic Events To Full Scale Art Installations.
                </div>
                {/* Portfolio */}
                <div id="gallery">
                    <h1 id="p">Portfolio</h1><br />
                    <table id="por">
                        {portfolioItems.map((item, index) => (
                            <tr key={index}>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td><img src={item.image} height="250px" width="500px" id="k" alt={item.title} /></td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td id="write">{item.title}<br />{item.description}</td>
                                <td>
                                    <Link to={item.link} id="arrow">
                                        <img src="arrow-right (1).svg" alt="Arrow" />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
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
                            <Link to="/contact" id="button">CONTACT</Link>
                        </td>
                    </tr>
                </table>
            </footer>
        </main11>
    );
};

const portfolioItems = [
    {
        title: 'CELEBRATIONS',
        description: 'BIRTHDAY, HOLIDAYS AND JUST FOR FUNS',
        image: 'celebrations.jpg',
        link: '/Celebration' 
    },
    {
        title: 'CEREMONIES',
        description: 'MULTICULTURAL, INDIAN, AMERICAN, AND CUSTOM WEDDING CEREMONIES',
        image: 'ceremony.jpeg',
        link: '/Ceremonie' 
    },
    {
        title: 'RECEPTIONS',
        description: 'EVENING ENTERTAINMENT, AFTER PARTIES, & STUNNING RECEPTION EXPERIENCE',
        image: 'reception.jpeg',
        link: '/Reception' 
    },
    {
        title: 'CORPORATE EVENTS',
        description: 'COMPANY CELEBRATION & NETWORKING EVENTS OF EVERY SCALE',
        image: 'corporate events.jpeg',
        link: '/Corporate' 
    },
    {
        title: 'MITZVAHS',
        description: 'BAR & BAT MITZVAHS',
        image: 'mitzvahs.jpeg',
        link: '/Mitzvahs' 
    }
];

export default Portfolio;
