export default function Join() {
  return (
    <section className="flex flex-col items-center gap-8 text-center">
      <h1 className="text-3xl font-bold mb-4 text-[#ffd966]">가입 문의</h1>
      <form className="w-full max-w-md mx-auto bg-[#5a1e08]/80 rounded-lg p-6 flex flex-col gap-4 text-left text-[#fff2c7] shadow">
        <label className="font-semibold">
          이름
          <input
            type="text"
            className="mt-1 w-full rounded px-3 py-2 bg-[#fff2c7] text-[#5a1e08]"
            placeholder="이름을 입력하세요"
            required
          />
        </label>
        <label className="font-semibold">
          연락처
          <input
            type="text"
            className="mt-1 w-full rounded px-3 py-2 bg-[#fff2c7] text-[#5a1e08]"
            placeholder="010-0000-0000"
            required
          />
        </label>
        <label className="font-semibold">
          문의 내용
          <textarea
            className="mt-1 w-full rounded px-3 py-2 bg-[#fff2c7] text-[#5a1e08]"
            rows={4}
            placeholder="문의 내용을 입력하세요"
            required
          />
        </label>
        <button
          type="submit"
          className="mt-2 bg-[#ffb82e] text-[#5a1e08] font-bold py-2 rounded hover:bg-[#ffd966] transition"
        >
          문의하기
        </button>
      </form>
    </section>
  );
}
