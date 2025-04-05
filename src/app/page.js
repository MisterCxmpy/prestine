import Image from "next/image";
import styles from "./page.module.css";
import prestineImage from "../../public/static/images/Prestine POS Application.png";
import { FeaturedCard, RoadmapCard, RoadmapLine, RoadmapPoint, SolutionCard } from "@/components";

export default function Home() {
  return (
    <div id='home' className={styles["main"]}>
      <section className={`${styles["hero"]} fx-center fx-column`}>
        <h1 className={`${styles["title"]} hero-title`}>Prestine: Elevate Efficiency</h1>
        <h2 className={`${styles["sub-heading"]} hero-sub-heading`}>
          Simplify, Boost Efficiency, Delight Customers with Prestine.
        </h2>
        <div className={styles["call-to-action"]}>
          <button className={styles["action-1"]}>Learn more</button>
        </div>
      </section>
      <Image
        priority={true}
        src={prestineImage}
        alt="Prestine POS Application"
        className={styles["image"]}
      />
      <section id='learn-more' className={`${styles["solutions"]} fx-container fx-column`}>
        <h1 className="section-heading">
          Practical Solutions for Your Business
        </h1>
        <div className={`${styles["solution-list"]} fx-center`}>
          <SolutionCard
            title={"Seamless Order Processing"}
            desc={
              "Effortlessly handle dry cleaning orders, ensuring a smooth and efficient process from drop-off to pick-up. Simplify your workflow for maximum productivity."
            }
          />
          <SolutionCard
            title={"Optimize Order Workflow"}
            desc={
              "Optimize your dry cleaning order process for maximum efficiency. Our solution streamlines workflows, making order management a seamless and straightforward experience."
            }
          />
          <SolutionCard
            title={"Proactive Customer Notifications"}
            desc={
              "Keep customers informed every step of the way. Our system provides proactive notifications, ensuring clients stay updated on order progress, enhancing communication and satisfaction."
            }
          />
        </div>
      </section>
      <section id='features' className={`${styles["key-features"]} fx-container fx-column`}>
        <h1 className="section-heading">Key Features</h1>
        <div className={`${styles["featured-list"]}`}>
          <FeaturedCard
            title={"High Storage Capability"}
            desc={"Ample storage for your growing business needs."}
          />
          <FeaturedCard
            title={"Store Customer Data"}
            desc={"Efficient management and storage of customer information."}
          />
          <FeaturedCard
            title={"Recent and Old Ticket Storage"}
            desc={
              "Quick retrieval of past and current transactions for a comprehensive business history."
            }
          />
          <FeaturedCard
            title={"Add New Items on Demand"}
            desc={"Easily incorporate new items into your inventory."}
          />
          <FeaturedCard
            title={"Voucher and Discount Capability"}
            desc={
              "Versatile features for vouchers and discounts to boost customer loyalty."
            }
          />
          <FeaturedCard
            title={"Performance Reviews"}
            desc={
              "Built-in review capabilities for evaluating and enhancing business performance."
            }
          />
        </div>
      </section>
      <section id='contact' className={`${styles["contact"]} fx-container fx-column`}>
        <h1 className="section-heading">Interested? Get in contact.</h1>
        <button className={styles["contact-btn"]}>Contact</button>
      </section>
    </div>
  );
}
