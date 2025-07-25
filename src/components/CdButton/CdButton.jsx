import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { BREAKPOINTS } from '../../utils/constants';
import './CdButton.css';

function CdButton() {
  const isDesktop = useMediaQuery(BREAKPOINTS.desktop);

  // Não renderizar nada em desktop, pois o CD já está no header
  if (isDesktop) return null;

  return (
    <div className="cd-button-fixed">
      <Link to="/puro-som" className="cd-button-link">
        <img src="/gif-1.gif" alt="Ícone de CD animado" />
      </Link>
    </div>
  );
}

export default CdButton;