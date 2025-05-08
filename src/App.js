import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/home';
import Benefits from './components/benefits';
import About from './components/about';
import Services from './components/services';
import FAQ from './components/faq';
import Footer from './layouts/footer';
import Header from './layouts/header';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <FloatingWhatsApp />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;