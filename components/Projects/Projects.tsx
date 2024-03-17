"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { slideInFromTop } from "@/utils/motion";

const projectsData = [
  {
    year: "2024",
    title: "Project A",
    description: "A description for Project A.",
  },
  {
    year: "2023",
    title: "Project B",
    description: "A description for Project B.",
  },
  {
    year: "2022",
    title: "Project C",
    description: "A description for Project C.",
  },
  // 여기에 더 많은 프로젝트를 추가할 수 있습니다.
];

export default function Projects() {
  const [activeYear, setActiveYear] = useState("전체");

  const filteredProjects = projectsData.filter((project) =>
    activeYear === "전체" ? true : project.year === activeYear
  );
  console.log(activeYear);

  return (
    <div className={styles.container}>
      <div className={styles.projectsWrap}>
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className={styles.projectsTextWrap}
        >
          <div className={styles.projectsTitle}>Projects</div>
          <div>
            실제로 라이브 서비스 중인 프로젝트, 전시회 프로젝트, 토이 프로젝트
            등등 다양한 기술과 경험으로 만든 프로젝트입니다.
          </div>
          <div className={styles.projectYears}>
            <ul>
              {["전체", "2024", "2023", "2022", "2021"].map((year) => (
                <li
                  key={year}
                  className={activeYear === year ? styles.active : ""}
                  onClick={() => setActiveYear(year)}
                >
                  {year}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.projectListWrap}>
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={styles.projectWrap}
                style={{ minHeight: "450px" }}
              >
                <div className={styles.projectTitle}>{project.title}</div>
                <div className={styles.projectDescription}>
                  {project.description}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
