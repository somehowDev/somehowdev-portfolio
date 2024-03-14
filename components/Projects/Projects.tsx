"use client";
import { useEffect, useRef, useState } from "react";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { motion, useAnimation } from "framer-motion";

import styles from "./styles.module.css";

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.projectsWrap}>
        <motion.div
          variants={slideInFromTop}
          className={styles.projectsTextWrap}
        >
          <div className={styles.projectsTitle}>Projects</div>
          <div>
            실제로 라이브 서비스 중인 프로젝트, 전시회 프로젝트, 토이 프로젝트
            등등 다양한 기술과 경험으로 만든 프로젝트 입니다.
          </div>
          <div className={styles.projectYears}>
            <ul>
              <li className={styles.active}>전체</li>
              <li>2024</li>
              <li>2023</li>
              <li>2022</li>
              <li>2021</li>
            </ul>
          </div>
          <div className={styles.projectListWrap}>
            <div
              className={styles.projectWrap}
              style={{
                minHeight: "450px",
              }}
            >
              <div className={styles.projectTitle}>Project A</div>
              <div className={styles.projectList}></div>
            </div>
            <div
              className={styles.projectWrap}
              style={{
                minHeight: "450px",
              }}
            >
              <div className={styles.projectTitle}>Project B</div>
              <div className={styles.projectList}></div>
            </div>
            <div
              className={styles.projectWrap}
              style={{
                minHeight: "450px",
              }}
            >
              <div className={styles.projectTitle}>Project B</div>
              <div className={styles.projectList}></div>
            </div>
          </div>

          <div className={styles.projectListWrap}>
            <div
              className={styles.projectWrap}
              style={{
                minHeight: "450px",
              }}
            >
              <div className={styles.projectTitle}>Project A</div>
              <div className={styles.projectList}></div>
            </div>
            <div
              className={styles.projectWrap}
              style={{
                minHeight: "450px",
              }}
            >
              <div className={styles.projectTitle}>Project B</div>
              <div className={styles.projectList}></div>
            </div>
            <div
              className={styles.projectWrap}
              style={{
                minHeight: "450px",
              }}
            >
              <div className={styles.projectTitle}>Project B</div>
              <div className={styles.projectList}></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
