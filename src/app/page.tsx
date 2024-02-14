'use client';
import { Switch } from '@/components/atoms/Switch';
import { useTheme } from '@/hooks/useTheme';
import { useEffect } from 'react';

function UpdateTheme() {
  const theme = useTheme();
  document.documentElement.setAttribute('data-theme', theme);
  console.log(theme)
}//f5 fix bug

export default function Home() {

  useEffect(() => {
    UpdateTheme();
  }, [])

  return (
    <div>
      <Switch />
    </div>
  );
}
