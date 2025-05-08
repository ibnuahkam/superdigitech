import React from 'react';

const Benefit = () => {
  const styles = {
    container: {
      padding: '80px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    heading: {
      textAlign: 'center',
      fontSize: '36px',
      fontWeight: '700',
      marginBottom: '40px',
      color: '#222',
    },
    grid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '24px',
      justifyContent: 'center',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      width: '260px',
      overflow: 'hidden',
      textAlign: 'center',
      transition: 'transform 0.3s ease',
    },
    cardHover: {
      transform: 'scale(1.03)',
    },
    image: {
      width: '80px',
      height: '80px',
      objectFit: 'contain',
      margin: '20px auto 0',
      display: 'block',
    },    
    cardBody: {
      padding: '20px',
    },
    title: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '12px',
      color: '#007BFF',
    },
    description: {
      fontSize: '15px',
      color: '#555',
    },
  };

  const benefits = [
    {
      title: 'Enterprise Resource Planning (ERP)',
      description:
        'Solusi terintegrasi untuk mengotomatisasi proses bisnis utama—seperti keuangan, logistik, dan produksi—guna meningkatkan efisiensi operasional.',
      image: 'https://img.icons8.com/ios-filled/100/000000/workflow.png',
    },
    {
      title: 'Pengembangan Website',
      description:
        'Pembuatan situs web profesional yang cepat, responsif, dan sesuai dengan kebutuhan bisnis digital Anda.',
      image: 'https://img.icons8.com/ios-filled/100/000000/domain.png',
    },
    {
      title: 'Pengembangan Aplikasi Mobile',
      description:
        'Pengembangan aplikasi mobile Android dan iOS yang fungsional, user-friendly, dan siap bersaing di pasar.',
      image: 'https://img.icons8.com/ios-filled/100/000000/smartphone-tablet.png',
    },
    {
      title: 'Dashboard Bisnis Interaktif',
      description:
        'Visualisasi data yang dinamis untuk mendukung pengambilan keputusan bisnis secara real-time dan berbasis data.',
      image: 'https://img.icons8.com/ios-filled/100/000000/combo-chart.png',
    },
  ];
  

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Manfaat Layanan Kami</h1>
      <div style={styles.grid}>
        {benefits.map((benefit) => (
          <div key={benefit.title} style={styles.card}>
            <img src={benefit.image} alt={benefit.title} style={styles.image} />
            <div style={styles.cardBody}>
              <h3 style={styles.title}>{benefit.title}</h3>
              <p style={styles.description}>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefit;
