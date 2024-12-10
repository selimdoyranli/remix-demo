import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import styles from './styles/tailwind.css'
import Header from './components/Header';
import { ThemeProvider } from './components/ThemeProvider';
import { ThemeScript } from './theme-script';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Recipe App" },
    { description: "Discover and explore delicious recipes from around the world" },
    { viewport: "width=device-width,initial-scale=1" },
    { charset: "utf-8" }
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <ThemeScript />
      </head>
      <body className="bg-gray-50 dark:bg-gray-900">
        <ThemeProvider>
          <Header />
          <Outlet />
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
} 
