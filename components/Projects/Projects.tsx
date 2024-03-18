"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { slideInFromTop } from "@/utils/motion";

const projectsData = [
  {
    year: "2024",
    title: "LLM 기반 AI 교육 플랫폼",
    skills: [],
    description: "A description for Project A.",
    visible: false,
    link: "",
  },
  {
    year: "2024",
    title: "어쩌다 개발자 포트폴리오",
    skills: [],
    description: "A description for Project A.",
    visible: true,
    link: "",
  },
  {
    year: "2023",
    title: "DX 플랫폼 - 재고 관리 솔루션",
    skills: [],
    description:
      "운영중인 스타트업 일본 Edge Tech+ 전시회 참석을 위한 DX 플랫폼 개발",
    visible: false,
    link: "",
  },
  {
    year: "2023",
    title: "DX 플랫폼 - 데이터 센터 관리",
    skills: [],
    description:
      "운영중인 스타트업 일본 Edge Tech+ 전시회 참석을 위한 DX 플랫폼 개발",
    visible: false,
    link: "",
  },
  {
    year: "2023",
    title: "DX 플랫폼 - 자산 관리 솔루션",
    skills: [],
    description:
      "운영중인 스타트업 일본 Edge Tech+ 전시회 참석을 위한 DX 플랫폼 개발",
    visible: false,
    link: "",
  },
  {
    year: "2023",
    title: "비밀리 Web 개발",
    skills: [],
    description:
      "비밀리(다날) 패밀리타운(Family Town) - 모바일 메신저 플랫폼 서비스",
    visible: true,
    link: "https://www.family-town.com/features",
  },
  {
    year: "2022",
    title: "공장 DX 플랫폼",
    skills: [],
    description:
      "공압계와 전력을 매핑시켜 데이터를 분석하여 공장 수율 및 자동화 프로세스를 통한 스마트 팩토리 프로젝트",
    visible: true,
    link: "",
  },
  {
    year: "2022",
    title: "게임 회사 서버실 출입 관리 솔루션",
    skills: [],
    description: "유명 게임회사의 서버실 출입에 관한 DX 솔루션",
    visible: false,
    link: "",
  },
];

export default function Projects() {
  const currentYear = new Date().getFullYear(); // 현재 연도 가져오기
  const [activeYear, setActiveYear] = useState(currentYear.toString());

  const filteredProjects = projectsData.filter(
    (project) => project.year === activeYear
  );

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
              {[
                currentYear.toString(),
                (currentYear - 1).toString(),
                (currentYear - 2).toString(),
                (currentYear - 3).toString(),
              ].map((year) => (
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
          <div
            className={styles.projectListWrap}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={styles.projectWrap}
                // flexBasis 또는 width를 사용하여 각 프로젝트의 기본 크기를 설정
              >
                <div className={styles.projectTitle}>
                  {project.title}
                  {project.visible === false ? (
                    <span className={styles.projectVisible}>대외비</span>
                  ) : null}
                </div>
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