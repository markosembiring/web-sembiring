// src/components/Activities.jsx
import React from 'react';
// Pastikan Anda memiliki gambar-gambar ini di src/assets/activities/
import activity1 from '../assets/activities/kegiatan1.jpg'; // Ganti dengan path gambar kegiatan Anda
import activity2 from '../assets/activities/kegiatan2.jpg';
import activity3 from '../assets/activities/kegiatan3.jpg';

const activitiesData = [
  {
    title: 'Pemasangan Instalasi IB Wifi', // Judul baru
    description: 'Pemasangan instalasi wifi di perumahan Plaza Residence saat magang', // Deskripsi baru
    image: activity1,
  },
  {
    title: 'Rakit PC dari Hardware Bekas', // Judul baru
    description: 'Perakitan PC memakai suku cadang Hardware bekas saat sekolah', // Deskripsi baru
    image: activity2,
  },
  {
    title: 'Penginstalan Windows 10 pada PC', // Judul baru
    description: 'Melakukan update Windows 10 pada PC yang masih menggunakan Windows 7', // Deskripsi baru
    image: activity3,
  },
  // Tambahkan kegiatan Anda lainnya
];

function Activities() {
  return (
    <section id="activities">
      <h2>Dokumentasi Kegiatan</h2>
      <ul className="activity-grid">
        {activitiesData.map((activity, index) => (
          <li key={index} className="activity-card">
            <img src={activity.image} alt={activity.title} className="activity-image" />
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Activities;
