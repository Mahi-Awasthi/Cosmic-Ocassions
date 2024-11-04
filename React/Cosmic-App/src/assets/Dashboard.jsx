import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Dashboard.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const [formData, setFormData] = useState({});
  const [showData, setShowData] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const entertainment = form.getAll('entertainment');

    setFormData({
      eventPurpose: form.get('eventPurpose'),
      guests: form.get('guests'),
      date: form.get('date'),
      budget: form.get('budget'),
      theme: form.get('theme'),
      venue: form.get('venue'),
      foodBeverage: form.get('foodBeverage'),
      entertainment: entertainment.join(', '),
      decorations: form.get('decorations'),
    });
    setShowData(true);
  };

  return (
    <div className="dashboard-container1 d-flex">
      <div className="sidebar1">
        <img src="S-removebg-preview.png" alt="Logo" id="logo" height="100px" width="120px" />
        <ul>
          <li><Link to="/home">HOME</Link></li><br/>
          <li><Link to="/about">ABOUT</Link></li><br/>
          <li><Link to="/portfolio">PORTFOLIO</Link></li><br/>
          <li><Link to="/contact">CONTACT</Link></li><br/>
          <li><Link to="/expense-tracker">EXPENSE TRACKER</Link></li>
        </ul>
      </div>

      <div className="main-content">
        <header>
          <h1 id="dash">DASHBOARD</h1>
        </header>

        <section className="event-table">
          <h2>Recent Events</h2>
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Event Name</th>
                <th>Date</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wedding Party</td>
                <td>25th Sep 2024</td>
                <td>New York</td>
                <td>Confirmed</td>
              </tr>
              <tr>
                <td>Corporate Meeting</td>
                <td>10th Oct 2024</td>
                <td>San Francisco</td>
                <td>Pending</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="conceptualize-event">
          <h2>Conceptualize Your Event</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="eventPurpose">Event Purpose:</label>
            <select id="eventPurpose" name="eventPurpose" className="form-select" required>
              <option value="">Select...</option>
              <option value="Wedding">Wedding</option>
              <option value="Birthday">Birthday</option>
              <option value="Corporate Event">Corporate Event</option>
              <option value="Other">Other</option>
            </select>

            <label htmlFor="guests">Number of Guests:</label>
            <input type="number" id="guests" name="guests" className="form-control" min="1" required />

            <label htmlFor="date">Preferred Date(s):</label>
            <input type="date" id="date" name="date" className="form-control" required />

            <label htmlFor="budget">Estimated Budget:</label>
            <input type="text" id="budget" name="budget" className="form-control" required />

            <label htmlFor="theme">Theme or Style:</label>
            <select id="theme" name="theme" className="form-select">
              <option value="">Select...</option>
              <option value="Formal">Formal</option>
              <option value="Casual">Casual</option>
              <option value="Rustic">Rustic</option>
              <option value="Modern">Modern</option>
            </select>

            <label htmlFor="venue">Venue Preferences:</label>
            <select id="venue" name="venue" className="form-select">
              <option value="">Select...</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Indoor">Indoor</option>
              <option value="Hotel">Hotel</option>
              <option value="Restaurant">Restaurant</option>
            </select>

            <label htmlFor="foodBeverage">Food and Beverage:</label>
            <select id="foodBeverage" name="foodBeverage" className="form-select">
              <option value="">Select...</option>
              <option value="Sit-Down">Sit-Down</option>
              <option value="Buffet">Buffet</option>
              <option value="Hors D'oeuvres">Hors D'oeuvres</option>
            </select>

            <label>Entertainment:</label>
            <div className="form-check">
              <input type="checkbox" id="dj" name="entertainment" value="DJ" className="form-check-input" />
              <label htmlFor="dj" className="form-check-label">DJ</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="liveBand" name="entertainment" value="Live Band" className="form-check-input" />
              <label htmlFor="liveBand" className="form-check-label">Live Band</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="photoBooth" name="entertainment" value="Photo Booth" className="form-check-input" />
              <label htmlFor="photoBooth" className="form-check-label">Photo Booth</label>
            </div>

            <label htmlFor="decorations">Decorations:</label>
            <select id="decorations" name="decorations" className="form-select">
              <option value="">Select...</option>
              <option value="Flowers">Flowers</option>
              <option value="Balloons">Balloons</option>
              <option value="Lighting">Lighting</option>
            </select>

            <button type="submit" className="btn10 mt-3">Submit</button>
          </form>

          {showData && (
            <div className="form-data mt-4">
              <h2>Your Event Details:</h2>
              <p><strong>Event Purpose:</strong> {formData.eventPurpose}</p>
              <p><strong>Number of Guests:</strong> {formData.guests}</p>
              <p><strong>Preferred Date(s):</strong> {formData.date}</p>
              <p><strong>Estimated Budget:</strong> {formData.budget}</p>
              <p><strong>Theme or Style:</strong> {formData.theme}</p>
              <p><strong>Venue Preferences:</strong> {formData.venue}</p>
              <p><strong>Food and Beverage:</strong> {formData.foodBeverage}</p>
              <p><strong>Entertainment:</strong> {formData.entertainment}</p>
              <p><strong>Decorations:</strong> {formData.decorations}</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
