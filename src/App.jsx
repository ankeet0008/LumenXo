import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/DigitalAgencyHome';
import Services from './components/Services';
import Blog from './components/Blog';
import ServiceDetailPage from './components/ServiceDetailPage';
import ContactUs from './pages/ContactMainpage';
import AboutUs from './components/AboutUs';
import BookNow from './pages/BookNow';
import FloatingContacts from './pages/FloatingContacts';
import Careers from './pages/careers';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ApplyNow from "./pages/ApplyNow"
import PageTransition from './components/PageTransition';



function App() {
  return (
    <BrowserRouter>
      <PageTransition />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/service/:id" element={<ServiceDetailPage />} />
        <Route path="/Pricing" element={<Blog />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/BookNow" element={<BookNow />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/ApplyNow" element={<ApplyNow />} />

      </Routes>

      <FloatingContacts />
    </BrowserRouter>
  );
}

export default App;
