import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'; // Import your About component
import ContactUs from './pages/ContactUs'; // Import your ContactUs component
import Menu from './pages/Menu'; // Import your ContactUs component


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* Add About route */}
        <Route path="/contact" element={<ContactUs />} /> {/* Add ContactUs route */}
        <Route path="/menu" element={<Menu />} /> {/* Add ContactUs route */}
      </Routes>
    </Router>
  );
}

export default App;
