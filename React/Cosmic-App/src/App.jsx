import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Home.css';
import './About.css'; 
import './Contact.css'; 
<<<<<<< HEAD
import './Portfolio.css'; 
import './Ceremonie.css'; 
import './Mitzvahs.css'; 
import './Celebration.css'; 
import './Reception.css'; 
import './Corporate.css'; 
import './Dashboard.css'; 


=======
import './ExpenseTracker.css'; 
>>>>>>> 9dfce5b1b62c53ab6a00600eabb8261495244518
import Home from './assets/Home';
import About from './assets/About';
import Contact from './assets/Contact';
<<<<<<< HEAD
import Portfolio from './assets/Portfolio';
import Ceremonie from './assets/Ceremonie';
import  Mitzvahs from './assets/Mitzvahs';
import  Celebration from './assets/Celebration';
import  Corporate from './assets/Corporate';
import Reception from './assets/Reception';
import  Dashboard from './assets/Dashboard';



=======
import ExpenseTracker from './assets/ExpenseTracker';
>>>>>>> 9dfce5b1b62c53ab6a00600eabb8261495244518


const App =() => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
<<<<<<< HEAD
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Ceremonie" element={<Ceremonie />} />
      <Route path="/Mitzvahs" element={<Mitzvahs />} />
      <Route path="/Celebration" element={<Celebration />} />
      <Route path="/Corporate" element={<Corporate />} />
      <Route path="/Reception" element={<Reception />} />
      <Route path="/Dashboard" element={<Dashboard />} />


       
=======
      <Route path="/ExpenseTracker" element={<ExpenseTracker />} />
>>>>>>> 9dfce5b1b62c53ab6a00600eabb8261495244518
    </Routes>
  </Router>
  )
}

export default App;
