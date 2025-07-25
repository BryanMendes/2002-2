import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // Pega o nome da rota atual (ex: "/", "/sobre", etc.)
  const { pathname } = useLocation();

  // Roda um efeito toda vez que o 'pathname' mudar
  useEffect(() => {
    // Força a janela do navegador a rolar para a posição 0,0 (topo) imediatamente
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    
    // Gambiarra: força o scroll para o topo novamente após um pequeno delay
    // para garantir que a página realmente role para o topo
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }, 50);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  // Este componente não renderiza nada visualmente
  return null;
}

export default ScrollToTop;