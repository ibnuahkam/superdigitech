import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layouts/header';
import Benefits from '../components/benefits';
import Services from '../components/services';
import About from '../components/about';
import FAQ from '../components/faq';
import Footer from '../layouts/footer';

const Home = () => {
  const [animate, setAnimate] = useState(false);
  const [titleAnimate, setTitleAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300); // Delay sedikit sebelum animasi dimulai
    const titleTimer = setTimeout(() => {
      setTitleAnimate(true);
    }, 500); // Judul muncul sedikit lebih lambat
    return () => {
      clearTimeout(timer);
      clearTimeout(titleTimer);
    };
  }, []);

  const styles = {
    hero: {
      padding: '80px 20px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #f0f4ff, #ffffff)',
      opacity: animate ? 1 : 0,
      transform: animate ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 1s ease',
    },
    title: {
      fontSize: '48px',
      fontWeight: '700',
      color: '#1a1a1a',
      marginBottom: '20px',
      opacity: titleAnimate ? 1 : 0,
      transform: titleAnimate ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 1s ease',
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
      opacity: animate ? 1 : 0,
      transform: animate ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 1s ease',
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
      <Header />
      <section style={styles.hero}>
        <h1 style={styles.title}>Selamat Datang di Super<span style={{color:'#005499'}}>digi</span><span style={{color:'red'}}>tech</span></h1>
        <p style={styles.subtitle}>
          Siap Mengubah Bisnis/Organisasimu ke Era Digital? Kami bantu dengan ERP, Website, Mobile Apps, Dashboard dan lainnya.
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
      <section style={styles.section}>
        <Benefits />
      </section>
      <section style={styles.section}>
        <Services />
      </section>
      <section style={styles.section}>
        <About />
      </section>
      <section style={styles.section}>
        <FAQ />
      </section>
      <Footer />
    </>
  );
};

export default Home;
