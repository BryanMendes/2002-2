import React, { useState } from 'react';

function ApoiaSe() {
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false); // novo estado para feedback
  const email = 'platfrm.2002@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div style={{ minHeight: '100vh', background: '#1E392A', color: '#F0F0C0', position: 'relative', padding: '40px 20px', paddingTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Seta de voltar */}
      <Link to="/" style={{ position: 'absolute', top: '48px', left: '32px', width: '120px', height: '120px', color: '#F0F0C0', textDecoration: 'none', fontSize: '4rem', fontWeight: 900, zIndex: 10, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>←</Link>
      <h1 style={{ fontSize: '3rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '32px' }}>Apoia-se</h1>
      <p style={{ maxWidth: 600, fontSize: '1.2rem', textAlign: 'center', lineHeight: 1.5 }}>
        Como uma plataforma independente e agregadora, também precisamos de investimentos e ajuda financeira para conseguir entregar o máximo que a arte pode construir. Por isso contamos com uma aba Apoia-se para você que quiser contribuir com o nosso projeto de maneira rápida e fundamental.<br /><br />
        <span
          style={{ color: '#F0F0C0', fontWeight: 400, textDecoration: 'none', cursor: 'pointer' }}
          onClick={() => setModalOpen(true)}
        >
          Clique para saber mais.
        </span>
        <br /><br />
        Pra que você estará contribuindo?<br /><br />
        Esse dinheiro investido será revertido em pagamentos à artistas, fotógrafos, designers, produção de futuros eventos da plataforma, no podcast Puro Som, produção da nossa loja oficial 2002, DJ’s, lançamentos musicais e de audiovisual como um todo. Portanto, você estará contribuindo com todo cenário de arte independente brasileira, bem como com seus representantes.
      </p>
      {modalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000
        }}>
          <div style={{
            background: '#1E392A',
            color: '#F0F0C0',
            padding: '32px 24px',
            borderRadius: '12px',
            maxWidth: 400,
            textAlign: 'center',
            boxShadow: '0 4px 24px rgba(0,0,0,0.18)'
          }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '18px', color: '#F0F0C0' }}>Como funciona o Apoia-se?</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '24px' }}>
              Você pode contribuir com o valor que desejar. Todo apoio é fundamental para mantermos a 2002 viva e expandindo a arte independente no Brasil!
            </p>
            <img src="/qrcode.jpeg" alt="QR Code Apoia-se" style={{ width: '180px', height: '180px', margin: '0 auto 12px auto', display: 'block', borderRadius: '8px', background: '#fff' }} />
            <div style={{ fontSize: '1.1rem', color: '#F0F0C0', fontWeight: 700, marginBottom: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              chave: {email}
              <button
                onClick={handleCopy}
                style={{
                  background: '#F0F0C0',
                  color: '#1E392A',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '4px 10px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  marginLeft: '8px'
                }}
              >
                {copied ? 'Copiado!' : 'Copiar'}
              </button>
            </div>
            <button
              className="saiba-mais-button"
              onClick={() => setModalOpen(false)}
              style={{ margin: '16px auto 0 auto', fontWeight: 700, fontSize: '1rem' }}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ApoiaSe; 