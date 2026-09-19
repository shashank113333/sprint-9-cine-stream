import './globals.css';
import { Navbar } from '@/src/components/Navbar';

export const metadata = {
  title: 'Cine-Stream | Next.js 15 SSR Movie Discovery SPA',
  description: 'Engineered with Next.js 15 App Router, Server Components, and Dynamic SEO Metadata.',
  keywords: ['Movies', 'Next.js 15', 'Cine-Stream', 'SSR', 'SEO', 'TMDB', 'Film Discovery'],
  authors: [{ name: 'Shashank Vishwakarma' }],
};

export const viewport = {
  themeColor: '#05070d',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <main style={{ flex: 1 }}>{children}</main>
          <footer
            style={{
              borderTop: '1px solid var(--border-subtle)',
              backgroundColor: 'rgba(5, 7, 13, 0.9)',
              padding: '24px 20px',
              textAlign: 'center',
              marginTop: '40px',
            }}
          >
            <p style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '0.5px', marginBottom: '4px' }}>
              CINE<span style={{ color: '#e50914' }}>STREAM</span> — Next.js 15 Enterprise App Router
            </p>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem' }}>
              Engineered by <strong style={{ color: '#ffffff' }}>Shashank Vishwakarma</strong>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
