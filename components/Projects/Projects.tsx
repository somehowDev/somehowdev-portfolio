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
        </motion.div>
      </div>
    </div>
  );
}
