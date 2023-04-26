import Image2 from "../assets/Homepage-Slider-2.png";
import styles, { layout } from "../style";
import Button from "./Button";

const Screen3 = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a your Shipment <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Freightos creates incredible technology that makes global trade
        frictionless for companies around the world.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={Image2} alt="Compare" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Screen3;
