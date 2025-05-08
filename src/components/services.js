import React from 'react';

export default function Services() {
  const styles = {
    section: {
      padding: '60px 20px',
      textAlign: 'center',
      backgroundColor: '#ffffff',
    },
    serviceTitle: {
      fontSize: '32px',
      marginBottom: '30px',
      color: '#222',
      fontWeight: '700',
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
      transition: 'transform 0.3s ease',
    },
    serviceBoxHover: {
      transform: 'scale(1.05)',
    },
    serviceImage: {
      width: '80px',
      height: '80px',
      objectFit: 'contain',
      margin: '0 auto 15px',
      display: 'block',
      borderRadius: '50%',
      backgroundColor: '#f5f5f5',
      padding: '12px',
    },
    serviceTitleText: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#007BFF',
      marginBottom: '12px',
    },
    serviceDescription: {
      fontSize: '14px',
      color: '#555',
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.serviceTitle}>Jasa Yang Ditawarkan</h2>
      <div style={styles.services}>
        {[
          {
            title: 'Enterprise Resource Planning (ERP)',
            description: 'Solusi terintegrasi untuk mengotomatisasi proses bisnis utama—seperti keuangan, logistik, dan produksi—guna meningkatkan efisiensi operasional.',
            image: 'https://img.icons8.com/ios-filled/100/000000/workflow.png',
          },
          {
            title: 'Pengembangan Website',
            description: 'Pembuatan situs web profesional yang cepat, responsif, dan sesuai dengan kebutuhan bisnis digital Anda.',
            image: 'https://img.icons8.com/ios-filled/100/000000/domain.png',
          },
          {
            title: 'Pengembangan Aplikasi Mobile',
            description: 'Pengembangan aplikasi mobile Android dan iOS yang fungsional, user-friendly, dan siap bersaing di pasar.',
            image: 'https://img.icons8.com/ios-filled/100/000000/smartphone-tablet.png',
          },
          {
            title: 'Dashboard Bisnis Interaktif',
            description: 'Visualisasi data yang dinamis untuk mendukung pengambilan keputusan bisnis secara real-time dan berbasis data.',
            image: 'https://img.icons8.com/ios-filled/100/000000/combo-chart.png',
          },
        ].map((service) => (
          <div key={service.title} style={styles.serviceBox}>
            <img src={service.image} alt={service.title} style={styles.serviceImage} />
            <h3 style={styles.serviceTitleText}>{service.title}</h3>
            <p style={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
