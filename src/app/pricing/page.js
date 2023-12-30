import { PaymentOption } from '@/components'
import styles from './index.module.css'

export default function Pricing() {
  return (
    <div className={styles['main']}>
      <section className={`${styles["hero"]} fx-center fx-column`}>
        <h1 className={`${styles["title"]} hero-title`}>Pricing Plans Tailored to Your Business Needs</h1>
        <h2 className={`${styles["sub-heading"]} hero-sub-heading`}>
          Choose the Perfect Plan for Seamless Dry Cleaning Management
        </h2>
      </section>
      <section className={`${styles["payment-options"]}`}>
        <PaymentOption
          paymentData={{
            title: "Basic",
            desc: "Essential features for a strong start - orders, customers, and basic inventory.",
            price: "$29/month",
            action: "Get Started",
            features: ["Order Processing", "Customer Management", "Basic Inventory Tracking"],
          }}
        />
        <PaymentOption
          paymentData={{
            title: "Standard",
            desc: "Upgrade with customized orders and advanced inventory.",
            price: "$49/month",
            action: "Get Started",
            features: ["Order Processing", "Customer Management", "Advanced Inventory Tracking", "Customization Options"],
          }}
        />
        <PaymentOption
          paymentData={{
            title: "Premium",
            desc: "Unlock a premium experience with advanced orders, customization, and priority support.",
            price: "$79/month",
            action: "Get Started",
            features: ["Order Processing", "Customer Management", "Advanced Inventory Tracking", "Customization Options", "Performance Reviews", "Enhanced Customer Support"],
          }}
        />
        <PaymentOption
          paymentData={{
            title: "Enterprise",
            desc: "Tailor - made for larger businesses - custom integrations, training, and dedicated support.",
            price: "Custom Pricing",
            action: "Get In Contact",
            features: ["Tailored to the unique needs of large dry cleaning businesses", "Custom integrations", "Priority Support", "On-site Training"],
          }}
        />
      </section>
      <section>
        
      </section>
    </div>
  )
}