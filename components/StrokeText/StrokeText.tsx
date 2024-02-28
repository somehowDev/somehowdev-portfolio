import styles from "./styles.module.css";

export default function StrokeText() {
  return (
    <svg viewBox="0 0 4600 1100" className={styles.svg}>
      <text x="100" y="720" textAnchor="start">
        {`<어쩌다 개발자 />`}
      </text>
    </svg>
  );
}
