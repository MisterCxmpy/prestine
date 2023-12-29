"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './index.module.css';

export default function Navbar() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 20;

      setIsNavbarFixed(scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles['header']} ${isNavbarFixed ? styles['scrolled'] : ''} fx-center`}>
      <nav className={`${styles['container']}`}>
        <div className={`${styles['items']} fx-center`}>
          <div className={styles['title']}>
            <Link href="/">
              <span className={`${styles['nav-link']} ${styles["title-text"]}`}>Prestine</span>
            </Link>
          </div>
          <Link href="/pricing">
            <span className={styles['nav-link']}>Pricing</span>
          </Link>
          <Link href="/features">
            <span className={styles['nav-link']}>Features</span>
          </Link>
          <Link href="/documentation">
            <span className={styles['nav-link']}>Documentation</span>
          </Link>
          <Link href="/changelog">
            <span className={styles['nav-link']}>Change Log</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
