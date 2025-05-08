import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import logo from '../img/superdigitech.png';

const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Dapatkan lokasi saat ini

  // Inline styles
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
      padding: '0 20px',
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
      marginLeft: 'auto',
    },
    navLink: {
      color: '#555',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: 'bold',
      transition: 'color 0.3s ease',
    },
    navLinkActive: {
      color: '#007BFF', // Warna link aktif
    },
    bmMenu: {
      background: 'white',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmItem: {
      display: 'block',
      padding: '0.75em',
      color: '#333',
      textDecoration: 'none',
      fontSize: '18px',
      fontWeight: 'bold',
    },
    bmItemActive: {
      color: '#007BFF', // Warna item aktif pada burger menu
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
    },
    burgerButton: {
      position: 'fixed',
      width: '24px',
      height: '20px',
      right: '20px',
      top: '39px',
      display: 'none',
    },
    burgerBars: {
      background: '#333',
      height: '3px',
    },
    burgerBarsHover: {
      background: '#555',
    },
    crossButton: {
      height: '24px',
      width: '24px',
    },
    cross: {
      background: '#333',
    },
  };

  // Show burger menu only on mobile
  if (window.innerWidth <= 768) {
    styles.burgerButton.display = 'block';
    styles.nav.display = 'none';
  }

  const handleStateChange = (state) => {
    setIsOpen(state.isOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logo}>
        <a href="/">
          <img src={logo} alt="Logo" style={styles.logoImg} />
        </a>
          <h1 style={styles.title}><span style={{color:'#005499'}}>Software</span> <span style={{color:'red'}}>Solution</span></h1>
        </div>

        {/* Desktop Navigation */}
        <nav style={styles.nav}>
          {['Home', 'Technology', 'Portfolio'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              style={{
                ...styles.navLink,
                ...(isActive(item === 'Home' ? '/' : `/${item.toLowerCase()}`) && styles.navLinkActive),
              }}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Burger Menu for Mobile */}
        <Menu
          right
          isOpen={isOpen}
          onStateChange={handleStateChange}
          styles={{
            bmMenu: styles.bmMenu,
            bmItem: styles.bmItem,
            bmOverlay: styles.bmOverlay,
            bmBurgerButton: styles.burgerButton,
            bmBurgerBars: styles.burgerBars,
            bmBurgerBarsHover: styles.burgerBarsHover,
            bmCrossButton: styles.crossButton,
            bmCross: styles.cross,
          }}
        >
          {['Home', 'Technology', 'Portfolio'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              style={{
                ...styles.bmItem,
                ...(isActive(item === 'Home' ? '/' : `/${item.toLowerCase()}`) && styles.bmItemActive),
              }}
            >
              {item}
            </Link>
          ))}
        </Menu>
      </div>
    </header>
  );
};

export default HeaderMenu;