import React from 'react';
import { Link } from 'react-router-dom';
import "../Services.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Services = () => {
    return (
        <>
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

            <div className="uni">
                <div id="ma">
                    <h1 id="Sa">Services</h1>
                    <p id="pa">
                        We plan events and gatherings of any and all sorts, from weddings
                        <br />
                        and other social celebrations, to galas, corporate events, and
                        <br />
                        holiday parties
                    </p>
                </div>

                <table id="grey">
                    <tbody>
                        <tr>
                            <td>
                                <img src="serve.jpg" id="img6" alt="Event service image" />
                            </td>
                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td>
                                <p id="written1">Our services vary depending on the event, but here is a general idea of what we offer</p>
                                <div id="t">
                                    <ul id="onee">
                                        <li>Venue Selection and Layout</li>
                                        <li>All Appointment Scheduling</li>
                                        <li>Budgeting</li>
                                        <li>Planning Schedule and Timeline</li>
                                        <li>Vendor Recommendation, Negotiation, and Coordination</li>
                                        <li>Design and Decor</li>
                                        <li>Lighting, Staging, and Sound</li>
                                        <li>Selection and Coordination of Invitations and All Printed Materials</li>
                                        <li>RSVP Coordination</li>
                                        <li>Guest Concierge Services</li>
                                        <li>Ceremony Planning</li>
                                    </ul>
                                    <ul id="twoo">
                                        <li>Event Run of Show</li>
                                        <li>On-Site Event Supervision</li>
                                        <li>Gifting for Guests</li>
                                        <li>Including Welcome Gifts, Evening Turndown Surprises, and Favors</li>
                                        <li>Tenting</li>
                                        <li>Food and Beverage</li>
                                        <li>Service Staff Training</li>
                                        <li>Etiquette</li>
                                        <li>Coordination of NDAs, and if Applicable, Press Liaison</li>
                                        <li>Planning and Coordination of All Auxiliary Wedding Events</li>
                                        <li>Entertainment</li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div id="nation">
                    <h1 id="celeb">Celebrations Worldwide</h1>
                    <ul id="counting">
                        <li>Capri, Italy</li>
                        <li>Bordeaux, France</li>
                        <li>Puglia, Italy</li>
                        <li>Sveti Stefan, Montenegro</li>
                        <li>Paris, France</li>
                        <li>Athens, Greece</li>
                    </ul>
                    <ul id="counting">
                        <li>Amalfi Coast, Italy</li>
                        <li>Dubrovnik, Croatia</li>
                        <li>Saint Barthélemy</li>
                        <li>Sicily, Italy</li>
                        <li>Ireland</li>
                        <li>Morocco</li>
                        <li>Ascona, Switzerland</li>
                    </ul>
                    <ul id="counting">
                        <li>Lake Como, Italy</li>
                        <li>Istanbul, Turkey</li>
                        <li>Tuscany, Italy</li>
                        <li>Positano, Italy</li>
                        <li>London, United Kingdom</li>
                    </ul>
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
                                <li><Link to="/Dashboard">DASHBOARD</Link></li>

                            </ul>
                        </td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td id="two">
                            <div className="next">
                                <p>Destination weddings & events worldwide.</p>
                                <h6>join us @cosmic_occasions</h6>
                                <br /><br /><br />
                                <h6>© 2019 Cosmic Occasions. All Rights Reserved.</h6>
                            </div>
                        </td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td id="three">
                            <img src="COSMIC_OCCASSIONS-removebg-preview.png" id="lg" alt="Cosmic Occasions Logo" /><br /><br />
                            <Link to="/contact" id="button">CONTACT</Link>
                        </td>
                    </tr>
                </table>
            </footer>
        </>
    );
};

export default Services;
