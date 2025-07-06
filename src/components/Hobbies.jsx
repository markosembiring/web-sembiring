// src/components/Hobbies.jsx
import React from 'react';
// Pastikan Anda memiliki gambar-gambar ini di src/assets/hobbies/
import hobby1 from '../assets/hobbies/hobby1.jpg'; // Contoh: gambar hobi 1
import hobby2 from '../assets/hobbies/hobby2.jpg'; // Contoh: gambar hobi 2
import hobby3 from '../assets/hobbies/hobby3.jpg'; // Contoh: gambar hobi 3

const hobbiesData = [
  {
    title: 'Hiking', // Diubah: Hobi 1 menjadi Hiking
    description: 'Pendakian gunung Sibayak 2181 mdpl', // Diubah: Deskripsi Hobi 1
    image: hobby1,
  },
  {
    title: 'Renang', // Diubah: Hobi 2 menjadi Renang
    description: 'Kunjungan renang di kolam Hotel The Hill Resort Sibolangit', // Diubah: Deskripsi Hobi 2
    image: hobby2,
  },
  {
    title: 'Traveling', // Diubah: Hobi 3 menjadi Traveling
    description: 'Liburan ke pasir putih Danau Toba', // Diubah: Deskripsi Hobi 3
    image: hobby3,
  },
  // Tambahkan hobi Anda lainnya di sini
];

function Hobbies() {
  return (
    <section id="hobbies">
      <h2>Hobi & Minat</h2>
      <ul className="activity-grid">
        {hobbiesData.map((hobby, index) => (
          <li key={index} className="activity-card">
            <img src={hobby.image} alt={hobby.title} className="hobby-image" />
            <h3>{hobby.title}</h3>
            <p>{hobby.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Hobbies;
