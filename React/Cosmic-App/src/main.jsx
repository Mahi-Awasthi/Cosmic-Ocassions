import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Home.css'; 
import './About.css'; 
import './Services.css'; 
import './Contact.css'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);