"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Header() {
  // 메뉴 상태를 관리하기 위한 상태 변수와 설정 함수
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      // 화면 너비가 768픽셀 이상일 경우 메뉴를 자동으로 닫음
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    }

    // resize 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // 컴포넌트가 언마운트 될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // 빈 배열을 넘겨주어 컴포넌트가 마운트될 때만 이펙트 실행

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div
          style={{
            color: "var(--primary-color)",
            fontSize: "1.5rem",
          }}
          className="text-lg font-bold"
        >
          {`어쩌다 개발자`}
        </div>
        <div>
          <button
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <nav
            className={`${isMenuOpen ? styles.menuHamburger : styles.hidden} ${
              styles.menu
            }`}
          >
            <Link href="#aboutMe" className={styles.link}>
              About
            </Link>
            <Link href="#skills" className={styles.link}>
              Skills
            </Link>
            <Link href="#projects" className={styles.link}>
              Projects{" "}
            </Link>
            <Link href="#guide-line" className={styles.link}>
              <div
                style={{
                  color: "var(--primary-color)",
                }}
              >
                어쩌다 부루마블
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
