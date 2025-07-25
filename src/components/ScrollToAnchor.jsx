import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToAnchor() {
  const location = useLocation();
  const lastHash = useRef('');

  // Função para rolar até o elemento com o ID correspondente ao hash
  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash;
      
      // Pequeno timeout para garantir que o DOM esteja pronto
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (location.pathname !== lastHash.current) {
      // Se não houver hash e o pathname mudou, role para o topo
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location]);

  return null;
}

export default ScrollToAnchor;