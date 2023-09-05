import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use 'Routes' instead of 'Switch'
import Popular from './components/popular/Popular';
import Categories from './components/categories/Categories';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';

const App = () => {
  return (
    <Router>
        <Routes> {/* Use 'Routes' instead of 'Switch' */}
          <Route path="/" element={<Popular />} /> {/* Use 'element' instead of 'component' */}
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  );
};

export default App;
