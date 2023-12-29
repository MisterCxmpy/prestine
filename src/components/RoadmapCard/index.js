import React from 'react'
import styles from './index.module.css'

export default function RoadmapCard({ title, desc }) {
  return (
    <div className={`${styles['roadmap-card']} fx-container fx-column`}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  )
}