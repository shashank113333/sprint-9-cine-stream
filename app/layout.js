import './globals.css';
import { Navbar } from '@/src/components/Navbar';

export const metadata = {
  title: 'Cine-Stream | Next.js 15 SSR Movie Discovery SPA',
  description: 'Engineered with Next.js 15 App Router, Server Components, and Dynamic SEO Metadata.',
  keywords: ['Movies', 'Next.js 15', 'Cine-Stream', 'SSR', 'SEO', 'TMDB', 'Film Discovery'],
  authors: [{ name: 'Shashank Vishwakarma' }],
};

export const viewport = {
  themeColor: '#0c0f14',
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
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              backgroundColor: '#080a0e',
              padding: '28px 20px',
              textAlign: 'center',
              marginTop: '40px',
            }}
          >
            <p style={{ fontSize: '0.95rem', fontWeight: 700, letterSpacing: '0.5px', marginBottom: '6px' }}>
              CINE<span style={{ color: '#ff4d4f' }}>STREAM</span> — Next.js 15 Enterprise App Router
            </p>
            <p style={{ color: '#e2e8f0', fontSize: '0.85rem', marginBottom: '4px' }}>
              Engineered by <strong>Shashank Vishwakarma</strong> • Sprint 09 Track A Deliverable
            </p>
            <p style={{ color: '#94a3b8', fontSize: '0.82rem' }}>
              Server Components • Dynamic SSR Routing • SEO generateMetadata
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
