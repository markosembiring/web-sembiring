// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} [Nama Anda]. All rights reserved.</p> {/* Ganti dengan nama Anda */}
    </footer>
  );
}

export default Footer;