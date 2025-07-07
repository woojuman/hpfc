import Image from "next/image";

function RadarChart({ stats }: { stats: number[] }) {
  // stats: [패스, 슛, 수비, 체력, 스피드, 팀워크] (0~100)
  const angles = stats.map((_, i) => (Math.PI / 3) * i - Math.PI / 2);
  const points = stats
    .map((v, i) => {
      const r = 60 * (v / 100);
      const x = 70 + r * Math.cos(angles[i]);
      const y = 70 + r * Math.sin(angles[i]);
      return `${x},${y}`;
    })
    .join(" ");
  const axis = angles.map((a) => [
    70,
    70,
    70 + 60 * Math.cos(a),
    70 + 60 * Math.sin(a),
  ]);
  return (
    <svg width={140} height={140} className="my-2">
      {/* 육각형 틀 */}
      <polygon
        points={angles
          .map((a) => `${70 + 60 * Math.cos(a)},${70 + 60 * Math.sin(a)}`)
          .join(" ")}
        fill="#b3d8ff33"
        stroke="#3a6ea5"
        strokeWidth={2}
      />
      {/* 축 */}
      {axis.map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#3a6ea5"
          strokeWidth={1}
        />
      ))}
      {/* 능력치 영역 */}
      <polygon
        points={points}
        fill="#3a6ea5aa"
        stroke="#22577a"
        strokeWidth={2}
      />
      {/* 라벨 */}
      {[
        [
          "패스",
          70 + 75 * Math.cos(angles[0]),
          70 + 75 * Math.sin(angles[0]) - 5,
        ],
        ["슛", 70 + 75 * Math.cos(angles[1]), 70 + 75 * Math.sin(angles[1])],
        [
          "수비",
          70 + 75 * Math.cos(angles[2]),
          70 + 75 * Math.sin(angles[2]) + 5,
        ],
        [
          "체력",
          70 + 75 * Math.cos(angles[3]),
          70 + 75 * Math.sin(angles[3]) + 5,
        ],
        [
          "스피드",
          70 + 75 * Math.cos(angles[4]),
          70 + 75 * Math.sin(angles[4]),
        ],
        [
          "팀워크",
          70 + 75 * Math.cos(angles[5]),
          70 + 75 * Math.sin(angles[5]) - 5,
        ],
      ].map(([label, x, y]) => (
        <text
          key={label as string}
          x={x as number}
          y={y as number}
          fontSize={"0.85rem"}
          fill="#22577a"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {label}
        </text>
      ))}
    </svg>
  );
}

export default function Squad() {
  return (
    <section className="flex flex-col items-center gap-8 text-center">
      <h1 className="text-3xl font-bold mb-4 text-[#3a6ea5]">선수단 소개</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {/* 이한빈 선수 프로필 카드 */}
        <div className="bg-[#e3f0ff] rounded-2xl shadow-xl border-2 border-[#b3d8ff] flex flex-col items-center p-6">
          <div className="w-40 h-40 relative mb-4">
            <Image
              src="/lee.png"
              alt="이한빈 선수"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl border-4 border-[#3a6ea5] shadow-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#3a6ea5] mb-1">이한빈</h2>
          <div className="text-lg font-semibold text-[#22577a] mb-2">
            MF (미드필더)
          </div>
          <p className="text-[#22577a] mb-2">
            풋살마스터, 팀의 중심을 잡아주는 플레이메이커
          </p>
          <RadarChart stats={[95, 80, 70, 85, 88, 92]} />
        </div>
        {/* 추가 선수 카드 예시 */}
        <div className="bg-[#e3f0ff] rounded-2xl shadow-xl border-2 border-[#b3d8ff] flex flex-col items-center p-6">
          <div className="w-40 h-40 relative mb-4">
            <Image
              src="/lee2.png"
              alt="이승재 구단주"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl border-4 border-[#3a6ea5] shadow-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#3a6ea5] mb-1">이승재</h2>
          <div className="text-lg font-semibold text-[#22577a] mb-2">
            FW (수비수)
          </div>
          <p className="text-[#22577a] mb-2">
            클럽 주장, 철통 수은 방어가 장점
          </p>
          <RadarChart stats={[70, 50, 60, 80, 95, 85]} />
        </div>
        <div className="bg-[#e3f0ff] rounded-2xl shadow-xl border-2 border-[#b3d8ff] flex flex-col items-center p-6">
          <div className="w-40 h-40 relative mb-4">
            <Image
              src="/logo.png"
              alt="이승재 선수"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl border-4 border-[#3a6ea5] shadow-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#3a6ea5] mb-1">이승재</h2>
          <div className="text-lg font-semibold text-[#22577a] mb-2">
            GK (골키퍼)
          </div>
          <p className="text-[#22577a] mb-2">철벽 수문장</p>
          <RadarChart stats={[60, 65, 95, 90, 70, 80]} />
        </div>
        <div className="bg-[#e3f0ff] rounded-2xl shadow-xl border-2 border-[#b3d8ff] flex flex-col items-center p-6">
          <div className="w-40 h-40 relative mb-4">
            <Image
              src="/logo.png"
              alt="이승재 선수"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl border-4 border-[#3a6ea5] shadow-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#3a6ea5] mb-1">이승재</h2>
          <div className="text-lg font-semibold text-[#22577a] mb-2">
            GK (골키퍼)
          </div>
          <p className="text-[#22577a] mb-2">철벽 수문장</p>
          <RadarChart stats={[60, 65, 95, 90, 70, 80]} />
        </div>
        <div className="bg-[#e3f0ff] rounded-2xl shadow-xl border-2 border-[#b3d8ff] flex flex-col items-center p-6">
          <div className="w-40 h-40 relative mb-4">
            <Image
              src="/logo.png"
              alt="이승재 선수"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl border-4 border-[#3a6ea5] shadow-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#3a6ea5] mb-1">이승재</h2>
          <div className="text-lg font-semibold text-[#22577a] mb-2">
            GK (골키퍼)
          </div>
          <p className="text-[#22577a] mb-2">철벽 수문장</p>
          <RadarChart stats={[60, 65, 95, 90, 70, 80]} />
        </div>
      </div>
    </section>
  );
}
