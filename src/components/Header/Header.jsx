import React, { useState } from 'react';
import ActionButton from '../ActionButton/ActionButton';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { BREAKPOINTS, NAV_ITEMS } from '../../utils/constants';
import './Header.css';

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const isDesktop = useMediaQuery(BREAKPOINTS.desktop);

  const fecharMenu = (e) => {
    if (e) e.preventDefault();
    setMenuAberto(false);
  };

  const handleLinkClick = () => {
    setMenuAberto(false);
  };

  // A lógica de scroll foi removida. A classe agora é mais simples.
  const headerClasses = `header-container ${menuAberto ? 'aberto' : 'fechado'}`;

  return (
    <header className={headerClasses}>
      <div className="header-fechado-content">
        <div className="logo-cd-group">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="header-logo"></div>
          </Link>
          {isDesktop && (
            <Link to="/puro-som" className="cd-button">
              <img src="/gif-1.gif" alt="Ícone de CD animado" />
            </Link>
          )}
        </div>
        <div className="controles">
          {!isDesktop && (
            <>
              <Link to="/puro-som" className="cd-button">
                <img src="/gif-1.gif" alt="Ícone de CD animado" />
              </Link>
              <div className="menu-hamburguer" onClick={() => setMenuAberto(true)}>
                <div className="linha"></div>
                <div className="linha"></div>
                <div className="linha"></div>
              </div>
            </>
          )}
        </div>
        {isDesktop && (
          <nav className="navbar-desktop">
            <ul>
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
              <li className="action-item">
                <ActionButton />
              </li>
            </ul>
          </nav>
        )}
      </div>
      {!isDesktop && (
        <div className="header-aberto-content" style={{ display: menuAberto ? 'block' : 'none' }}>
          <nav className="navbar-aberta">
            <ul>
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                  <Link to={item.path} onClick={handleLinkClick}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="action-item">
                <ActionButton onClick={handleLinkClick} />
              </li>
              <li className="close-item">
                <button className="close-button" onClick={fecharMenu}></button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;