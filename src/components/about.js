import React from 'react';
import logo from '../img/superdigitech.png';// Gantilah ini dengan path gambar yang sesuai

export default function About() {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '60px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    imageContainer: {
      flex: 1,
      paddingRight: '20px',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '50%',
    },
    content: {
      flex: 2,
      textAlign: 'left',
      paddingLeft: '20px',
    },
    heading: {
      fontSize: '36px',
      fontWeight: '700',
      marginBottom: '20px',
      color: '#222',
    },
    paragraph: {
      fontSize: '18px',
      color: '#555',
      lineHeight: '1.6',
      marginBottom: '20px',
    },
    servicesList: {
      listStyleType: 'none',
      padding: '0',
    },
    serviceItem: {
      fontSize: '16px',
      color: '#007BFF',
      marginBottom: '10px',
      fontWeight: 'bold',
    },
  };

  return (
    <section style={{ backgroundColor: '#fafafa', padding: '60px 20px' }}>
      <div style={styles.container}>
        {/* Left side: Image */}
        <div style={styles.imageContainer}>
          <img src={logo} alt="Superdigitech" style={styles.image} />
        </div>

        {/* Right side: About Content */}
        <div style={styles.content}>
          <h1 style={styles.heading}>Tentang Super<span style={{color:'#005499'}}>digi</span><span style={{color:'red'}}>tech</span></h1>
          <p style={styles.paragraph}>
            Superdigitech adalah sebuah perusahaan yang berfokus pada integrasi teknologi dan solusi digital untuk 
            mengatasi tantangan operasional serta membantu mencapai tujuan bisnis klien kami. Kami hadir sebagai 
            solusi digital yang simple, adaptif, dan efisien, yang dirancang untuk memenuhi kebutuhan dunia bisnis yang 
            terus berkembang dan bergerak menuju era digital.
          </p>
          <p style={styles.paragraph}>
            Superdigitech memberikan layanan di 4 bidang utama, yakni:
          </p>
          <ul style={styles.servicesList}>
            <li style={styles.serviceItem}>1. ERP</li>
            <li style={styles.serviceItem}>2. Web Development</li>
            <li style={styles.serviceItem}>3. Mobile Development</li>
            <li style={styles.serviceItem}>4. Dashboard Bisnis Interaktif</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
