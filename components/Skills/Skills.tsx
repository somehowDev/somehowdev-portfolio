"use client";
import { useState, useEffect, useRef } from "react";

import StrokeText from "../StrokeText/StrokeText";
import styles from "./styles.module.css";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

export default function Skills() {
  const [showDiv, setShowDiv] = useState(false); // div의 표시 여부를 결정하는 상태
  const divRef = useRef(null); // div에 대한 참조
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setShowDiv(true); // 1초 후에 div를 표시하도록 상태 변경
    }, 1000);
  }, []); // 빈 배열을 전달하여 컴포넌트 마운트 시에만 실행되도록 함

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      {
        threshold: 0.5, // 50% 이상 보여질 때 애니메이션 실행
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.div initial="hidden" animate="visible" className={styles.container}>
      <div className={styles.skillsWrap}>
        <motion.div variants={slideInFromTop} className={styles.skillsTextWrap}>
          <div className={styles.skillsTitle}>Skills</div>
          <div className={styles.skillsDesc}>
            아래의 Skills는 제가 주로 사용하는 기술 나열 입니다.
          </div>
        </motion.div>

        <div className={styles.skillListWrap}>
          <motion.div variants={slideInFromLeft(0.5)}>
            <div
              className={styles.skillWrap}
              style={{
                minHeight: "450px",
              }}
            >
              <div className={styles.skilTitle}>Frontend</div>
              <div className={styles.skillList}>
                <div className={styles.skill}>
                  <Image
                    alt="nextjs"
                    src={"/skills/nextjs.png"}
                    width={24}
                    height={24}
                  />
                  Nextjs
                </div>
                <div className={styles.skill}>
                  <Image
                    alt="react"
                    src={"/skills/react.svg"}
                    width={24}
                    height={24}
                  />
                  React
                </div>
                <div className={styles.skill}>
                  <Image
                    alt="threejs"
                    src={"/skills/threejs.svg"}
                    width={24}
                    height={24}
                  />
                  Threejs
                </div>
                <div className={styles.skill}>
                  <Image
                    alt="html5"
                    src={"/skills/html5.svg"}
                    width={24}
                    height={24}
                  />
                  HTML
                </div>
                <div className={styles.skill}>
                  <Image
                    alt="css"
                    src={"/skills/css3.svg"}
                    width={24}
                    height={24}
                  />
                  CSS
                </div>
                <div className={styles.skill}>
                  <Image
                    alt="tailwindcss"
                    src={"/skills/tailwindcss.svg"}
                    width={24}
                    height={24}
                  />
                  Tailwindcss
                </div>
                <div className={styles.skill}>
                  <Image
                    alt="javascript"
                    src={"/skills/javascript.svg"}
                    width={24}
                    height={24}
                  />
                  Javascript
                </div>
                <div className={styles.skill}>
                  <Image
                    alt="typescript"
                    src={"/skills/typescript.svg"}
                    width={24}
                    height={24}
                  />
                  Typescript
                </div>
                <div className={styles.skill}>
                  <Image
                    alt="redux"
                    src={"/skills/redux.svg"}
                    width={24}
                    height={24}
                  />
                  Redux
                </div>
                <div className={styles.skill}>
                  <Image
                    alt="reactquery"
                    src={"/skills/reactquery.svg"}
                    width={24}
                    height={24}
                  />
                  React query
                </div>
                <div className={styles.skill}>
                  <Image
                    alt="recoil"
                    src={"/skills/recoil.svg"}
                    width={24}
                    height={24}
                  />
                  Recoil
                </div>
                <div className={styles.skill}>
                  <Image
                    alt="antd"
                    src={"/skills/antd.png"}
                    width={24}
                    height={24}
                  />
                  Antd
                </div>
                <div className={styles.skill}>
                  <Image
                    alt="mui"
                    src={"/skills/mui.svg"}
                    width={24}
                    height={24}
                  />
                  MUI
                </div>
                <div className={styles.skill}>
                  <Image
                    alt="bootstrap"
                    src={"/skills/bootstrap.svg"}
                    width={24}
                    height={24}
                  />
                  Bootstrap
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={slideInFromRight(0.5)}>
            <div
              className={styles.skillWrap}
              style={{
                minHeight: "450px",
              }}
            >
              <div className={styles.skilTitle}>Backend</div>
              <div className={styles.skillList}>
                <div className={styles.skill}>
                  <Image
                    alt="spring"
                    src={"/skills/spring.svg"}
                    width={24}
                    height={24}
                  />
                  Java
                </div>
                <div className={styles.skill}>
                  <Image
                    alt="nodejs"
                    src={"/skills/nodejs.svg"}
                    width={24}
                    height={24}
                  />
                  Nodejs
                </div>{" "}
                <div className={styles.skill}>
                  <Image
                    alt="express"
                    src={"/skills/express.png"}
                    width={24}
                    height={24}
                  />
                  Express
                </div>
                <div className={styles.skill}>
                  <Image
                    alt="firebase"
                    src={"/skills/firebase.svg"}
                    width={24}
                    height={24}
                  />
                  Firebase
                </div>
                <div className={styles.skill}>
                  <Image
                    alt="redis"
                    src={"/skills/redis.svg"}
                    width={24}
                    height={24}
                  />
                  Redis
                </div>
                <div className={styles.skill}>
                  <Image
                    alt="elasticsearch"
                    src={"/skills/elasticsearch.svg"}
                    width={24}
                    height={24}
                  />
                  Elastic search
                </div>
                <div className={styles.skill}>
                  <Image
                    alt="graphql"
                    src={"/skills/graphql.svg"}
                    width={24}
                    height={24}
                  />
                  Graphql
                </div>
                <div className={styles.skill}>
                  <Image
                    alt="mysql"
                    src={"/skills/mysql.svg"}
                    width={24}
                    height={24}
                  />
                  Mysql
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className={styles.skillListWrap}>
          <motion.div variants={slideInFromLeft(0.5)}>
            <div
              className={styles.skillWrap}
              style={{
                minHeight: "370px",
              }}
            >
              <div className={styles.skilTitle}>With</div>
              <div className={styles.skillList}>
                <div className={styles.skill}>
                  <Image
                    alt="chatgpt"
                    src={"/skills/chatgpt.png"}
                    width={24}
                    height={24}
                  />
                  Chatgpt
                </div>
                <div className={styles.skill}>
                  <Image
                    alt="git"
                    src={"/skills/git.svg"}
                    width={24}
                    height={24}
                  />
                  Git
                </div>
                <div className={styles.skill}>
                  <Image
                    alt="github"
                    src={"/skills/github.png"}
                    width={24}
                    height={24}
                  />
                  Github
                </div>

                <div className={styles.skill}>
                  <Image
                    alt="netlify"
                    src={"/skills/netlify.svg"}
                    width={24}
                    height={24}
                  />
                  Netlify
                </div>

                <div className={styles.skill}>
                  <Image
                    alt="docker"
                    src={"/skills/docker.svg"}
                    width={24}
                    height={24}
                  />
                  Docker
                </div>
                <div className={styles.skill}>
                  <Image
                    alt="jenkins"
                    src={"/skills/jenkins.svg"}
                    width={24}
                    height={24}
                  />
                  Jenkins
                </div>

                <div className={styles.skill}>
                  <Image
                    alt="vscode"
                    src={"/skills/vscode.svg"}
                    width={24}
                    height={24}
                  />
                  VS Code
                </div>
                <div className={styles.skill}>
                  <Image
                    alt="figma"
                    src={"/skills/figma.svg"}
                    width={24}
                    height={24}
                  />
                  Figma
                </div>

                <div className={styles.skill}>
                  <Image
                    alt="jira"
                    src={"/skills/jira.svg"}
                    width={24}
                    height={24}
                  />
                  Jira
                </div>

                <div className={styles.skill}>
                  <Image
                    alt="confluence"
                    src={"/skills/confluence.svg"}
                    width={24}
                    height={24}
                  />
                  Confluence
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={slideInFromRight(0.5)}>
            <div
              className={styles.skillWrap}
              style={{
                minHeight: "370px",
              }}
            >
              <div className={styles.skilTitle}>Next</div>
              <div className={styles.skillList}>
                <div className={styles.skill}>
                  <Image
                    alt="python"
                    src={"/skills/python.svg"}
                    width={24}
                    height={24}
                  />
                  Python
                </div>{" "}
                <div className={styles.skill}>
                  <Image
                    alt="tensorflow"
                    src={"/skills/tensorflow.svg"}
                    width={24}
                    height={24}
                  />
                  Tensorflow
                </div>
                <div className={styles.skill}>
                  <Image
                    alt="jupyter"
                    src={"/skills/jupyter.svg"}
                    width={24}
                    height={24}
                  />
                  Jupyter
                </div>
                <div className={styles.skill}>
                  <Image
                    alt="electron"
                    src={"/skills/electron.svg"}
                    width={24}
                    height={24}
                  />
                  Electron
                </div>
                <div className={styles.skill}>
                  <Image
                    alt="flutter"
                    src={"/skills/flutter.svg"}
                    width={24}
                    height={24}
                  />
                  Flutter
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
