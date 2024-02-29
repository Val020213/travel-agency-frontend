'use client';

import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      themes={['light', 'dark']}
      defaultTheme={'light'}
      enableSystem={true}
      attribute='class'
    >
      {children}
    </ThemeProvider>
  );
}
