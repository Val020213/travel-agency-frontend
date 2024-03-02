'use client';

import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem={true}
      themes={['light', 'dark']}
      attribute='class'
    >
      {children}
    </ThemeProvider>
  );
}
