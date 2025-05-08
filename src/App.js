import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/home';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';

// Tambahkan komponen loading
const LoadingScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 5500); // loading 2.5 detik
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <>
      <style>
        {`
          @keyframes fadeZoom {
            0% { opacity: 0; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.1); }
            100% { opacity: 0; transform: scale(1); }
          }
        `}
      </style>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}>
        <div style={{
          fontSize: '36px',
          fontWeight: 'bold',
          color: 'black',
          animation: 'fadeZoom 5s ease-in-out forwards',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: 1.2,
          }}>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', margin: 0 }}>
              Super
              <span style={{ color: '#005499' }}>digi</span>
              <span style={{ color: 'red' }}>tech</span>
            </h1>
            <p style={{ marginTop: '8px', fontSize: '16px', color: '#333' }}>
              Software Solution
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

function App() {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <Router>
      {!loadingDone ? (
        <LoadingScreen onFinish={() => setLoadingDone(true)} />
      ) : (
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <FloatingWhatsApp />
          <BackToTop />
        </div>
      )}
    </Router>
  );
}

export default App;
