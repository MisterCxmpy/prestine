"use client"
import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import { Link } from 'react-scroll';

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
            <ScrollNavLink to="/">
              <span className={`${styles['nav-link']} ${styles["title-text"]}`}>Prestine</span>
            </ScrollNavLink>
          </div>
          <ScrollNavLink to="learn-more">
            <span className={styles['nav-link']}>Learn more</span>
          </ScrollNavLink>
          <ScrollNavLink to="features">
            <span className={styles['nav-link']}>Features</span>
          </ScrollNavLink>
          <ScrollNavLink to="contact">
            <span className={styles['nav-link']}>Contact</span>
          </ScrollNavLink>
        </div>
      </nav>
    </header>
  );
}

function ScrollNavLink({ children, to}) {

  return (
    <Link to={to} spy={true} smooth={true} offset={-150} duration={500}>
      {children}
    </Link>
  )
}