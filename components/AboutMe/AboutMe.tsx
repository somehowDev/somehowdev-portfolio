"use client";
import { useState, useEffect, useRef } from "react";

import StrokeText from "../StrokeText/StrokeText";
import styles from "./styles.module.css";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
  const [showDiv, setShowDiv] = useState(false); // div의 표시 여부를 결정하는 상태
  const divRef = useRef(null); // div에 대한 참조

  useEffect(() => {
    setTimeout(() => {
      setShowDiv(true); // 1초 후에 div를 표시하도록 상태 변경
    }, 1000);
  }, []); // 빈 배열을 전달하여 컴포넌트 마운트 시에만 실행되도록 함

  return (
    <motion.div initial="hidden" animate="visible" className={styles.container}>
      <div className={styles.aboutMeContent}>
        <motion.div variants={slideInFromLeft(0.5)}>
          {showDiv && (
            <div className={styles.aboutMeBackgroundSvg} ref={divRef}>
              <svg
                className="BgAnimation__svg"
                viewBox="-80 50 602 602"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.15">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z"
                    stroke="url(#paint0_radial)"
                    id="path_0"
                  ></path>
                  <path
                    d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z"
                    stroke="url(#paint1_radial)"
                    id="path_1"
                  ></path>
                  <path
                    d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z"
                    stroke="url(#paint2_radial)"
                    id="path_2"
                  ></path>
                </g>
                <ellipse
                  cx="295.027"
                  cy="193.118"
                  transform="translate(-295.027 -193.118)"
                  rx="1.07306"
                  ry="1.07433"
                  fill="#945DD6"
                >
                  <animateMotion
                    dur="10s"
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath xlinkHref="#path_2"></mpath>
                  </animateMotion>
                </ellipse>
                <path
                  d="M294.685 193.474L268.932 219.258"
                  transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)"
                  stroke="url(#paint3_linear)"
                >
                  <animateMotion
                    dur="10s"
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath xlinkHref="#path_2"></mpath>
                  </animateMotion>
                </path>
                <ellipse
                  cx="295.027"
                  cy="193.118"
                  transform="translate(-295.027 -193.118)"
                  rx="1.07306"
                  ry="1.07433"
                  fill="#46737"
                >
                  <animateMotion
                    dur="5s"
                    begin="1"
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath xlinkHref="#path_2"></mpath>
                  </animateMotion>
                </ellipse>
                <path
                  d="M294.685 193.474L268.932 219.258"
                  transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)"
                  stroke="url(#paint7_linear)"
                >
                  <animateMotion
                    dur="5s"
                    begin="1"
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath xlinkHref="#path_2"></mpath>
                  </animateMotion>
                </path>
                <ellipse
                  cx="476.525"
                  cy="363.313"
                  rx="1.07433"
                  ry="1.07306"
                  transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
                  fill="#945DD6"
                >
                  <animateMotion
                    dur="10s"
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath xlinkHref="#path_0"></mpath>
                  </animateMotion>
                </ellipse>
                <path
                  d="M476.171 362.952L450.417 337.168"
                  transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
                  stroke="url(#paint4_linear)"
                >
                  <animateMotion
                    dur="10s"
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath xlinkHref="#path_0"></mpath>
                  </animateMotion>
                </path>
                <ellipse
                  cx="382.164"
                  cy="155.029"
                  rx="1.07433"
                  ry="1.07306"
                  transform="translate(-382.164 -155.029) rotate(90 382.164 155.029)"
                  fill="#F46737"
                >
                  <animateMotion
                    dur="10s"
                    begin="1"
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath xlinkHref="#path_0"></mpath>
                  </animateMotion>
                </ellipse>
                <path
                  d="M381.81 154.669L356.057 128.885"
                  transform="translate(-381.81 -154.669) rotate(-45 381.81 154.669)"
                  stroke="url(#paint5_linear)"
                >
                  <animateMotion
                    dur="10s"
                    begin="1"
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath xlinkHref="#path_0"></mpath>
                  </animateMotion>
                </path>
                <ellipse
                  cx="333.324"
                  cy="382.691"
                  rx="1.07306"
                  ry="1.07433"
                  transform="translate(-333.324 -382.691) rotate(-180 333.324 382.691)"
                  fill="#F46737"
                >
                  <animateMotion
                    dur="5s"
                    begin="0"
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath xlinkHref="#path_1"></mpath>
                  </animateMotion>
                </ellipse>
                <path
                  d="M333.667 382.335L359.42 356.551"
                  transform="scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)"
                  stroke="url(#paint6_linear)"
                >
                  <animateMotion
                    dur="5s"
                    begin="0"
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath xlinkHref="#path_1"></mpath>
                  </animateMotion>
                </path>
                <ellipse
                  cx="165.524"
                  cy="93.9596"
                  rx="1.07306"
                  ry="1.07433"
                  transform="translate(-165.524 -93.9596)"
                  fill="#F46737"
                >
                  <animateMotion
                    dur="10s"
                    begin="3"
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath xlinkHref="#path_0"></mpath>
                  </animateMotion>
                </ellipse>
                <path
                  d="M165.182 94.3159L139.429 120.1"
                  transform="translate(-165.182 -94.3159) rotate(45 165.182 94.3159)"
                  stroke="url(#paint7_linear)"
                >
                  <animateMotion
                    dur="10s"
                    begin="3"
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath xlinkHref="#path_0"></mpath>
                  </animateMotion>
                </path>
                <ellipse
                  cx="476.525"
                  cy="363.313"
                  rx="1.07433"
                  ry="1.07306"
                  transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
                  fill="#13ADC7"
                >
                  <animateMotion
                    dur="12s"
                    begin="4"
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath xlinkHref="#path_0"></mpath>
                  </animateMotion>
                </ellipse>
                <path
                  d="M476.171 362.952L450.417 337.168"
                  transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
                  stroke="url(#paint11_linear)"
                >
                  <animateMotion
                    dur="12s"
                    begin="4"
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath xlinkHref="#path_0"></mpath>
                  </animateMotion>
                </path>
                <defs>
                  <radialGradient
                    id="paint0_radial"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(301 301) rotate(90) scale(300)"
                  >
                    <stop offset="0.333333" stopColor="#FBFBFB"></stop>
                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(301 301) rotate(90) scale(300)"
                  >
                    <stop offset="0.333333" stopColor="#FBFBFB"></stop>
                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                  </radialGradient>
                  <radialGradient
                    id="paint2_radial"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(301 301) rotate(90) scale(300)"
                  >
                    <stop offset="0.333333" stopColor="#FBFBFB"></stop>
                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                  </radialGradient>
                  <linearGradient
                    id="paint3_linear"
                    x1="295.043"
                    y1="193.116"
                    x2="269.975"
                    y2="218.154"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#945DD6"></stop>
                    <stop offset="1" stopColor="#945DD6" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear"
                    x1="476.529"
                    y1="363.31"
                    x2="451.461"
                    y2="338.272"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#945DD6"></stop>
                    <stop offset="1" stopColor="#945DD6" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear"
                    x1="382.168"
                    y1="155.027"
                    x2="357.1"
                    y2="129.989"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F46737"></stop>
                    <stop offset="1" stopColor="#F46737" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear"
                    x1="333.309"
                    y1="382.693"
                    x2="358.376"
                    y2="357.655"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F46737"></stop>
                    <stop offset="1" stopColor="#F46737" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint7_linear"
                    x1="165.54"
                    y1="93.9578"
                    x2="140.472"
                    y2="118.996"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F46737"></stop>
                    <stop offset="1" stopColor="#F46737" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint8_linear"
                    x1="414.367"
                    y1="301.156"
                    x2="439.435"
                    y2="276.118"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#13ADC7"></stop>
                    <stop offset="1" stopColor="#13ADC7" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint9_linear"
                    x1="515.943"
                    y1="288.238"
                    x2="541.339"
                    y2="291.454"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#13ADC7"></stop>
                    <stop offset="1" stopColor="#13ADC7" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint10_linear"
                    x1="117.001"
                    y1="230.619"
                    x2="117.36"
                    y2="258.193"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#945DD6"></stop>
                    <stop offset="1" stopColor="#945DD6" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint11_linear"
                    x1="476.529"
                    y1="363.31"
                    x2="451.461"
                    y2="338.272"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#13ADC7"></stop>
                    <stop offset="1" stopColor="#13ADC7" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          )}
          <div className={styles.aboutMeContentText}>
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
            <div className={styles.introduceText}>
              안녕하세요 🤗🤗 프론트엔드 개발의 세계로 여러분을 안내할 준비가
              되어 있는 <br />
              IT 스타트업의 공동 창업자이자
              <span className={styles.name}>{` <어쩌다 개발자 /> `}</span>
              입니다.
              <br />
              <br />
              취업 시장에서 경쟁력을 갖추고 싶은{" "}
              <span className={styles.name}>취준생</span>, 기술의 기초를
              다지고자 하는 <span className={styles.name}>대학생</span>, 그리고
              새로운 분야에 도전하고자 하는{" "}
              <span className={styles.name}>비전공자</span> 분들께 저의 실무
              경험을 바탕으로 한 지침을 제공하고자 합니다. <br /> <br />
              여러분의 고민과 막막함을 이해합니다.{" "}
              <span className={styles.name}>
                {`"취업하고 싶지만 어디서부터 시작해야 할지"`}
              </span>
              {", "}
              <span className={styles.name}>
                {`"전공을 어떻게 더 잘 이해할 수 있을지"`}
              </span>
              {", "}
              <span className={styles.name}>
                {`"새로운 분야에 어떻게 첫발을 디뎌야 할지"`}
              </span>{" "}
              등의 고민은 모두에게 익숙한 문제입니다.
              <br /> <br />
              함께 배우고, 성장하며, 우리 모두가 더 나은 개발자이자 멋진
              사람으로 발전할 수 있는 여정에 여러분을 초대합니다. 시작할 준비가
              되셨나요? 여러분의 도전에 기대를 품고, 이 여정에서 여러분과 함께
              동행하기를 소망합니다.
            </div>
          </div>
        </motion.div>
        <div className={styles.aboutMeContentSvg}>
          <motion.div variants={slideInFromRight(0.5)}>
            <Image
              src="/mainIconsdark.svg"
              alt="work icons"
              height={650}
              width={650}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
