import styles from './index.module.css';

export default function PaymentOption({ paymentData }) {
  return (
    <div className={`${styles["payment-option"]} fx-container fx-column`}>
      <p className={styles['option-title']}>{paymentData.title}</p>
      <p className={styles['option-desc']}>{paymentData.desc}</p>
      <div className={styles['seperator']}></div>
      <p className={styles['option-price']}>{paymentData.price}</p>
      <button className={styles["action"]}>{paymentData.action}</button>
      <ul className={`${styles['feature-list']} fx-container fx-column`}>
        {paymentData.features.map((f, index) => (
          <li className={styles['feature']} key={index}>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
