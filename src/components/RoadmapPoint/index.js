import React from 'react'
import styles from './index.module.css'

export default function RoadmapPoint({ title }) {
  return (
    <div className={styles['roadmap-point']}>
      <p>{title}</p>
    </div>
  )
}