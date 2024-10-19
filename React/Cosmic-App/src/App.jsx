import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Home.css';
import './About.css';
import Home from './assets/Home';
import About from './assets/About';

const App =() => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  </Router>
  )
}

export default App;
