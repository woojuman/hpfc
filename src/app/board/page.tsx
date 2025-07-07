export default function Board() {
  return (
    <section className="flex flex-col items-center gap-8 text-center">
      <h1 className="text-3xl font-bold mb-4 text-[#ffd966]">게시판</h1>
      <ul className="w-full max-w-2xl mx-auto bg-[#5a1e08]/80 rounded-lg text-[#fff2c7] divide-y divide-[#ffb82e]/30">
        <li className="py-4 px-6 text-left">
          <span className="font-semibold text-[#ffb82e]">[공지]</span> 6월 15일
          시합 참가 신청 받습니다!
        </li>
        <li className="py-4 px-6 text-left">
          <span className="font-semibold text-[#ffb82e]">[공지]</span> 신규 회원
          모집 중입니다.
        </li>
      </ul>
    </section>
  );
}
