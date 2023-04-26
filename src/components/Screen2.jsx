import Image from "../assets/Homepage-Slider-1.png";
import styles, { layout } from "../style";
import Button from "./Button";
const Screen2 = () => (
  <section id="track" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={Image}
        alt="Track"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Manage <br className="sm:block hidden" /> and Track.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Refreshingly easy logistics management with on-demand tracking, live
        updates, and proactive issue resolution from providers you can trust.
      </p>

      <Button styles={`mt-10`} />
    </div>
  </section>
);

export default Screen2;
