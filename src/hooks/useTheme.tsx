export const useTheme = (): string => {
  const theme = window.localStorage.getItem('theme') ?? 'light';
  return theme;
};
