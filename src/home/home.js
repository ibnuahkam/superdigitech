import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layouts/header';
import Benefits from '../components/benefits';
import Services from '../components/services';
import About from '../components/about';

const Home = () => {
  const styles = {
    hero: {
      padding: '80px 20px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #f0f4ff, #ffffff)',
    },
    title: {
      fontSize: '48px',
      fontWeight: '700',
      color: '#1a1a1a',
      marginBottom: '20px',
    },
    subtitle: {
      fontSize: '20px',
      color: '#555',
      maxWidth: '700px',
      margin: '0 auto 30px',
    },
    buttonGroup: {
      display: 'flex',
      justifyContent: 'center',
      gap: '16px',
      flexWrap: 'wrap',
    },
    button: {
      padding: '14px 28px',
      fontSize: '16px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    primary: {
      backgroundColor: '#007BFF',
      color: '#fff',
    },
    secondary: {
      backgroundColor: '#f0f0f0',
      color: '#333',
    },
    section: {
      padding: '60px 20px',
      textAlign: 'center',
      backgroundColor: '#ffffff',
    },
    serviceTitle: {
      fontSize: '32px',
      marginBottom: '30px',
      color: '#222',
    },
    services: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '24px',
    },
    serviceBox: {
      backgroundColor: '#f9f9f9',
      padding: '24px',
      borderRadius: '8px',
      width: '250px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    },
  };

  return (
    <>
    <Header/>
      <section style={styles.hero}>
        <h1 style={styles.title}>Selamat Datang di Superdigitech</h1>
        <p style={styles.subtitle}>
          Siap Mengubah Bisnis/Organisasimu ke Era Digital? Kami bantu dengan ERP, Website, Mobile Apps, Dashboard, Desain, dan lainnya.
        </p>
        <div style={styles.buttonGroup}>
          <Link to="/portfolio">
            <button style={{ ...styles.button, ...styles.secondary }}>Lihat Portofolio</button>
          </Link>
          <Link to="/contact">
            <button style={{ ...styles.button, ...styles.primary }}>Konsultasi Gratis</button>
          </Link>
        </div>
      </section>
      <Benefits/>
      <Services/>
      <About/>
    </>
  );
};

export default Home;
