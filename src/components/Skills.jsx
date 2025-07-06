// src/components/Skills.jsx
import React from 'react';

// Anda bisa mengganti URL placeholder ini dengan path ke logo lokal Anda
// Misalnya: import jsLogo from '../assets/logos/javascript.png';
// Pastikan Anda membuat folder 'logos' di dalam 'src/assets/' dan menempatkan logo Anda di sana.
const skillsData = [
  {
    name: 'JavaScript',
    description: 'Bahasa pemrograman inti untuk pengembangan web interaktif.',
    logo: 'https://placehold.co/80x80/F7DF1E/000000?text=JS', // Placeholder JS Logo
  },
  {
    name: 'NetBeans',
    description: 'Lingkungan pengembangan terintegrasi (IDE) untuk Java dan bahasa lainnya.',
    logo: 'https://placehold.co/80x80/007396/FFFFFF?text=NB', // Placeholder NetBeans Logo
  },
  {
    name: 'HTML5',
    description: 'Bahasa markup standar untuk membuat struktur halaman web.',
    logo: 'https://placehold.co/80x80/E34F26/FFFFFF?text=HTML', // Placeholder HTML5 Logo
  },
  {
    name: 'CSS3',
    description: 'Bahasa stylesheet untuk mendesain tampilan halaman web.',
    logo: 'https://placehold.co/80x80/1572B6/FFFFFF?text=CSS', // Placeholder CSS3 Logo
  },
  {
    name: 'React',
    description: 'Pustaka JavaScript untuk membangun antarmuka pengguna yang dinamis.',
    logo: 'https://placehold.co/80x80/61DAFB/000000?text=React', // Placeholder React Logo
  },
  {
    name: 'Git & GitHub',
    description: 'Sistem kontrol versi untuk melacak perubahan kode dan kolaborasi.',
    logo: 'https://placehold.co/80x80/F05032/FFFFFF?text=Git', // Placeholder Git Logo
  },
  // Tambahkan skill Anda lainnya di sini
  /*
  {
    name: 'Nama Skill Anda',
    description: 'Keterangan singkat tentang skill ini.',
    logo: 'path/to/logo-anda.png', // Pastikan Anda mengimpor atau menggunakan URL yang benar
  },
  */
];

function Skills() {
  return (
    <section id="skills"> {/* Memberikan ID unik untuk bagian ini */}
      <h2>Keahlian Saya</h2>
      <ul className="skill-grid"> {/* Menggunakan grid untuk tata letak skill */}
        {skillsData.map((skill, index) => (
          <li key={index} className="skill-card"> {/* Kartu untuk setiap skill */}
            <img src={skill.logo} alt={`${skill.name} Logo`} className="skill-logo" />
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
