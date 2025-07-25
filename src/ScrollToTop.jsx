import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // Pega o nome da rota atual (ex: "/", "/sobre", etc.)
  const { pathname } = useLocation();

  // Roda um efeito toda vez que o 'pathname' mudar
  useEffect(() => {
    // Força a janela do navegador a rolar para a posição 0,0 (topo)
    window.scrollTo(0, 0);
  }, [pathname]);

  // Este componente não renderiza nada visualmente
  return null;
}

export default ScrollToTop;