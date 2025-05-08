import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      padding: '40px 20px 20px',
      fontFamily: 'Segoe UI, sans-serif',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    section: {
      flex: '1 1 250px',
      margin: '20px 10px',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#ffcc00',
      marginBottom: '10px',
    },
    linkList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    linkItem: {
      marginBottom: '8px',
    },
    link: {
      color: '#ccc',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    },
    linkHover: {
      color: '#fff',
    },
    socialIcons: {
      display: 'flex',
      gap: '10px',
      marginTop: '10px',
    },
    icon: {
      width: '24px',
      height: '24px',
      fill: '#ccc',
      cursor: 'pointer',
      transition: 'fill 0.3s',
    },
    iconHover: {
      fill: '#ffcc00',
    },
    bottom: {
      borderTop: '1px solid #333',
      marginTop: '30px',
      paddingTop: '15px',
      textAlign: 'center',
      fontSize: '14px',
      color: '#888',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <div style={styles.logo}>Superdigitech</div>
          <p>Solusi digital kreatif untuk bisnis masa depan Anda.</p>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <svg style={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-2.9h2v-2.2c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2v1.9h2.2l-.4 2.9h-1.8v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <svg style={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.5.6-2.25.7.81-.5 1.4-1.3 1.7-2.2-.76.46-1.6.8-2.5 1C18.7 4.7 17.6 4 16.3 4c-2.3 0-4.2 2-4.2 4.3 0 .3 0 .6.1.9C8 9 5.5 7.6 3.9 5.5c-.4.6-.6 1.3-.6 2 0 1.5.7 2.8 1.8 3.6-.7 0-1.3-.2-1.8-.5v.1c0 2.1 1.4 3.8 3.3 4.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.2 3 2.2-1.1.9-2.5 1.4-4 1.4H2c1.4.9 3 1.5 4.8 1.5 5.7 0 8.8-4.8 8.8-8.8v-.4c.6-.5 1.3-1.2 1.8-2z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <svg style={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20.5 3h-17C2.7 3 2 3.7 2 4.5v15c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5v-15c0-.8-.7-1.5-1.5-1.5zM8.5 18H6V10h2.5v8zM7.3 8.9C6.5 8.9 6 8.4 6 7.7c0-.6.5-1.1 1.3-1.1s1.3.5 1.3 1.1-.6 1.2-1.3 1.2zM18 18h-2.5v-4c0-1-.4-1.7-1.3-1.7s-1.3.7-1.3 1.7v4H10v-8h2.4v1.1c.3-.5 1-1.2 2.2-1.2 1.6 0 3.4 1.1 3.4 4v4.1z" />
              </svg>
            </a>
          </div>
        </div>

        <div style={styles.section}>
          {/* <h4 style={{ color: '#ffcc00' }}>Navigasi</h4>
          <ul style={styles.linkList}>
            <li style={styles.linkItem}><a style={styles.link} href="/">Beranda</a></li>
            <li style={styles.linkItem}><a style={styles.link} href="/tentang">Tentang Kami</a></li>
            <li style={styles.linkItem}><a style={styles.link} href="/layanan">Layanan</a></li>
            <li style={styles.linkItem}><a style={styles.link} href="/kontak">Kontak</a></li>
          </ul> */}
        </div>

        <div style={styles.section}>
          <h4 style={{ color: '#ffcc00' }}>Kontak</h4>
          <p>Email: info@superdigitech.com</p>
          <p>Telepon: +62 812-3456-7890</p>
          <p>Alamat: Jakarta, Indonesia</p>
        </div>
      </div>

      <div style={styles.bottom}>
        &copy; {new Date().getFullYear()} Superdigitech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
