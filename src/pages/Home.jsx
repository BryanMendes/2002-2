import Hero from '../components/Hero/Hero.jsx';
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
    captionText: 'AKÉ, RUBENS E GUI ROMANA, OS IDEALIZADORES DO PROJETO.',
    link: '/ake',
  },
  {
    imageSrc: '/imagem-carrossel-2.png',
    captionText: 'AKÉ, RUBENS E GUI ROMANA, OS IDEALIZADORES DO PROJETO.',
    link: '/rfmees',
  },
  {
    imageSrc: '/imagem-carrossel-3.png',
    captionText: 'AKÉ, RUBENS E GUI ROMANA, OS IDEALIZADORES DO PROJETO.',
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
      {/* Seção de novidade semanal removida */}
      <hr className="section-separator" />
      <InfoSection 
        id="artigos"
        title="ARTIGOS"
        imageSrc="/imagem-3.png"
        imageText="ARTE"
        paragraphText="Renata Martinelli é Artista Visual e Curadora Independente, Historiadora da Arte e Pesquisadora. Desenvolve pesquisas relacionadas ao corpo feminino, memória, território e processos criativos."
        showButton={true}
        buttonLink="/artigos"
        buttonText="Saiba Mais"
      />
      <hr className="section-separator" />
      <ArchivesSection />
      <hr className="section-separator" />
      <NewsletterSection />
      {/* <hr className="section-separator" /> REMOVIDO do final */}
    </>
  );
}

export default Home;