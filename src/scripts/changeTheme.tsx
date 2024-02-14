import { useTheme } from '@/hooks/useTheme';

export function ChangeTheme() {
  const theme = (useTheme() === 'dark') ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  window.localStorage.setItem('theme', theme);
}
