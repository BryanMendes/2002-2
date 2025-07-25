// Em: src/components/Footer/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LINKS } from '../../utils/constants';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      {/* O logo agora está sozinho no topo */}
      <div className="footer-logo">
        2002.
      </div>
      
      {/* As colunas estão agrupadas no seu próprio container */}
      <div className="footer-columns-container">
        <div className="footer-column">
          <h5>ALGUMA AJUDA?</h5>
          <ul>
            {FOOTER_LINKS.help.map((link, index) => (
              <li key={index}>
                {link.disabled ? (
                  <span style={{color: '#F0F0F0', cursor: 'default'}}>{link.label}</span>
                ) : (
                  <Link to={link.path}>{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h5>COMECE POR AQUI</h5>
          <ul>
            {FOOTER_LINKS.start.map((link, index) => (
              <li key={index}>
                <Link to={link.hash ? { pathname: link.path, hash: link.hash } : link.path}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h5>REDES SOCIAIS</h5>
          <ul>
            {FOOTER_LINKS.social.map((link, index) => (
              <li key={index}>
                {link.external ? (
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.href}>{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;