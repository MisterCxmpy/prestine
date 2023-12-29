import styles from './index.module.css'

export default function SolutionCard({title, desc}) {
  return (
    <div className={`${styles['solution-card']} fx-container fx-column`}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  )
}