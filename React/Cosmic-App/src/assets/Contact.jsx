import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [comment, setComment] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
  };

  const handleSubmitFeedback = () => {
    console.log("Selected Emoji:", selectedEmoji);
    console.log("Comment:", comment);

    setShowThankYou(true);

    setTimeout(() => {
      setShowThankYou(false);
      setSelectedEmoji(null);
      setComment("");
    }, 2000); // 2 seconds delay before closing modal
  };

  return (
    <div className="main1">
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

      {/* Contact Section */}
      <div>
        <h1 id="contactus">CONTACT US</h1>

        {/* Marquee */}
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="12"
          style={{ backgroundColor: "white", height: "40px", fontSize: "25px" }}
        >
          Welcome to our Contact Page! Feel free to reach out to us anytime.
        </marquee>

        <p id="p">
          Cosmic Occasion is a full-service event planning and design firm.
          <br />
          Every detail you provide helps us craft a swift and thorough response,
          so please don’t hold back!
          <br />
          We simply can’t wait to hear from you.
        </p>

        {/* Contact Form */}
        <div id="contact">
          <form>
            <p>Who Is Engaged, Person 1? *</p>
            <label htmlFor="fname1">First name:</label>
            <input type="text" id="fname1" name="fname" />

            <label htmlFor="lname1">Last name:</label>
            <input type="text" id="lname1" name="lname" />

            <p>Who Is Engaged, Person 2? *</p>
            <label htmlFor="fname2">First name:</label>
            <input type="text" id="fname2" name="fname" />

            <label htmlFor="lname2">Last name:</label>
            <input type="text" id="lname2" name="lname" />

            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="phone">Mobile Number *</label>
            <input type="text" id="phone" name="phone" />

            <label htmlFor="add">Address *</label>
            <input type="text" id="add" name="add" />

            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" />

            <label htmlFor="state">State/Province:</label>
            <input type="text" id="state" name="state" />

            <label htmlFor="code">Zip/Postal Code:</label>
            <input type="number" id="code" name="code" />

            <label htmlFor="country">Country:</label>
            <input type="text" id="country" name="country" />

            <label htmlFor="weddingDate">When Will You Celebrate?</label>
            <input type="number" id="weddingDate" name="weddingDate" />

            <label htmlFor="cat">Who is your caterer if decided?</label>
            <input type="text" id="cat" name="cat" />

            <label htmlFor="guest">How many guests are you anticipating?</label>
            <input type="number" id="guest" name="guest" />

            <label htmlFor="dest">Destination:</label>
            <input type="text" id="dest" name="dest" />

            <label htmlFor="details">More Details:</label>
            <textarea id="details" name="details"></textarea>

            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>

        {/* Feedback Button */}
        <center>
          <button
            id="feed"
            type="button"
            className="btn"
            data-bs-toggle="modal"
            data-bs-target="#feedbackModal"
          >
            Give Feedback
          </button>
        </center>

        {/* Feedback Modal */}
        <div
          className="modal fade"
          id="feedbackModal"
          tabIndex="-1"
          aria-labelledby="feedbackModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="feedbackModalLabel">
                  Feedback
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body text-center">
                {!showThankYou ? (
                  <>
                    <h3>How are you feeling?</h3>
                    <p>
                      Your input is valuable in helping us better understand your
                      needs and tailor our service accordingly.
                    </p>
                    <div className="d-flex justify-content-around my-4">
                      {["😔", "😕", "😐", "🙂", "😁"].map((emoji, index) => (
                        <div
                          key={index}
                          className={`emoji ${selectedEmoji === emoji ? "selected" : ""}`}
                          onClick={() => handleEmojiClick(emoji)}
                        >
                          {emoji}
                        </div>
                      ))}
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Add a Comment..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></textarea>
                    </div>
                    <button
                      type="button"
                      className="btn btn-success w-100"
                      id="bu"
                      onClick={handleSubmitFeedback}
                    >
                      Submit Now
                    </button>
                  </>
                ) : (
                  <div className="modal-body text-center">
                    <h3>Thank You!</h3>
                    <p>We appreciate your feedback.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
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
    </div>
  );
};

export default Contact;
