const theme = localStorage.getItem('theme') || 'system';
const rootElement = document.documentElement;
const currentTheme = theme === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme;

rootElement.setAttribute('data-theme', currentTheme);