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
    mainImage: "/projects/llm.png",
    imgs: [
      "/projects/llm.png",
      "/projects/llm3.png",
      "/projects/llm4.png",
      "/projects/llm8.png",
      "/projects/llm2.png",
      "/projects/llm6.png",
      "/projects/llm7.png",
      "/projects/llm5.png",
    ],
    skills: [
      "nextjs",
      "next-auth",
      "react",
      "typescript",
      "mui",
      "threejs",
      "websocket",
    ],
    description: [
      "학생 대상의 인공지능(AI) 교육 과정으로, AI의 기본 개념 이해, 프롬프트 작성 방법 학습, 그리고 창의적 이야기와 프로젝트 생성의 기회를 제공하며, 경험 할 수 있는 플랫폼 개발",
      "llm, prompt, chatGPT",
    ],
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
    description: [
      "<어쩌다 개발자 /> 라는 퍼스널 브랜딩을 위한 포트폴리오 사이트 개발",
      "핵개인화의 시대에 맞는 개인적 특성과 가치관에 맞는 인간관계를 다양하게 만드기 위한 과정 및 프로젝트",
    ],
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
    description: [
      "비밀리(다날) 패밀리타운(Family Town) - 모바일, 웹 메신저 플랫폼 서비스",
      "서비스 런칭 (https://www.family-town.com/features)",
    ],
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
    description: [
      "운영중인 스타트업 일본 Edge Tech+ 전시회 참석을 위한 DX 플랫폼 개발",
    ],
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
    description: [
      "운영중인 스타트업 일본 Edge Tech+ 전시회 참석을 위한 DX 플랫폼 개발",
    ],
    imgs: ["/projects/dataCenter.png", "/projects/dataCenter2.png"],
    mainImage: "/projects/dataCenter.png",
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
    description: [
      "운영중인 스타트업 일본 Edge Tech+ 전시회 참석을 위한 DX 플랫폼 개발",
    ],
    mainImage: "/projects/assetMng2.png",
    imgs: [
      "/projects/assetMng2.png",
      "/projects/assetMng.png",
      "/projects/assetMng3.png",
    ],
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
    description: [
      "공압계와 전력을 매핑시켜 데이터를 분석하여 공장 수율 및 자동화 프로세스를 통한 스마트 팩토리 프로젝트",
    ],
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
    description: [
      "유명 게임회사의 서버실 출입에 관한 DX 솔루션",
      "스타트업 창업 후 첫 DX 프로젝트",
    ],
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
    year: "2022",
    title: "서버실 디지털 트윈(Threejs)",
    skills: [
      "react",
      "react-three/fiber",
      "react-three/drei",
      "threejs",
      "typescript",
      "styled-components",
      "redux",
      "antd",
    ],
    description: [
      "Threejs 학습을 하기 위한 토이 프로젝트(서버실 디지털 트윈)",
      "디지털 전환(Digital Transformation, DX)에 확신이 생겨 퇴사 후 창업하여 데모로 만든 첫 DX 프로젝트",
      "디지털 전환(Digital Transformation, DX)이란 인공지능, 클라우드, 데이터 등 디지털 기술을 기반으로 기업의 조직 문화, 비즈니스 모델 및 산업 생태계를 혁신하고 고객과 시장의 변화에 대응하여 새로운 가치를 창출할 수 있는 기업으로 변환하는 과정",
    ],
    mainImage: "/projects/server_dt5.png",
    imgs: [
      "/projects/server_dt5.png",
      "/projects/server_dt.png",
      "/projects/server_dt2.png",
      "/projects/server_dt3.png",
      "/projects/server_dt4.png",
    ],
    visible: true,
    link: "",
  },
  {
    year: "2021",
    title: "근무관리 시스템",
    skills: [
      "react",
      "java spring",
      "jpa",
      "swagger ui",
      "charjs",
      "typescript",
      "module css",
      "redux",
      "mui",
    ],
    description: [
      "풀스택 개발 토이 프로젝트(React + Spring(JPA))",
      "풀스택을 지향했지만 팀 단위가 실 단위로 확장되어 프론트엔드 팀장을 맡게 되어 react를 공부하기 위해 진행한 토이 프로젝트",
    ],
    mainImage: "/projects/rt2.png",
    imgs: [
      "/projects/rt2.png",
      "/projects/rt.png",
      "/projects/rt3.png",
      "/projects/rt4.png",
      "/projects/rt5.png",
      "/projects/rt6.png",
      "/projects/rt7.png",
    ],
    visible: true,
    link: "",
  },
  {
    year: "2021",
    title: "유명 IT 대기업 업무 시스템(2021~2014)",
    skills: [
      "java",
      "react",
      "react native",
      "C#",
      ".net",
      "jQuery",
      "redis",
      "jenkins",
      "docker",
      "jpa",
      "graphql",
      "webpack",
      "typescript",
      "styled-components",
      "redux",
      "antd",
      "craco",
      "lerna",
    ],
    description: [
      "유명 IT 대기업에서 사용하는 업무 관리 시스템 (보안으로 인한 이미지 제공 불가)",
      "백엔드 개발자로 5년, 프론트엔드 개발자로 3년 개발 업무 진행 (풀 스택 개발)",
      "2016~2017년 react가 유명해지면서 관심히 생겨 react를 공부하기 시작함.",
    ],
    mainImage: "/projects/security.jpg",
    imgs: ["/projects/security.jpg"],
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
                      alt={project.title}
                    />
                  </Image.PreviewGroup>
                </div>
                <div className={styles.projectDescription}>
                  <ul>
                    {project.description?.map((desc, index) => (
                      <li key={"desc_" + index}>✨ {desc}</li>
                    ))}
                  </ul>
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
