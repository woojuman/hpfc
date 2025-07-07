import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center gap-12 bg-[#e3f0ff]">
      {/* 파스텔 하늘색 히어로 섹션 */}
      <section className="relative w-full min-h-[65vh] flex items-center justify-center overflow-hidden bg-[#b3d8ff]">
        {/* stadium.png (축구장) 배경 */}
        <Image
          src="/stadium.png"
          alt="축구장 배경"
          fill
          style={{ objectFit: "contain" }}
          priority
          className="z-0"
        />
        {/* main.png (로고/마스코트 등) 오버레이, 반투명 */}
        <Image
          src="/main.png"
          alt="대문 이미지"
          fill
          style={{ objectFit: "contain" }}
          priority
          className="z-10"
        />
        {/* 밝은 오버레이(투명도 낮춤) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#b3d8ff66] via-[#b3d8ff33] to-transparent z-20" />
        {/* 중앙 타이틀만 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 px-4">
          <h1
            className="text-5xl md:text-6xl font-extrabold text-[#3a6ea5] drop-shadow-2xl text-center"
            style={{ textShadow: "0 4px 24px #fff, 0 1px 0 #b3d8ff" }}
          >
            하늘평화풋살클럽
          </h1>
        </div>
        {/* 하단 소개문구 (2줄, 짧게) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 w-full flex justify-center px-4">
          <p
            className="text-base md:text-xl max-w-xl leading-relaxed text-[#22577a] font-semibold bg-[#e3f0ffcc] rounded-xl px-6 py-3 shadow-xl backdrop-blur-md text-center"
            style={{ textShadow: "0 2px 8px #fff" }}
          >
            모두가 함께 즐기는 풋살, 하늘평화풋살클럽에서 시작하세요.
            <br />
            건강한 운동과 따뜻한 교류, 지금 바로 함께해요!
          </p>
        </div>
      </section>

      {/* 카드형 주요 메뉴 */}
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-2 -mt-12 z-30 relative">
        <Link
          href="/squad"
          className="group bg-[#e3f0ff] rounded-2xl shadow-xl border-2 border-[#b3d8ff] hover:scale-105 hover:shadow-2xl transition-all flex flex-col items-center p-6 min-h-[180px]"
        >
          <span className="text-2xl font-bold text-[#3a6ea5] mb-2">
            선수단 소개
          </span>
          <span className="text-[#22577a]">
            클럽의 주요 선수 명단과 포지션을 확인하세요.
          </span>
        </Link>
        <Link
          href="/schedule"
          className="group bg-[#e3f0ff] rounded-2xl shadow-xl border-2 border-[#b3d8ff] hover:scale-105 hover:shadow-2xl transition-all flex flex-col items-center p-6 min-h-[180px]"
        >
          <span className="text-2xl font-bold text-[#3a6ea5] mb-2">
            시합 일정
          </span>
          <span className="text-[#22577a]">다가오는 경기 일정을 한눈에!</span>
        </Link>
        <Link
          href="/board"
          className="group bg-[#e3f0ff] rounded-2xl shadow-xl border-2 border-[#b3d8ff] hover:scale-105 hover:shadow-2xl transition-all flex flex-col items-center p-6 min-h-[180px]"
        >
          <span className="text-2xl font-bold text-[#3a6ea5] mb-2">게시판</span>
          <span className="text-[#22577a]">공지사항 및 소식을 확인하세요.</span>
        </Link>
        <Link
          href="/join"
          className="group bg-[#e3f0ff] rounded-2xl shadow-xl border-2 border-[#b3d8ff] hover:scale-105 hover:shadow-2xl transition-all flex flex-col items-center p-6 min-h-[180px]"
        >
          <span className="text-2xl font-bold text-[#3a6ea5] mb-2">
            가입 문의
          </span>
          <span className="text-[#22577a]">가입 및 문의는 이곳에서!</span>
        </Link>
      </section>

      {/* 클럽 비전/연혁 카드 */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-2">
        <div className="bg-[#b3d8ff]/80 rounded-2xl p-8 shadow-2xl border border-[#3a6ea5] flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-2 text-[#3a6ea5] drop-shadow-lg">
            클럽 비전
          </h2>
          <ul className="list-disc list-inside text-left text-[#22577a]">
            <li>건강한 신체와 밝은 마음을 함께!</li>
            <li>공정한 경기, 즐거운 소통</li>
            <li>지역사회와 함께 성장하는 클럽</li>
          </ul>
        </div>
        <div className="bg-[#b3d8ff]/80 rounded-2xl p-8 shadow-2xl border border-[#3a6ea5] flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-2 text-[#3a6ea5] drop-shadow-lg">
            연혁
          </h2>
          <ul className="list-disc list-inside text-left text-[#22577a]">
            <li>2024년 3월: 하늘평화풋살클럽 창단</li>
            <li>2024년 4월: 첫 공식 시합 개최</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
