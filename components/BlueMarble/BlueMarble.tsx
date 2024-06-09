"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export default function BlueMarble() {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrap}>
        <div className={styles.guideTitle}>어쩌다 부루마블</div>
        <div className={styles.guideDesc}>
          어쩌다 FE 부루마블 시리즈!! 천천히 한 단계, 한 단계씩 진행해 보세요.
          🚀
        </div>
        <div className={styles.guideDesc}>
          어쩌다 FE 부루마블은 최소한의 기초 과정을 베이스로 프론트엔드 개발자로
          취업하기 위한 첫번째 과정을 다루는 내용입니다.
        </div>
        <div className={styles.guideDesc}>
          여러분도 어쩌다 개발자가 될 수 있습니다. 지금 당장 따라 해보세요
          🔥🔥🔥
        </div>
        <div className="flex justify-center m-4">
          <div
            className="border cursor-pointer rounded-3xl text-[#ffc000] border-[#ffc000] w-[120px] p-2
       hover:bg-[#ffc000] hover:text-white transform hover:scale-105 transition duration-300"
          >
            상세보기
          </div>
        </div>
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
          <div className={styles.blueMarble}>
            프론트엔드 여정 시작하기
            <br />
            <button className={styles.learnMoreBtn}>Learn 🚀🚀</button>
          </div>
          <div className={styles.blueMarble}>
            HTML <br />
            <button className={styles.learnMoreBtn}>Learn 🚀🚀</button>
          </div>
          <div className={styles.blueMarble}>
            CSS <br />
            <button className={styles.learnMoreBtn}>Learn 🚀🚀</button>
          </div>
          <div className={styles.blueMarble}>
            JAVASCRIPT
            <br />
            <button className={styles.learnMoreBtn}>Learn 🚀🚀</button>
          </div>
          <div className={styles.blueMarble}>
            정리
            <br />
            <button className={styles.learnMoreBtn}>Learn 🚀🚀</button>
          </div>
        </div>

        <div className={styles.blueMarbleRight}>
          <div className={styles.blueMarble}>
            Toy-Project
            <br />
            <button className={styles.learnMoreBtn}>Learn 🚀🚀</button>
          </div>
        </div>

        <div className={styles.blueMarbleLeft}>
          <div className={styles.blueMarble}>
            정리
            <br />
            <button className={styles.comingBtn}>Coming Soon ⭐️</button>
          </div>
          <div className={styles.blueMarble}>
            React (Advanced 2)
            <br />
            <button className={styles.comingBtn}>Coming Soon ⭐️</button>
          </div>
          <div className={styles.blueMarble}>
            React (Advanced 1)
            <br />
            <button className={styles.comingBtn}>Coming Soon ⭐️</button>
          </div>
          <div className={styles.blueMarble}>
            React (Basic 2)
            <br />
            <button className={styles.comingBtn}>Coming Soon ⭐️</button>
          </div>
          <div className={styles.blueMarble}>
            React (Basic 1)
            <br />
            <button className={styles.comingBtn}>Coming Soon ⭐️</button>
          </div>
          <div className={styles.blueMarble}>
            React 란??
            <br />
            <button className={styles.comingBtn}>Coming Soon ⭐️</button>
          </div>
        </div>

        <div className={styles.blueMarbleLeft}>
          <div className={styles.blueMarble}>
            Toy-Project
            <br />
            <button className={styles.comingBtn}>Coming Soon ⭐️</button>
          </div>
        </div>

        <div className={styles.blueMarbleLeft}>
          <div className={styles.blueMarble}>
            취업 여행
            <br />
            <button className={styles.comingBtn}>Coming Soon ⭐️</button>
          </div>
          <div className={styles.blueMarble}>
            개인 브랜딩 시작
            <br />
            <button className={styles.comingBtn}>Coming Soon ⭐️</button>
          </div>
          <div className={styles.blueMarble}>
            인성 면접(Basic)
            <br />
            <button className={styles.comingBtn}>Coming Soon ⭐️</button>
          </div>
          <div className={styles.blueMarble}>
            기술 면접(Basic)
            <br />
            <button className={styles.comingBtn}>Coming Soon ⭐️</button>
          </div>
          <div className={styles.blueMarble}>
            마치며..
            <br />
            <button className={styles.comingBtn}>Coming Soon ⭐️</button>
          </div>
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

      <div className={styles.blueMarbleMobileWrap}>
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

        <div className={styles.blueMarble}>Toy-Project</div>

        <div className={styles.blueMarble}>정리</div>
        <div className={styles.blueMarble}>React Advanced Course(2)</div>
        <div className={styles.blueMarble}>React Advanced Course(1)</div>
        <div className={styles.blueMarble}>React Basic Course(2)</div>
        <div className={styles.blueMarble}>React Basic Course(1)</div>
        <div className={styles.blueMarble}>React 란??</div>

        <div className={styles.blueMarble}>Toy-Project</div>

        <div className={styles.blueMarble}>취업 여행</div>
        <div className={styles.blueMarble}>개인 브랜딩 시작</div>
        <div className={styles.blueMarble}>인성 면접(Basic)</div>
        <div className={styles.blueMarble}>기술 면접(Basic)</div>
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
  );
}
