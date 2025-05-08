import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import data from '../data/projectData';

const ProjectDetail = () => {
  const { slug } = useParams(); // Mengambil slug dari URL
  const project = data.find(item => item.slug === slug);

  if (!project) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Project not found</div>;
  }

  const styles = {
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      marginTop: '80px',
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '10px',
      textAlign: 'center',
    },
    description: {
      fontSize: '16px',
      color: '#666',
      marginBottom: '30px',
      textAlign: 'center',
    },
    carousel: {
      marginBottom: '30px',
    },
    image: {
      width: '100%',
      height: 'auto',
      maxHeight: '400px',
      objectFit: 'contain',
      borderRadius: '10px',
      margin: '0 auto',
    },
    detail: {
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#333',
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '10px',
    },
  };

  const carouselSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <div style={styles.container}>
        <h1 style={styles.title}>{project.title}</h1>
        <p style={styles.description}>{project.description}</p>

        {/* Carousel for images */}
        <div style={styles.carousel}>
          <Slider {...carouselSettings}>
            {project.images
              .filter(img => !!img)
              .map((img, index) => (
                <div key={index}>
                  <img src={img} alt={`Slide ${index + 1}`} style={styles.image} />
                </div>
              ))}
          </Slider>
        </div>

        <div style={styles.detail}>{project.detail}</div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetail;
