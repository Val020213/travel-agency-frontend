'use client';

import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      themes={['light', 'dark']}
      defaultTheme={
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      }
      enableSystem={true}
      attribute='class'
    >
      {children}
    </ThemeProvider>
  );
}
