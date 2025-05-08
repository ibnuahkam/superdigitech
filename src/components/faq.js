import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Apa itu SuperDigiTech?",
      answer:
        "SuperDigiTech adalah penyedia layanan teknologi informasi yang menawarkan solusi digital seperti sistem ERP, pengembangan web dan aplikasi mobile, Dashboard Bisnis Interaktif.",
    },
    {
      question: "Siapa saja yang bisa menggunakan layanan SuperDigiTech?",
      answer:
        "Layanan SuperDigiTech tersedia untuk berbagai kalangan, mulai dari pelaku bisnis UMKM, perusahaan korporat, instansi pemerintah, hingga individu yang membutuhkan solusi teknologi informasi.",
    },
    {
      question: "Apa saja layanan utama yang tersedia di SuperDigiTech?",
      answer: (
        <ul style={{ paddingLeft: "20px", margin: 0 }}>
          <li>Sistem ERP (Enterprise Resource Planning)</li>
          <li>Web Development</li>
          <li>Mobile Development</li>
          <li>Dashboard Bisnis Interaktif</li>
        </ul>
      ),
    },
    {
      question: "Apakah SuperDigiTech menyediakan layanan kustom sesuai kebutuhan bisnis?",
      answer:
        "Ya, SuperDigiTech menawarkan solusi yang dapat disesuaikan dengan kebutuhan spesifik bisnis Anda. Tim kami akan bekerja sama dengan Anda untuk memahami kebutuhan dan mengembangkan solusi yang tepat.",
    },
    {
      question: "Berapa lama proses pengerjaan proyek di SuperDigiTech?",
      answer:
        "Durasi pengerjaan proyek bervariasi tergantung pada kompleksitas dan skala proyek. Kami akan memberikan estimasi waktu yang jelas setelah melakukan analisis kebutuhan proyek Anda.",
    },
    {
      question: "Apakah SuperDigiTech mendukung layanan pasca implementasi?",
      answer:
        "Tentu saja. SuperDigiTech menyediakan layanan pasca implementasi yang mencakup pemeliharaan sistem, pembaruan, dan dukungan teknis untuk memastikan solusi kami terus berjalan optimal.",
    },
    {
      question: "Apakah SuperDigiTech menerima kerja sama jangka panjang?",
      answer:
        "Ya, kami sangat terbuka untuk kerja sama jangka panjang. Banyak klien kami yang memilih untuk menjalin kemitraan berkelanjutan dengan SuperDigiTech untuk mendukung pertumbuhan bisnis mereka.",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>❓ FAQs (Pertanyaan Umum)</h1>
      <div style={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} style={styles.card}>
            <button onClick={() => toggleFAQ(index)} style={styles.button}>
              <span>{faq.question}</span>
              <span style={styles.icon}>{activeIndex === index ? "−" : "+"}</span>
            </button>
            <div
              style={{
                ...styles.answer,
                maxHeight: activeIndex === index ? "500px" : "0",
                padding: activeIndex === index ? "15px" : "0 15px",
              }}
            >
              {typeof faq.answer === "string" ? (
                <p style={styles.answerText}>{faq.answer}</p>
              ) : (
                faq.answer
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "30px",
    color: "#333",
  },
  faqList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
    transition: "all 0.3s",
  },
  button: {
    width: "100%",
    padding: "15px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#444",
    backgroundColor: "#f7f7f7",
    border: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    textAlign: "left",
  },
  icon: {
    fontSize: "20px",
    color: "#888",
  },
  answer: {
    overflow: "hidden",
    backgroundColor: "#fff",
    transition: "all 0.3s ease",
  },
  answerText: {
    color: "#555",
    margin: 0,
  },
};

export default FAQ;
