"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const Step = ({ title, details }: any) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={styles.step} onClick={toggleDetails}>
      {title}
      {showDetails && <div className={styles.details}>{details}</div>}
    </div>
  );
};

export default function GuideLine() {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrap}>
        <div className={styles.guideTitle}>어쩌다 부루마블</div>
        <div>어쩌다 FE 부루마블 시리즈!! 천천히 한 단계씩!! 진행해 보세요.</div>
        <div>여러분도 어쩌다 개발자가 될 수 있습니다.</div>
      </div>

      <div className={styles.blueMarbleWrap}>
        <div className={styles.blueMarbleLeft}>
          <div className={styles.blueMarble}>
            <div className={styles.blueMarbleImageWrap}>
              <Image
                src={"/blueMarble/start.png"}
                alt="start"
                width={80}
                height={80}
              />
            </div>
          </div>
          <div className={styles.blueMarble}>FE 역할, 개념</div>
          <div className={styles.blueMarble}>HTML</div>
          <div className={styles.blueMarble}>CSS</div>
          <div className={styles.blueMarble}>JAVASCRIPT</div>
          <div className={styles.blueMarble}>정리</div>
        </div>

        <div className={styles.blueMarbleRight}>
          <div className={styles.blueMarble}>Toy-Project</div>
        </div>

        <div className={styles.blueMarbleLeft}>
          <div className={styles.blueMarble}>정리</div>
          <div className={styles.blueMarble}>222</div>
          <div className={styles.blueMarble}>222</div>
          <div className={styles.blueMarble}>React Basic(2)</div>
          <div className={styles.blueMarble}>React Basic(1)</div>
          <div className={styles.blueMarble}>React 란??</div>
        </div>

        <div className={styles.blueMarbleLeft}>
          <div className={styles.blueMarble}>Toy-Project</div>
        </div>

        <div className={styles.blueMarbleLeft}>
          <div className={styles.blueMarble}>취업 여행</div>
          <div className={styles.blueMarble}>개인 브랜딩 시작</div>
          <div className={styles.blueMarble}>222</div>
          <div className={styles.blueMarble}>222</div>
          <div className={styles.blueMarble}>마치며..</div>
          <div className={styles.blueMarble}>
            <div className={styles.blueMarbleImageWrap}>
              <Image
                src={"/blueMarble/finish.png"}
                alt="finish"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
