import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage/LazyImage';

function DoisMilEDois() {
  return (
    <div style={{ minHeight: '100vh', background: '#1E392A', color: '#F0F0C0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', textAlign: 'center', position: 'relative', padding: '40px', paddingTop: '100px' }}>
      {/* Botão de voltar */}
      <Link to="/" style={{
        position: 'absolute',
        top: '80px',
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
  
      {/* Título 2002. */}
      {/* AQUI A LOGO FOI REDIMENSIONADA */}
      <img
        src="/logo + saiba mais.png"
        alt="logo 2002"
        style={{ width: '300px', height: 'auto', marginBottom: '20px' }}
      />
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        marginBottom: '40px',
        lineHeight: 1.6,
        color: '#F0F0C0',
        fontSize: '1.2rem',
        textAlign: 'justify',
        fontWeight: 500
      }}>
        <p style={{marginBottom: '20px'}}>
          A nova plataforma de arte independente!
        </p>
        <p style={{marginBottom: '20px'}}>
          Criada e desenvolvida em 2025 por três artistas pretos de São Paulo, a 2002 é uma enorme plataforma que estimula e aprecia a arte independente de suas mais variadas formas. A ideia é simples e complexa ao mesmo tempo, assim como produzir arte e trampar CLT ao mesmo tempo.
        </p>
        <p style={{marginBottom: '20px'}}>
          A 2002 procura ajudar artistas com financiamento coletivo para projetos independentes que queiram trabalhar conosco. A capitalização encima desse trabalho será acordado entre ambas as partes fazendo com que a cena de artistas independente brasileira cresça com todos nós. ESTAMOS AQUI PELA ARTE.
        </p>
        <p style={{marginBottom: '20px'}}>
          Somos também um site estilo plataforma que está reunindo arte visual, literatura, jornalismo, música, podcast, moda, exposições online, além de contar com a loja oficial 2002 e outras marcas. Tudo isso contribui para conexões, amizades, inspirações e também profissionalização do processo artístico independente. ARTE NÃO É HOBBIE.
        </p>
      </div>
      {/* Botões de navegação */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: 600, margin: '60px auto 40px auto', gap: '16px' }}>
        <Link to="/bianca" style={{ color: '#F0F0C0', textDecoration: 'none', fontSize: '1rem', textAlign: 'center', flex: 1 }}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0'}}>
            <span style={{display: 'block', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.05em'}}>artista</span>
            <span style={{display: 'block', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.05em'}}>anterior</span>
            <span style={{fontSize: '1.5rem', marginTop: '2px'}}>&larr;</span>
          </div>
        </Link>
        <Link to="/renata" style={{ color: '#F0F0C0', textDecoration: 'none', fontSize: '1rem', textAlign: 'center', flex: 1 }}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0'}}>
          <span style={{display: 'block', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.05em'}}>próximo</span>
          <span style={{display: 'block', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.05em'}}>artista</span>
          <span style={{fontSize: '1.5rem', marginTop: '2px'}}>&rarr;</span>
        </div>
      </Link>
        </div>
    </div>
  );
}

export default DoisMilEDois;