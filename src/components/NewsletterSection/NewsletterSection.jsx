import React from 'react';
import { Link } from 'react-router-dom';
import './NewsletterSection.css';

function NewsletterSection() {
  return (
    <section className="newsletter-section">
      <h4>QUER SABER ANTES DE TODO MUNDO?</h4>
      <p>ASSINE NOSSA NEWSLETTER</p>
      <div className="newsletter-btn-wrapper">
        <Link to="/newsletter" className="newsletter-saiba-btn">SAIBA MAIS</Link>
      </div>
    </section>
  );
}

export default NewsletterSection;