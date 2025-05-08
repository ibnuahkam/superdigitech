import React from 'react';

const FloatingWhatsApp = () => {
  const phoneNumber = '081281186734'; // tanpa spasi atau tanda
  const whatsappUrl = `https://wa.me/62${phoneNumber.replace(/^0/, '')}`;

  const styles = {
    container: {
      position: 'fixed',
      bottom: '20px',
      left: '20px', // Ubah dari right ke left
      zIndex: 9999,
    },
    button: {
      backgroundColor: '#25D366',
      borderRadius: '50%',
      width: '60px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      cursor: 'pointer',
    },
    icon: {
      width: '32px',
      height: '32px',
    },
  };

  return (
    <div style={styles.container}>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={styles.button}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="Chat via WhatsApp"
          style={styles.icon}
        />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
