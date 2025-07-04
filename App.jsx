// src/App.jsx
import React from 'react';
import './App.css'; // Pastikan App.css diimpor HANYA DI SINI

// --- Impor SEMUA komponen yang Anda miliki di sini ---
// Sesuaikan path impor jika struktur folder Anda berbeda

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';     // Impor komponen Skills yang baru
import Activities from './components/Activities';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
// import Footer from './components/Footer';


function App() {
  return (
    <>
      {/* --- Render (Tampilkan) SEMUA komponen Anda di sini --- */}

      <Navbar />

      <Hero />

      <About />

      <Skills /> {/* Tempatkan komponen Skills di sini, misalnya setelah About */}

      <Activities />

      <Hobbies />

      <Contact />

      {/* <Footer /> */}
    </>
  );
}

export default App;
