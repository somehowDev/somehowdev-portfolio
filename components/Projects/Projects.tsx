"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { slideInFromTop } from "@/utils/motion";
import { Image, Button } from "antd";

const projectsData = [
  {
    year: "2024",
    title: "LLM 기반 AI 교육 플랫폼",
    mainImage: "/projects/llm2.png",
    imgs: ["/projects/llm2.png", "/projects/llm.png", "/projects/llm3.png"],
    skills: [
      "nextjs",
      "next-auth",
      "react",
      "typescript",
      "mui",
      "threejs",
      "websocket",
    ],
    description:
      "학생 대상의 인공지능(AI) 교육 과정으로, AI의 기본 개념 이해, 프롬프트 작성 방법 학습, 그리고 창의적 이야기와 프로젝트 생성의 기회를 제공하며, 경험 할 수 있는 플랫폼 개발",
    visible: false,
    link: "",
  },
  {
    year: "2024",
    title: "어쩌다 개발자 포트폴리오",
    skills: ["nextjs", "react", "typescript", "threejs", "antd"],
    imgs: [
      "/projects/portfolio.png",
      "/projects/portfolio2.png",
      "/projects/portfolio3.png",
      "/projects/portfolio4.png",
    ],
    mainImage: "/projects/portfolio.png",
    description:
      "<어쩌다 개발자 /> 라는 퍼스널 브랜딩을 위한 포트폴리오 사이트 개발",
    visible: true,
    link: "",
  },
  {
    year: "2023",
    title: "비밀리 Web 개발",
    skills: [
      "vite",
      "sendbird",
      "react",
      "typescript",
      "antd",
      "react-query",
      "recoil",
      "videojs",
      "patch-package",
      "i18next",
      "img-crop",
      "gsap",
      "firebase",
    ],
    description:
      "비밀리(다날) 패밀리타운(Family Town) - 모바일 메신저 플랫폼 서비스",
    mainImage: "/projects/ft.png",
    imgs: [
      "/projects/ft.png",
      "/projects/ft2.png",
      "/projects/ft3.png",
      "/projects/ft4.png",
      "/projects/ft5.png",
    ],
    visible: true,
    link: "https://www.family-town.com/features",
  },
  {
    year: "2023",
    title: "DX 플랫폼 - 재고 관리 솔루션",
    skills: [
      "vite",
      "react",
      "typescript",
      "threejs",
      "react-query",
      "recoil",
      "react-dnd",
      "reactstrap",
      "antd",
      "apexcharts",
      "i18next",
    ],
    description:
      "운영중인 스타트업 일본 Edge Tech+ 전시회 참석을 위한 DX 플랫폼 개발",
    mainImage: "/projects/stockMng.png",
    imgs: [
      "/projects/stockMng.png",
      "/projects/stockMng2.png",
      "/projects/stockMng3.png",
    ],
    visible: false,
    link: "",
  },
  {
    year: "2023",
    title: "DX 플랫폼 - 데이터 센터 관리",
    skills: [
      "vite",
      "react",
      "typescript",
      "threejs",
      "react-query",
      "recoil",
      "react-dnd",
      "reactstrap",
      "antd",
      "apexcharts",
      "i18next",
    ],
    description:
      "운영중인 스타트업 일본 Edge Tech+ 전시회 참석을 위한 DX 플랫폼 개발",
    imgs: ["/projects/llm2.png", "/projects/llm1.png", "/projects/llm3.png"],
    mainImage: "",
    visible: false,
    link: "",
  },
  {
    year: "2023",
    title: "DX 플랫폼 - 자산 관리 솔루션",
    skills: [
      "vite",
      "react",
      "typescript",
      "threejs",
      "react-query",
      "recoil",
      "react-dnd",
      "reactstrap",
      "antd",
      "apexcharts",
      "i18next",
    ],
    description:
      "운영중인 스타트업 일본 Edge Tech+ 전시회 참석을 위한 DX 플랫폼 개발",
    mainImage: "",
    imgs: ["/projects/llm2.png", "/projects/llm1.png", "/projects/llm3.png"],
    visible: false,
    link: "",
  },
  {
    year: "2022",
    title: "스마트팩토리 DX 플랫폼",
    skills: [
      "vite",
      "react",
      "typescript",
      "react-query",
      "recoil",
      "reactstrap",
      "antd",
      "apexcharts",
      "i18next",
    ],
    description:
      "공압계와 전력을 매핑시켜 데이터를 분석하여 공장 수율 및 자동화 프로세스를 통한 스마트 팩토리 프로젝트",
    mainImage: "/projects/smartFactory6.png",
    imgs: [
      "/projects/smartFactory6.png",
      "/projects/smartFactory.png",
      "/projects/smartFactory2.png",
      "/projects/smartFactory3.png",
      "/projects/smartFactory4.png",
      "/projects/smartFactory5.png",
      "/projects/smartFactory7.png",
    ],
    visible: true,
    link: "",
  },
  {
    year: "2022",
    title: "게임 회사 서버실 출입 관리 솔루션",
    skills: [
      "vite",
      "react",
      "typescript",
      "react-query",
      "recoil",
      "reactstrap",
      "antd",
      "apexcharts",
      "i18next",
    ],
    description: "유명 게임회사의 서버실 출입에 관한 DX 솔루션",
    mainImage: "/projects/server.png",
    imgs: [
      "/projects/server.png",
      "/projects/server2.png",
      "/projects/server3.png",
    ],
    visible: false,
    link: "",
  },
  {
    year: "2021",
    title: "유명 IT 대기업 업무 시스템",
    skills: [
      "react",
      "react native",
      "webpack",
      "typescript",
      "styled-components",
      "redux",
      "antd",
      "craco",
      "lerna",
    ],
    description: "유명 IT 대기업에서 사용하는 업무 관리 시스템",
    mainImage: "",
    imgs: [""],
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
          </div>{" "}
          <div className={styles.projectYears}>
            <ul>
              {[
                currentYear.toString(),
                (currentYear - 1).toString(),
                (currentYear - 2).toString(),
                (currentYear - 3).toString(),
              ].map((year, index) => (
                <li
                  key={"year_" + year + "_" + index}
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
              width: "100%",
            }}
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.title + "_" + index}
                className={styles.projectWrap}
                // flexBasis 또는 width를 사용하여 각 프로젝트의 기본 크기를 설정
              >
                <div className={styles.projectTitle}>
                  {project.title}
                  {project.visible === false ? (
                    <span className={styles.projectVisible}>대외비</span>
                  ) : null}
                </div>
                <div className={styles.projectImage}>
                  <Image.PreviewGroup items={project?.imgs}>
                    <Image
                      height={280}
                      className={styles.projectMainImage}
                      src={project.mainImage}
                    />
                  </Image.PreviewGroup>
                </div>
                <div className={styles.projectDescription}>
                  {project.description}
                </div>
                <div className={styles.projectSkills}>
                  {project?.skills?.map((skill: string, index: number) => {
                    return (
                      <div key={skill + "_" + index} className={styles.skill}>
                        {skill}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
