// src/components/Hero.jsx
import React from 'react';
// Pastikan path ke foto profil Anda benar
import profilePicture from '../assets/profile.jpg'; // Ganti dengan path ke foto profil Anda

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        {/* Foto Profil */}
        <img src={profilePicture} alt="Foto Profil" className="profile-picture" />
        {/* Nama Anda */}
        <h1>Marko Antonio Barera Sembiring</h1>
        {/* Profesi Anda */}
        <p>Technical Engineering</p>
        {/* Anda bisa menambahkan tombol atau elemen lain di sini */}
        {/* <a href="#contact" className="btn-primary">Hubungi Saya</a> */}
      </div>
    </section>
  );
}

export default Hero;
