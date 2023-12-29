import Image from 'next/image'
import styles from './page.module.css'
import prestineImage from '../../public/static/images/Prestine POS Application.png';

export default function Home() {
  return (
    <div className={styles['main']}>
      <section className={`${styles['hero']} fx-center fx-column`}>
        <h1 className={styles['title']}>Prestine: Elevate Efficiency</h1>
        <h2 className={styles['sub-heading']}>Simplify, Boost Efficiency, Delight Customers with Prestine.</h2>
        <div className={styles['call-to-action']}>
          <button className={styles['action-1']}>Learn more</button>
          <button className={styles['action-2']}>Read Documentation</button>
        </div>
        
      </section>
      <Image
        src={prestineImage}
        alt="Prestine POS Application"
        className={styles['image']}
      />
    </div>
  )
}
