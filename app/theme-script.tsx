import * as React from 'react';

export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            function getTheme() {
              const stored = localStorage.getItem('theme');
              if (stored === 'dark') return 'dark';
              if (stored === 'light') return 'light';
              if (stored === 'system') {
                return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              }
              return 'light'; // fallback for empty or invalid value
            }
            document.documentElement.classList.toggle('dark', getTheme() === 'dark');
          })();
        `,
      }}
    />
  );
} 
