import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage/LazyImage';

function GuiRomana() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      position: 'relative',
      color: '#F0F0C0', 
      fontSize: '1.2rem',
      textAlign: 'center',
      padding: '40px',
      overflow: 'hidden',
      display: 'block'
    }}>
      {/* Imagem de fundo invertida */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        filter: 'brightness(0.7)',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}>
        <LazyImage src="/gui-back.png" alt="Fundo Gui Romana" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)' }} />
      </div>
      {/* Back button */}

      {/* Content */}
      <div style={{
        padding: '40px',
        borderRadius: '10px',
        maxWidth: '800px',
        lineHeight: '1.6',
        position: 'relative',
        zIndex: 1,
        margin: '0 auto',
        background: 'none',
        textAlign: 'center'
      }}>
        <h1 style={{fontSize: '3rem', marginBottom: '30px', color: '#F0F0C0'}}>gui romana</h1>
        <p style={{marginBottom: '20px', textAlign: 'justify'}}>
          Guilherme Romana, é um artista multi-instrumentista de 23 anos da zona leste de São Paulo, em Itaquera, e começou sua história na música em meados de 2013, apenas com um violão e suas ambições em mente, e hoje vai se integrando ao mundo do audiovisual cada vez mais.
        </p>
        <p style={{marginBottom: '20px', textAlign: 'justify'}}>
          Atualmente é Arte-Educador no CCBB de São Paulo, além de músico com várias apresentações em sua recente e promissora carreira, tocando com artistas como: Whitney Marjorie, estranhos costumes, Peu entre outros.
        </p>
      </div>

      {/* Next/Previous artist buttons */}
      <section style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '48px', maxWidth: '100vw', margin: '48px auto 0 auto', padding: '0 16px' }}>
        <Link to="/rfmees" style={{ color: '#F0F0C0', textDecoration: 'none', fontSize: '1rem', textAlign: 'center', minWidth: 160 }}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0}}>
            <span style={{display: 'block', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.05em'}}>artista</span>
            <span style={{display: 'block', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.05em'}}>anterior</span>
            <span style={{fontSize: '1.5rem', marginTop: '2px'}}>&larr;</span>
          </div>
        </Link>
        <Link to="/ake" style={{ color: '#F0F0C0', textDecoration: 'none', fontSize: '1rem', textAlign: 'center', minWidth: 160 }}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0}}>
            <span style={{display: 'block', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.05em'}}>próximo</span>
            <span style={{display: 'block', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.05em'}}>artista</span>
            <span style={{fontSize: '1.5rem', marginTop: '2px'}}>&rarr;</span>
          </div>
        </Link>
      </section>
    </div>
  );
}

export default GuiRomana; 
