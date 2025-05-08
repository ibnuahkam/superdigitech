// src/data/projectData.js
import eo from '../img/eo.jpeg';
import eo2 from '../img/eo2.jpeg';
import eo3 from '../img/eo3.jpeg';
import tagging from '../img/tagging.jpeg';

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
      description: 'Memantau pergerakan asset yang di tagging dari satu kota ke kota lain.',
      detail: 'Mobile apps tagging asset ini memiliki fitur Scan QR atau barcode, lihat history, capture evidance',
    },
  ];
  
  

export default data;
