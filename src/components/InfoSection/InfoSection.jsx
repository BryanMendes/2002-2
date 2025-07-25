import React from 'react';
import './InfoSection.css';
import LazyImage from '../LazyImage/LazyImage';
import { Link } from 'react-router-dom';

// Este componente recebe 'props' para ser reutilizável
function InfoSection({ id, title, imageSrc, imageText, paragraphText, showButton, buttonLink, buttonText }) {
  return (
    <section id={id} className="info-section section-card">
      <h2 className="info-title">{title}</h2>
      <div className="info-image-container">
        <picture>
          <source srcSet={imageSrc.replace('.png', '.webp').replace('.jpg', '.webp')} type="image/webp" />
          <LazyImage src={imageSrc} alt={title} />
        </picture>
        <h3 className="info-image-text">{imageText}</h3>
      </div>
      <p className="info-paragraph">{paragraphText}</p>
      {showButton && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to={buttonLink} className="saiba-mais-button">
            {buttonText || 'SAIBA MAIS'}
          </Link>
        </div>
      )}
    </section>
  );
}

export default InfoSection;