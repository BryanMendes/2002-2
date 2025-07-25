// src/components/Hero/Hero.jsx
import React, { useEffect, useRef } from 'react';
import './Hero.css';

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Otimizar carregamento do vídeo
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  return (
    <section className="hero-container">
      {/* O vídeo de fundo */}
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline
        className="hero-video"
        preload="auto"
      >
        <source src="/video-1.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* O conteúdo que fica sobre o vídeo */}
      <div className="hero-content">
        <img src="/logo + saiba mais.png" alt="Logo 2002" className="hero-logo" />
      </div>
    </section>
  );
}

export default Hero;