import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/superdigitech.png';

const HeaderMenu = () => {
  const styles = {
    header: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'white',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '16px',
        zIndex: 999,
      },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    logoImg: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
    },
    nav: {
      display: 'flex',
      gap: '24px',
    },
    navLink: {
      color: '#555',
      textDecoration: 'none',
      fontSize: '16px',
      transition: 'color 0.3s ease',
      fontWeight: 'bold',
    },
    navLinkHover: {
      color: '#007BFF',
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logo}>
        <img src={logo} alt="Logo" style={styles.logoImg} />
          <h1 style={styles.title}>Software</h1>
        </div>
        <nav style={styles.nav}>
          {['Home', 'Technology', 'Portfolio'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              style={styles.navLink}
              onMouseOver={(e) => e.target.style.color = styles.navLinkHover.color}
              onMouseOut={(e) => e.target.style.color = styles.navLink.color}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default HeaderMenu;