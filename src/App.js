import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Contact from './pages/Contact';
import Service from './pages/Service';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define las rutas con el nuevo formato */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </Router>
  );
};

export default App;
