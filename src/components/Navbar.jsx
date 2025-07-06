// src/components/Navbar.jsx
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Bagian Brand/Nama Anda - Pastikan "Nama Anda" ada di sini */}
      <a href="#home" className="navbar-brand">
        Marko Antonio Barera Sembiring {/* Ganti dengan nama Anda yang sebenarnya */}
      </a>

      {/* Bagian Tautan Navigasi */}
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Tentang Saya</a></li>
        <li><a href="#skills">Skill</a></li> {/* Sesuaikan ID jika berbeda */}
        <li><a href="#contact">Kontak</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
