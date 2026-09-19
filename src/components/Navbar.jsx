"use client";

import Link from 'next/link';
import { Film, Heart } from 'lucide-react';

export const Navbar = ({ favoritesCount = 0 }) => {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo" aria-label="Cine-Stream Home">
          <Film size={22} color="#e50914" />
          <span className="navbar-logo-text">
            CINE<span style={{ color: '#ff4d4f' }}>STREAM</span>
          </span>
        </Link>

        <nav className="navbar-nav">
          <Link
            href="/"
            aria-label="Discover Movies"
            className="nav-link-item"
            style={{
              color: '#fff',
            }}
          >
            Discover
          </Link>

          <Link
            href="/favorites"
            aria-label="Favorite Movies"
            className="nav-link-item"
            style={{
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Heart size={15} color="#e50914" fill={favoritesCount > 0 ? '#e50914' : 'none'} />
            <span>Favorites</span>
            {favoritesCount > 0 && (
              <span
                style={{
                  backgroundColor: '#e50914',
                  color: '#fff',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '1px 6px',
                  borderRadius: '9999px',
                  marginLeft: '2px',
                }}
              >
                {favoritesCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};