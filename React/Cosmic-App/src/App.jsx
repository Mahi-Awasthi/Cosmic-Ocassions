import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Home.css';
import './About.css'; 
import './Services.css'; 
import './Contact.css'; 
import './ExpenseTracker.css'; 
import Home from './assets/Home';
import About from './assets/About';
import Services from './assets/Services';
import Contact from './assets/Contact';
import ExpenseTracker from './assets/ExpenseTracker';


const App =() => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/ExpenseTracker" element={<ExpenseTracker />} />
    </Routes>
  </Router>
  )
}

export default App;
