'use client';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem={true}
      themes={['light', 'dark']}
      attribute='class'
    >
      <Toaster />
      {children}
    </ThemeProvider>
  );
}
