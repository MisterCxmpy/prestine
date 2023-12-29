import Image from "next/image";
import styles from "./page.module.css";
import prestineImage from "../../public/static/images/Prestine POS Application.png";
import { FeaturedCard, RoadmapCard, RoadmapLine, RoadmapPoint, SolutionCard } from "@/components";

export default function Home() {
  return (
    <div className={styles["main"]}>
      <section className={`${styles["hero"]} fx-center fx-column`}>
        <h1 className={styles["title"]}>Prestine: Elevate Efficiency</h1>
        <h2 className={styles["sub-heading"]}>
          Simplify, Boost Efficiency, Delight Customers with Prestine.
        </h2>
        <div className={styles["call-to-action"]}>
          <button className={styles["action-1"]}>Learn more</button>
          <button className={styles["action-2"]}>Read Documentation</button>
        </div>
      </section>
      <Image
        priority={true}
        src={prestineImage}
        alt="Prestine POS Application"
        className={styles["image"]}
      />
      <section className={`${styles["solutions"]} fx-container fx-column`}>
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
      <section className={`${styles["key-features"]} fx-container fx-column`}>
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
      <section className={`${styles["roadmap"]} fx-container fx-column`}>
        <h1 className="section-heading">Roadmap Ahead: Future Developments</h1>
        <p className={styles['roadmap-summary']}>
          Following the release of v1, the focus is now on enhancing
          customization options, providing users the freedom to personalize
          their experience. Looking ahead, v2 is on the horizon - a complete
          overhaul with new features, design, and more. If all goes according to
          plan, December 24 will mark the release of v2. Stay tuned for upcoming
          developments and news for Prestine!
        </p>
        <RoadmapLine />
        <div className={styles['roadmap-desc']}>
          <RoadmapCard title={"DEC 23 - v1.0 Release"} desc={"With V1.0 live, the spotlight shifts to enhancing customization options, offering users the freedom to personalize their experience in dry cleaning management."} />
          <RoadmapCard title={"FEB 24 - Customization Update"} desc="Acknowledging the need for more personalization, the focus is on actively planning to amplify the application, ensuring a tailored experience for users." />
          <RoadmapCard title={"JUNE/JULY 24 - v2.0 Development Begings"} desc="Looking forward, the roadmap outlines a planning phase for V2.0, envisioning a complete overhaul with fresh features, design, and more." />
          <RoadmapCard title={"DEC 24 - v2.0 Release"} desc="December is the target for the V2.0 release, bringing a comprehensive update with new features and design. Stay tuned for ongoing developments and news for Prestine!" />
        </div>
      </section>
      <section className={`${styles["contact"]} fx-container fx-column`}>
        <h1 className="section-heading">Interested? Get in contact.</h1>
        <button className={styles["contact-btn"]}>Contact</button>
      </section>
    </div>
  );
}
