import Link from 'next/link';
import styles from './index.module.css';

export default function Navbar() {
  return (
    <nav className={`${styles['navbar']} fx-center`}>
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
    </nav>
  );
}
