import React from 'react';
import '../About.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <main1>
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

      {/* HEADING */}
      <div className="head">
        <h3>EXTRAORDINARY EVENTS,<br /><span id="so">flawless execution</span></h3>
      </div>

      {/* PARALLEX SECTION */}
      <div className="paral">  
        </div><br/><br/>

      {/* ABOUT SECTION */}
      <div className="about">
        <p>
          Cosmic Occasions has built a stellar reputation in the event management industry as innovative coordinators, dedicated to going above and beyond to make sure your event is as distinctive and extraordinary as you are. Our team has garnered numerous accolades and awards from clients and industry experts alike.
          <br /><img src="star.png" alt="Star" /><br />
          Our passion for event planning, creative vision, meticulous attention to detail, and commitment to inclusivity make Cosmic Events stand out. We offer a fresh approach to event design, working closely with you and your vendors to craft an exceptional event with timeless style and sophistication.
        </p>
      </div>

      {/* CORE VALUES */}
      <div className="about2">
        <h4>Core Values</h4><br />
        <p>
          Provide excellence through thoughtful communication and dynamic team collaboration.
          <br />
          Produce memorable and authentic experiences with creativity and professionalism.
          <br />
          Deliver top-notch results led by expertise, integrity, and innovation.
        </p>
      </div>

      {/* FEATURES */}
      <div className="about3">
        <h4>Featured In</h4>
        <marquee className="marq" direction="left" loop="" scrollamount="6">
          <div className="geek1">
            <img src="vogue.svg" alt="Vogue" />
            <img src="harpers.svg" alt="Harpers" />
            <img src="martha.svg" alt="Martha" />
            <img src="logo.png" alt="Logo" />
            <img src="logos__huffpost_weddings_small.png" alt="Huffpost" />
            <img src="Cosmopolitan-Emblem.png" alt="Cosmopolitan" />
            <img src="unnamed.jpg" alt="Unnamed" />
          </div>
        </marquee>
        <div id="clogo">
          <img src="Published-On-Junebug-Weddings-Badge.jpeg" alt="Junebug" />
          <img src="2023+WC+Vendor+Badge.png" alt="Vendor Badge" />
          <img src="Screen+Shot+2022-06-17+at+1.45.32+PM.png" alt="Screen Shot" />
          <img src="as-seen-oval_no_date$!1000x.png" alt="As Seen" />
        </div>
        <center>
          <img src="nytm.svg" id="nytm" alt="NYTM" />
        </center>
      </div>

      {/* FAQs SECTION */}
      <div className="container my-5">
        <h3 id="faq">FAQs</h3>
        <div className="accordion" id="faqAccordion">
          {faqData.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index + 1}`}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index + 1}`} aria-expanded="false" aria-controls={`collapse${index + 1}`}>
                  {faq.question}
                </button>
              </h2>
              <div id={`collapse${index + 1}`} className="accordion-collapse collapse" aria-labelledby={`heading${index + 1}`} data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
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
    </main1>
  );
};

// Sample FAQs Data
const faqData = [
  {
    question: "What services do you offer?",
    answer: "We specialize in a wide range of event planning services, including wedding planning, corporate events, private parties, and themed celebrations. Our services include venue selection, decoration, catering, entertainment, and coordination on the day of the event."
  },
  {
    question: "How do I book an event with Cosmic Occasions?",
    answer: "You can book an event by filling out the contact form on our website or by mailing us directly at cosmicoccasions@gmail.com. We’ll schedule a consultation to discuss your event details and start planning."
  },
  {
    question: "What is your pricing structure?",
    answer: "Our pricing varies depending on the type and size of the event, as well as the specific services required. We offer customized packages to fit your budget and needs. Contact us for a detailed quote."
  },
  {
    question: "Can I see examples of your previous work?",
    answer: "Absolutely! We have a portfolio section on our website showcasing photos and testimonials from past events. Feel free to browse through to get an idea of our style and capabilities."
  },
  {
    question: "Do you assist with planning fundraisers and charity events?",
    answer: "Yes, we can help organize fundraisers and charity events, including planning logistics, managing guests, and coordinating with sponsors. Our goal is to ensure a successful and impactful event for your cause."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Our cancellation policy varies depending on the services booked and the timing of the cancellation. Please review our full policy on the website or discuss it with us during your consultation."
  }
];

export default About;
