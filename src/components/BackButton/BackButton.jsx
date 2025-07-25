import React from 'react';
import './BackButton.css';

function BackButton({ onClick }) {
  // Se não for fornecido um onClick, usamos window.history.back() como padrão
  const handleClick = onClick || (() => window.history.back());

  return (
    <button 
      onClick={handleClick} 
      className="back-button"
      aria-label="Voltar"
    >
      ←
    </button>
  );
}

export default BackButton;