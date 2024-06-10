import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Frontend Mastery Course</title>
      </Head>
      <main className="bg-black text-white min-h-screen p-4">
        <div className="pt-4 pb-4 mb-4 mt-4">
          <h1 className="text-4xl font-bold  text-center">
            <span className="text-yellow-500">어쩌다 부루마블</span>
          </h1>{" "}
          <h1 className="text-4xl font-bold text-center">
            취업 준비에 첫번째 무료 과정!! 🧭🧭
          </h1>
          <div className="text-center">
            <em>개발자로서 취업준빈에 대한 가이드가 필요하신 분</em>
          </div>{" "}
          <div className="text-center">
            <em>본인의 이력서에 한줄이라도 더 넣고 싶은 분</em>
          </div>{" "}
          <div className="text-center">
            <em>대학생, 비전공자, 개발자를 꿈꾸는 모든 분 </em>
          </div>
        </div>
        <section id="step1" className="p-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">
              첫번째, GitHub: 개인 브랜딩의 시작
            </h2>
            <p className="mb-6">
              <span className="text-yellow-500 font-bold">{`<어쩌다개발자 />`}</span>
              인 본인도 다수의 면접을 진행 했지만, 이력서에 씌여진 URL(
              <span className="text-yellow-500 font-bold">
                깃헙 페이지
              </span>,{" "}
              <span className="text-yellow-500 font-bold">개인 포트폴리오</span>
              )를 가장 먼저 들어가는 경험이 매우 많습니다. 그만큼 개발자 서류
              전형에서 대학생 시절 부터 객관적으로 증명할 수 있는 데이터이며,
              특히 본인의{" "}
              <span className="text-yellow-500 font-bold">프로젝트 관리</span>,
              다른 동료들과의{" "}
              <span className="text-yellow-500 font-bold">협업</span>, 꾸준히
              공부했던{" "}
              <span className="text-yellow-500 font-bold">성실함, 꾸준함</span>
              을 한번에 증명 할 수 있는{" "}
              <span className="text-yellow-500 font-bold">기회</span>라고 생각
              합니다. 우리는 이러한 좋은{" "}
              <span className="text-yellow-500 font-bold">기회</span>를 하루
              빨리{" "}
              <span className="text-yellow-500 font-bold">
                실천하고 꾸준하게
              </span>{" "}
              본인을 브랜딩화 하도록 해보아요. 🚀🚀
            </p>
            <ul className="list-inside mb-4">
              <li>🔥 버전 관리의 중요성 이해하기</li>
              <li>🔥 프로젝트에 대한 협업과 피드백 개선</li>
              <li>🔥 개인 포트폴리오 구축과 전문성 강화</li>
              <li>🔥 오픈 소스 프로젝트에 기여하며 네트워킹</li>
            </ul>
            <img
              src="/images/github-guide.jpg"
              alt="GitHub Guide"
              className="w-full rounded-lg mb-4 shadow-lg"
            />
          </div>
        </section>

        <section id="step2" className="p-4">
          <div className="">
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">
              첫번째, HTML, CSS, JavaScript 따라해보기
            </h2>
            <p className="mb-6">
              웹 개발의 기초를 다지는 이 섹션에서는 HTML 구조, CSS 스타일링 및
              JavaScript 기능에 대해 배웁니다.
            </p>
            <img
              src="/images/web-dev-basics.jpg"
              alt="Web Development Basics"
              className="w-full rounded-lg mb-4 shadow-lg"
            />
          </div>
        </section>

        <section id="step3" className="p-4">
          <div className="">
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">
              첫번째, 토이 프로젝트 생성 및 정리
            </h2>
            <p className="mb-6">
              실제로 간단한 웹 애플리케이션을 만들면서 배운 내용을 적용해보세요.
              완성된 프로젝트는 GitHub에 공유하게 됩니다.
            </p>
            <img
              src="/images/toy-project.jpg"
              alt="Toy Project"
              className="w-full rounded-lg mb-4 shadow-lg"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
