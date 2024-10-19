import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="logo-container">
        <div className="line"></div>
        <div className="logo">
          <img src="Black_And_White_Aesthetic_Minimalist_Modern_Simple_Typography_Coconut_Cosmetics_Logo__1_-removebg-preview (1).png" />
        </div>
        <div className="line"></div>
      </div>
      <footer>
        <table>
          <tr>
            <td id="one">
              <ul id="link">
                <li>
                  <a href="portfolio.html">PORTFOLIO</a>
                </li>
                <li>
                  <a href="services.html">SERVICES</a>
                </li>
                <li>
                  <a href="About.html">ABOUT</a>
                </li>
                <li>
                  <a href="Expense Tracker.html">EXPENSE TRACKER</a>
                </li>
              </ul>
            </td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td id="two">
              <div className="next">
                <p>Destination weddings & events worldwide.</p>
                <h6>join us @cosmic_occasions</h6>
                <br />
                <br />
                <br />
                <h7> 2019 Cosmic Occasions. All Rights Reserved.</h7>
              </div>
            </td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td id="three">
              <img src="COSMIC_OCCASSIONS-removebg-preview.png" id="lg" />
              <br />
              <br />
              <a href="contact.html" id="button">
                CONTACT
              </a>
            </td>
          </tr>
        </table>
      </footer>
    </div>
  );
};
