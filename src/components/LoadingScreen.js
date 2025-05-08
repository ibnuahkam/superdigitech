// src/components/LoadingScreen.js
import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      onFinish();
    }, 2500); // waktu loading 2.5 detik

    return () => clearTimeout(timeout);
  }, [onFinish]);

  if (!visible) return null;

  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#ffffff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    },
    text: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#007BFF',
      animation: 'fadeZoom 2s ease-in-out forwards',
    },
    keyframes: `
      @keyframes fadeZoom {
        0% { opacity: 0; transform: scale(0.8); }
        50% { opacity: 1; transform: scale(1.1); }
        100% { opacity: 0; transform: scale(1); }
      }
    `,
  };

  return (
    <>
      <style>{styles.keyframes}</style>
      <div style={styles.overlay}>
        <div style={styles.text}>Super<span style={{color:'#005499'}}>digi</span><span style={{color:'red'}}>tech</span></div>
      </div>
    </>
  );
};

export default LoadingScreen;
