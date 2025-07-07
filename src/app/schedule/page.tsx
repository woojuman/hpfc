export default function Schedule() {
  return (
    <section className="flex flex-col items-center gap-8 text-center">
      <h1 className="text-3xl font-bold mb-4 text-[#ffd966]">시합 일정</h1>
      <table className="w-full max-w-2xl mx-auto border border-[#ffb82e] bg-[#5a1e08]/80 rounded-lg text-[#fff2c7]">
        <thead>
          <tr className="bg-[#7a2e0e] text-[#ffb82e]">
            <th className="py-2 px-4">날짜</th>
            <th className="py-2 px-4">상대팀</th>
            <th className="py-2 px-4">장소</th>
            <th className="py-2 px-4">비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4">2024-06-15</td>
            <td className="py-2 px-4">평화FC</td>
            <td className="py-2 px-4">하늘구장</td>
            <td className="py-2 px-4">친선전</td>
          </tr>
          <tr>
            <td className="py-2 px-4">2024-07-06</td>
            <td className="py-2 px-4">드림SC</td>
            <td className="py-2 px-4">드림구장</td>
            <td className="py-2 px-4">리그전</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
