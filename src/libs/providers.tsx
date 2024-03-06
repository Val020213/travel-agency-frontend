'use client';

import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <NextUIProvider>
    <ThemeProvider
      enableSystem={true}
      themes={['light', 'dark']}
      attribute='class'
    >
      {children}
    </ThemeProvider>
    // </NextUIProvider>
  );
}
