import React, { useState } from 'react';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import eo from '../img/eo.jpeg';
import eo2 from '../img/eo2.jpeg';
import eo3 from '../img/eo3.jpeg';
import Slider from 'react-slick';

const data = [
  {
    id: 1,
    title: 'Website Event Organizer',
    images: [eo, eo2, eo3],
    description: 'Penyelenggaraan acara korporat profesional seperti gathering, launching, dan team building.',
    detail: 'Website Event Organizer ini memiliki fitur Schedule Event, my dashboard, create event, serta bisa booking melalui website ini',
  },
];

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [modalContent, setModalContent] = useState(null);

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
      objectFit: 'cover',  // Update this to cover to maintain aspect ratio
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
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    },
    modalContent: {
      background: '#fff',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '800px',  // Larger modal for bigger image
      width: '90%',
    },
    closeBtn: {
      textAlign: 'right',
      cursor: 'pointer',
      fontWeight: 'bold',
      color: '#333',
    },
    modalImage: {
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
      borderRadius: '8px',
      marginBottom: '20px',
    },
    carousel: {
      width: '100%',
    },
  };

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Header />
      <div style={styles.container}>
        <h1 style={styles.heading}>Hasil Website yang Pernah Dibuat oleh Superdigitech</h1>

        <div style={styles.grid}>
          {currentItems.map((item) => (
            <div
              key={item.id}
              style={styles.card}
              onClick={() => setModalContent(item)}
            >
              <img src={item.images[0]} alt={item.title} style={styles.image} />
              <div style={styles.content}>
                <div style={styles.title}>{item.title}</div>
                <div style={styles.desc}>{item.description}</div>
              </div>
            </div>
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

        {/* Modal */}
        {modalContent && (
          <div style={styles.modalOverlay} onClick={() => setModalContent(null)}>
            <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <div style={styles.closeBtn} onClick={() => setModalContent(null)}>
                ✕
              </div>
              {/* Carousel in Modal */}
              <Slider {...carouselSettings} style={styles.carousel}>
                {modalContent.images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={modalContent.title}
                      style={styles.modalImage}
                    />
                  </div>
                ))}
              </Slider>
              <h2>{modalContent.title}</h2>
              <p>{modalContent.detail}</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
