import React from 'react';
import { Link } from 'react-router-dom';

function Rfmees() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundImage: 'url(/rmfees-back.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: '#F0F0C0', 
      fontSize: '1.2rem',
      textAlign: 'center',
      padding: '40px',
      position: 'relative'
    }}>
      {/* Back button */}
      <Link to="/" style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        width: '100px',
        height: '100px',
        color: '#F0F0C0',
        textDecoration: 'none',
        fontSize: '3rem',
        zIndex: 10,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        ←

      {/* Content */}
      <div style={{
        padding: '40px',
        borderRadius: '10px',
        maxWidth: '800px',
        lineHeight: '1.6'
      }}>
        <h1 style={{fontSize: '3rem', marginBottom: '30px', color: '#F0F0C0'}}>rfmees</h1>
        <p style={{marginBottom: '20px', textAlign: 'justify'}}>
          Rfmees, originario do Bairro dos Pimentas em Guarulhos, tem 23 anos e está cursando História da Arte, ele está interessado em trazer análises e resenhas sobre assuntos diversos desde da arte tradicional até os fenômenos artísticos pós-Internet. Além das críticas de arte, rfmees ainda conta com produções de sua própria autoria que vão de poemas a artes visuais.
        </p>
        
        {/* Next/Previous artist buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: 800, margin: '60px auto 40px auto', padding: '0 20px', zIndex: 10 }}>
          <Link to="/gui-romana" style={{ color: '#F0F0C0', textDecoration: 'none', fontSize: '1rem', textAlign: 'left', flex: 1 }}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0}}>
              <span style={{display: 'block', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.05em'}}>artista</span>
              <span style={{display: 'block', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.05em'}}>anterior</span>
              <span style={{fontSize: '1.5rem', marginTop: '2px'}}>&larr;</span>
            </div>
          </Link>
          <Link to="/ake" style={{ color: '#F0F0C0', textDecoration: 'none', fontSize: '1rem', textAlign: 'right', flex: 1 }}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0}}>
              <span style={{display: 'block', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.05em'}}>próximo</span>
              <span style={{display: 'block', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.05em'}}>artista</span>
              <span style={{fontSize: '1.5rem', marginTop: '2px'}}>&rarr;</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Rfmees;
        <Link to="/gui-romana" style={{ color: '#F0F0C0', textDecoration: 'none', fontSize: '1rem', textAlign: 'left', flex: 1 }}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0}}>
            <span style={{display: 'block', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.05em'}}>artista</span>
            <span style={{display: 'block', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.05em'}}>anterior</span>
            <span style={{fontSize: '1.5rem', marginTop: '2px'}}>&larr;</span>
          </div>
        </Link>
        <Link to="/ake" style={{ color: '#F0F0C0', textDecoration: 'none', fontSize: '1rem', textAlign: 'right', flex: 1 }}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0}}>
            <span style={{display: 'block', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.05em'}}>próximo</span>
            <span style={{display: 'block', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.05em'}}>artista</span>
            <span style={{fontSize: '1.5rem', marginTop: '2px'}}>&rarr;</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Rfmees; 