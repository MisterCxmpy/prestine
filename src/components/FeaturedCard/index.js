"use client"
import React, { useState } from 'react';
import styles from './index.module.css';

export default function FeaturedCard({ title, desc }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <div
      className={`${styles['featured-card']} fx-container fx-column`}
      onMouseMove={handleMouseMove}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
      }}
    >
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
}
