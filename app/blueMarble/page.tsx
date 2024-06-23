import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Frontend Mastery Course</title>
      </Head>
      <main className="bg-black text-white min-h-screen p-4">
        <div className="pt-4 pb-4 mb-4 mt-4">
          <h1 className="text-5xl font-bold text-center m-2">
            <span className="text-yellow-500">어쩌다 부루마블</span>
          </h1>{" "}
          <h1 className="text-3xl font-bold text-center mb-4">
            취업 준비에 첫번째 무료 과정!! 🧭🧭
          </h1>
          <div className="text-center">
            <div>
              <strong>
                ⭐️<em> 개발자로서 취업 준비 가이드가 필요하신 분</em>
              </strong>
            </div>{" "}
            <div>
              <strong>
                ⭐️ <em> 본인의 이력서에 한줄이라도 더 넣고 싶은 분</em>{" "}
              </strong>
            </div>{" "}
            <div>
              <strong>
                ⭐️ <em> 대학생, 비전공자, 개발자를 꿈꾸는 모든 분</em>{" "}
              </strong>
            </div>
          </div>
        </div>

        <section id="step1" className="p-4 mb-12">
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
              <li>🔥 자신의 브랜딩</li>
              <li>🔥 버전 관리의 중요성 이해하기</li>
              <li>🔥 Github 프로필 페이지 관리</li>
            </ul>
            <div className="relative w-full h-[250px] sm:h-[500px] mb-4">
              <Image
                src={"/bluemarble/github.png"}
                alt="github"
                layout="fill"
                objectFit="container"
                priority={true}
              />
            </div>
            <div className="relative w-full h-[250px] sm:h-[500px] ">
              <Image
                src={"/bluemarble/github2.png"}
                alt="github2"
                layout="fill"
                objectFit="container"
                priority={true}
              />
            </div>
          </div>
        </section>

        <div className="w-full h-[1px] border-b border-yellow-500 mb-8"></div>

        <section id="step2" className="p-4 mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">
              두번째, 바로 따라 해보는 HTML, CSS, JAVASCRIPT
            </h2>
            <p className="mb-6">
              <span className="text-yellow-500 font-bold">
                처음부터 HTML, CSS, JAVASCRIPT를 A - Z까지 언제 배우지??
              </span>{" "}
              개발자 생활을 해보니 실제로{" "}
              <span className="text-yellow-500 font-bold">
                개념 공부를 해서 얻는 지식 보다는 프로젝트를 해보면서 얻은
                지식의 가치
              </span>
              가 훨씬 크고 머리에 오래 남는다는 것을 깨달았습니다. 많은 강의에서
              꼭 본인이 직접 타이핑 하여 따라해보라는 강사분들의 말이 전부 같은
              의미라고 생각 합니다. 그리고 단순 따라해보는게 아니라 본인의
              프로젝트로 남을수 있게끔 프로젝트를 관리하고 문서작업은 어떻게
              하는지 실제로 배울수 있는 기회가 될 것 입니다.
            </p>
            <ul className="list-inside mb-4">
              <li>🔥 포트폴리오 프로젝트</li>
              <li>🔥 프로젝트 관리 및 문서 작성법</li>
              <li>🔥 Git commit 메세지 작성법</li>
            </ul>
            <div className="relative w-full h-[250px] sm:h-[500px] mb-4">
              <Image
                src={"/bluemarble/html.png"}
                alt="html"
                layout="fill"
                objectFit="container"
                priority={true}
              />
            </div>
            <div className="relative w-full h-[250px] sm:h-[500px] ">
              <Image
                src={"/bluemarble/html2.png"}
                alt="html2"
                layout="fill"
                objectFit="container"
                priority={true}
              />
            </div>
          </div>
        </section>

        <div className="w-full h-[1px] border-b border-yellow-500 mb-8"></div>

        <section id="step3" className="p-4 mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">
              세번째, 프론트엔드 핵심 개발 기술 - React
            </h2>
            <p className="mb-6">
              <span className="text-yellow-500 font-bold">React</span>는 현대 웹
              개발의 주축이며, 많은 기업이 이 기술을 요구합니다. 이 섹션에서는
              <span className="text-yellow-500 font-bold">
                React의 공식 문서
              </span>
              를 기반으로 기초부터 시작해, 실제 프로젝트에 적용하는 과정을
              배웁니다.{" "}
              <span className="text-yellow-500 font-bold">
                상태 관리, 라우팅, 그리고 고급 컴포넌트 디자인{" "}
              </span>
              을 통해, 실제로 사용되는 React 애플리케이션을 만드는 법을 익힐 수
              있습니다.
            </p>
            <ul className="list-inside mb-4">
              <li>🔥 REACT 공식 문서 파헤치기</li>
              <li>🔥 컴포넌트 기반 개발</li>
              <li>🔥 React Hooks 사용하기</li>
              <li>🔥 상태 관리 및 라우팅 기법 이해</li>
            </ul>
            <div className="relative w-full h-[250px] sm:h-[500px] mb-4">
              <Image
                src={"/bluemarble/react.png"}
                alt="react"
                layout="fill"
                objectFit="container"
                priority={true}
              />
            </div>
            <div className="relative w-full h-[250px] sm:h-[500px] ">
              <Image
                src={"/bluemarble/react2.png"}
                alt="react2"
                layout="fill"
                objectFit="container"
                priority={true}
              />
            </div>
          </div>
        </section>

        <div className="w-full h-[1px] border-b border-yellow-500 mb-8"></div>

        <section id="step4" className="p-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">
              네번째, 전략적인 취업 준비
            </h2>
            <p className="mb-6">
              어느덧 면접자가 아닌 면접관의 입장으로 지내오면서 축적된 데이터를
              바탕으로, 취업 시장에 성공적으로 진입하기 위해서는{" "}
              <span className="text-yellow-500 font-bold">준비</span>,{" "}
              <span className="text-yellow-500 font-bold">전략</span>이
              필요합니다. 이 섹션에서는{" "}
              <span className="text-yellow-500 font-bold">이력서 작성법</span>,
              <span className="text-yellow-500 font-bold">포트폴리오 준비</span>
              , 그리고{" "}
              <span className="text-yellow-500 font-bold">
                면접 기술 및 예상 질문
              </span>
              을 다룹니다.{" "}
              <span className="text-yellow-500 font-bold">
                이력서에 꼭 들어가야 할 내용
              </span>
              ,{" "}
              <span className="text-yellow-500 font-bold">
                면접관에게 인상 깊은 대답을 하는 방법
              </span>
              , 그리고{" "}
              <span className="text-yellow-500 font-bold">
                기술 테스트를 통과하는 전략
              </span>
              을 배웁니다.
            </p>
            <ul className="list-inside mb-4">
              <li>🔥 이력서와 포트폴리오 최적화</li>
              <li>🔥 면접 시뮬레이션과 피드백</li>
              <li>🔥 기술 면접 준비법</li>
            </ul>
            <div className="relative w-full h-[250px] sm:h-[500px] mb-4">
              <Image
                src={"/bluemarble/interview.png"}
                alt="interview"
                layout="fill"
                objectFit="container"
                priority={true}
              />
            </div>
            <div className="relative w-full h-[250px] sm:h-[500px] mb-4">
              <Image
                src={"/bluemarble/interview2.png"}
                alt="interview2"
                layout="fill"
                objectFit="container"
                priority={true}
              />
            </div>
            <div className="relative w-full h-[250px] sm:h-[500px] mb-4">
              <Image
                src={"/bluemarble/interview3.png"}
                alt="interview3"
                layout="fill"
                objectFit="container"
                priority={true}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
