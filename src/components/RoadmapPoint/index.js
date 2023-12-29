import React from 'react'
import styles from './index.module.css'

export default function RoadmapPoint({ date, title }) {
  return (
    <div className={styles['roadmap-point']}>
      <p className={styles['date']}>{date}</p>
      <p className={styles['title']}>{title}</p>
    </div>
  )
}