// Breakpoints
export const BREAKPOINTS = {
  mobile: '(max-width: 768px)',
  tablet: '(max-width: 1023px)',
  desktop: '(min-width: 1024px)'
};

// Colors
export const COLORS = {
  primary: '#1E392A',
  secondary: '#F0F0F0',
  accent: '#9DFF70',
  text: '#F0F0C0',
  border: '#3A4C3A'
};

// Artist pages that don't need header/footer
export const NO_HEADER_FOOTER_PAGES = [];

// Navigation items
export const NAV_ITEMS = [
  { path: '/', label: 'INÍCIO' },
  { path: '/artigos', label: 'ARTIGOS' },
  { path: '/apoia-se', label: 'APOIA-SE' },
  { path: '/loja', label: 'LOJA' }
];

// Footer links
export const FOOTER_LINKS = {
  help: [
    { path: '/', label: 'INÍCIO' },
    { label: 'PROJETOS', disabled: true },
    { label: 'INSPIRE-SE', disabled: true }
  ],
  start: [
    { path: '/', label: 'QUEM SOMOS', hash: '#quem-somos' },
    { path: '/', label: 'NOSSA ARTE', hash: '#nossa-arte' },
    { path: '/', label: 'NOVIDADE SEMANAL', hash: '#novidade-semanal' },
    { path: '/', label: 'ARTIGOS', hash: '#artigos' }
  ],
  social: [
    { href: 'https://www.instagram.com/2002_pltfrm/', label: 'INSTA', external: true },
    { href: '#', label: 'TIKTOK' },
    { href: '#', label: 'X' }
  ]
};