import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/Services';
import BookNow from './components/BookNow';
import ServicesFlipCards from './components/ServicesFlipCards';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<ServicesFlipCards />} />
          <Route path="/services" element={<Services />} />
          <Route path="/BookNow" element={<BookNow />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;