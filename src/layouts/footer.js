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
    lokasi: {
      color: '#ffcc00',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <div style={styles.logo}>Superdigitech</div>
          <p>Solusi digital kreatif untuk bisnis masa depan Anda.</p>
          <a style={styles.lokasi} href="https://www.google.com/maps/place/Mugi+Griya,+Jl.+Letjen+M.T.+Haryono,+RT.11%2FRW.5,+Tebet+Bar.,+Kec.+Tebet,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12810/@-6.2427272,106.8462756,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f3bbeced094b:0xf7b1f031a924c3d!8m2!3d-6.2427272!4d106.8488505!16s%2Fg%2F11b6_h6bbb?entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoASAFQAw%3D%3D" target="_blank">Lokasi</a>
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
          <p>Email: sales@superdigitech.com</p>
          <p>Telepon: +62 812-8118-6734</p>
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
