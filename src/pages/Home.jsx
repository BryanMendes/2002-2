import Hero from '../components/Hero/Hero.jsx';
import { Link } from 'react-router-dom';
import QuemSomosSection from '../components/QuemSomosSection/QuemSomosSection.jsx';
import ImageCarousel from '../components/ImageCarousel/ImageCarousel.jsx';
import PuroSomSection from '../components/PuroSomSection/PuroSomSection.jsx';
import NossaArteSection from '../components/NossaArteSection/NossaArteSection.jsx';
import InfoSection from '../components/InfoSection/InfoSection.jsx';
import ArchivesSection from '../components/ArchivesSection/ArchivesSection.jsx';
import NewsletterSection from '../components/NewsletterSection/NewsletterSection.jsx';
import LazyImage from '../components/LazyImage/LazyImage';

// Dados para o primeiro carrossel (Idealizadores)
const creatorSlides = [
  {
    imageSrc: '/imagem-carrossel-1.png',
    captionText: 'AKÉ, RUBENS E GUI DOS IDEALIZADORES DO PROJETO.',
    link: '/ake',
  },
  {
    imageSrc: '/imagem-carrossel-2.png',
    captionText: 'AKÉ, RUBENS E GUI DOS IDEALIZADORES DO PROJETO.',
    link: '/rfmees',
  },
  {
    imageSrc: '/imagem-carrossel-3.png',
    captionText: 'AKÉ, RUBENS E GUI DOS IDEALIZADORES DO PROJETO.',
    link: '/gui-romana',
  },
];

function Home() {
  return (
    <>
      <Hero />
      <hr className="section-separator" />
      <QuemSomosSection id="quem-somos" />
      <hr className="section-separator" />
      <ImageCarousel slides={creatorSlides} />
      <PuroSomSection />
      <hr className="section-separator" />
      {/* Não adicionar <hr> após NossaArteSection pois ela já tem linha interna */}
      <NossaArteSection id="nossa-arte" />
      {/* <hr className="section-separator" /> REMOVIDO */}
      <InfoSection 
        id="novidade-semanal"
        title="NOVIDADE SEMANAL"
        imageSrc="/image-2.png"
        imageText="AKÉ"
        paragraphText="Em um mundo saturado de arte de massa, a 2002 é o espaço onde artistas independentes ganham voz e reconhecimento. Aqui, a criatividade não tem limites, e cada obra tem um espaço único para brilhar. Se você é um artista que deseja se conectar com uma audiência apaixonada, ou alguém em busca de arte autêntica e inovadora, você está no lugar certo."
      />
      <hr className="section-separator" />
      <InfoSection 
        id="artigos"
        title="ARTIGOS"
        imageSrc="/imagem-3.png"
        imageText="ARTE"
        paragraphText="Renata Martinelli é Artista Visual e Curadora Independente, Historiadora da Arte e Pesquisadora. Desenvolve pesquisas relacionadas ao corpo feminino, memória, território e processos criativos."
      />
      <hr className="section-separator" />
      <ArchivesSection />
      <hr className="section-separator" />
      <NewsletterSection />
      <section style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '48px auto 0 auto', padding: '0 16px' }}>
        <Link to="/venha-fazer-parte" className="action-link action-link-large">
          <div className="action-link-main">
            <div className="action-link-row">
              <span>VENHA</span>
              <span className="parte-inline">PARTE</span>
            </div>
            <div className="action-link-bottom">FAZER</div>
          </div>
        </Link>
      </section>
      {/* <hr className="section-separator" /> REMOVIDO do final */}
    </>
  );
}

export default Home; 