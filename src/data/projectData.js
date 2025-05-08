// src/data/projectData.js
import eo from '../img/eo.jpeg';
import eo2 from '../img/eo2.jpeg';
import eo3 from '../img/eo3.jpeg';
import tagging from '../img/tagging.jpeg';

import adminec from '../img/ec_admin.jpeg';
import ec_1 from '../img/ec_1.jpeg';
import ec_2 from '../img/ec_2.jpeg';
import ec_3 from '../img/ec_3.jpeg';
import ec_profile from '../img/ec_profile.jpeg';
import seller_1 from '../img/seller_1.jpeg';
import seller_2 from '../img/seller_2.jpeg';
import seller_3 from '../img/seller_3.jpeg';

const data = [
    {
      id: 1,
      title: 'Website Event Organizer',
      slug: 'website-event-organizer',
      images: [eo, eo2, eo3],
      description: 'Penyelenggaraan acara korporat profesional seperti gathering, launching, dan team building.',
      detail: 'Website Event Organizer ini memiliki fitur Schedule Event, my dashboard, create event, serta bisa booking melalui website ini',
    },
    {
      id: 2,
      title: 'Mobile apps tagging asset',
      slug: 'mobile-apps-tagging-asset',
      images: [tagging],
      description: 'Memantau pergerakan asset yang di tagging dari satu kota ke kota lain, secara real time, dan dapat di pantau oleh supervisor',
      detail: 'Mobile apps tagging asset ini memiliki fitur Scan QR atau barcode, lihat history, capture evidance',
    },
    {
      id: 3,
      title: 'Website E-commerce',
      slug: 'Website E-commerce',
      images: [adminec,ec_1, ec_2, ec_3, ec_profile, seller_1, seller_2, seller_3],
      description:'Platform e-commerce yang memudahkan pengguna untuk membeli dan menjual berbagai produk secara online',
      detail: '"Platform e-commerce ini dilengkapi dengan berbagai fitur unggulan, termasuk sistem pencarian produk yang canggih, keranjang belanja yang mudah digunakan, serta pilihan metode pembayaran yang aman dan beragam. Pengguna dapat melacak status pesanan secara real-time, melihat riwayat pembelian, serta menerima notifikasi untuk promosi atau diskon terbaru. Selain itu, fitur ulasan dan rating produk memungkinkan konsumen membuat keputusan yang lebih baik saat berbelanja."Jika ada fitur tambahan lainnya yang ingin dimasukkan, misalnya integrasi dengan metode pengiriman atau alat analitik, deskripsi ini bisa disesuaikan lebih lanjut.',
    },
  ];
  
  

export default data;
