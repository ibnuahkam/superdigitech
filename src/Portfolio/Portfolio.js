import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import data from '../data/projectData';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = data.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const styles = {
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      marginTop: '80px',
    },
    heading: {
      textAlign: 'center',
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '30px',
      color: '#1a1a1a',
    },
    grid: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    card: {
      width: '400px',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      overflow: 'hidden',
      cursor: 'pointer',
      backgroundColor: '#fff',
      transition: 'transform 0.2s',
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'contain',
      display: 'block',
    },
    content: {
      padding: '16px',
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '8px',
    },
    desc: {
      fontSize: '14px',
      color: '#555',
    },
    pagination: {
      marginTop: '30px',
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
    },
    pageButton: {
      padding: '8px 14px',
      border: '1px solid #ccc',
      background: '#fff',
      cursor: 'pointer',
      borderRadius: '4px',
    },
    activePage: {
      background: '#007BFF',
      color: '#fff',
    },
  };

  return (
    <>
      <Header />
      <div style={styles.container}>
        <h1 style={styles.heading}>Hasil Website yang Pernah Dibuat oleh Superdigitech</h1>

        <div style={styles.grid}>
          {currentItems.map((item) => (
            <Link to={`/project/${item.slug}`} key={item.id} style={{ textDecoration: 'none' }}>
              <div style={styles.card}>
                <img src={item.images[0]} alt={item.title} style={styles.image} />
                <div style={styles.content}>
                  <div style={styles.title}>{item.title}</div>
                  <div style={styles.desc}>{item.description}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={styles.pagination}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              style={{
                ...styles.pageButton,
                ...(currentPage === i + 1 ? styles.activePage : {}),
              }}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
