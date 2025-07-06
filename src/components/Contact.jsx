// src/components/Contact.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'; // Contoh ikon sosial media

function Contact() {
  return (
    <section id="contact">
      <h2>Kontak</h2>
      <p>Anda dapat menghubungi saya melalui:</p>
      <div className="social-links">
        <a href="https://github.com/username-anda" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://linkedin.com/in/username-anda" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://instagram.com/username-anda" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="mailto:emailanda@contoh.com">
          <FaEnvelope size={30} />
        </a>
        {/* Tambahkan link sosial media lainnya sesuai kebutuhan Anda */}
      </div>
    </section>
  );
}

export default Contact;