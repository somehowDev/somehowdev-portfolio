import StrokeText from "../StrokeText/StrokeText";
import styles from "./styles.module.css";

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.aboutMeTitle}>Hi, 안녕하세요 👋</div>
      <div
        className={styles.aboutMeTitle}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className={styles.svgWrap}>
          <StrokeText />
        </div>
        <div>입니다.</div>
      </div>
      <div className={styles.aboutMeContent}>
        저는 프론트엔드 개발자이며, IT 스타트업 공동 창업자 입니다. <br />
      </div>
    </div>
  );
}
