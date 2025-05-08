import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  // Cek scroll posisi
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const styles = {
    button: {
      position: 'fixed',
      bottom: '80px',
      right: '20px',
      width: '45px',
      height: '45px',
      backgroundColor: '#333',
      color: '#fff',
      border: 'none',
      borderRadius: '50%',
      textAlign: 'center',
      lineHeight: '45px',
      fontSize: '22px',
      cursor: 'pointer',
      zIndex: 9999,
      display: visible ? 'block' : 'none',
      boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    }
  };

  return (
    <button onClick={scrollToTop} style={styles.button} title="Back to top">
      ↑
    </button>
  );
};

export default BackToTop;
