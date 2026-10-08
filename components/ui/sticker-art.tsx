/* Flat die-cut sticker illustrations used as zero-upload fallbacks on the MAT surfaces. */

export function KeyboardArt({ w = 460 }: { w?: number }) {
  const rows = [14, 14, 13, 12]
  return (
    <svg width={w} height={w * 0.36} viewBox="0 0 460 166" aria-hidden>
      <rect x="2" y="2" width="456" height="162" rx="16" fill="#d7d8da" stroke="#b9bbbe" strokeWidth="2" />
      <rect x="10" y="10" width="440" height="146" rx="10" fill="#e9eaec" />
      {rows.map((count, r) => {
        const gap = 4
        const keyW = (424 - gap * (count - 1)) / count
        return Array.from({ length: count }).map((_, i) => (
          <rect key={`${r}-${i}`} x={18 + i * (keyW + gap)} y={18 + r * 28} width={keyW} height={24} rx="4" fill="#fbfbfc" stroke="#d1d2d5" />
        ))
      })}
      <rect x="18" y="130" width="40" height="20" rx="4" fill="#fbfbfc" stroke="#d1d2d5" />
      <rect x="62" y="130" width="40" height="20" rx="4" fill="#fbfbfc" stroke="#d1d2d5" />
      <rect x="106" y="130" width="230" height="20" rx="4" fill="#fbfbfc" stroke="#d1d2d5" />
      <rect x="340" y="130" width="40" height="20" rx="4" fill="#fbfbfc" stroke="#d1d2d5" />
      <rect x="386" y="140" width="22" height="10" rx="2" fill="#fbfbfc" stroke="#d1d2d5" />
      <rect x="410" y="130" width="22" height="10" rx="2" fill="#fbfbfc" stroke="#d1d2d5" />
      <rect x="410" y="140" width="22" height="10" rx="2" fill="#fbfbfc" stroke="#d1d2d5" />
      <rect x="434" y="140" width="0" height="10" />
    </svg>
  )
}

export function EarphonesArt({ w = 260 }: { w?: number }) {
  return (
    <svg width={w} height={w * 1.05} viewBox="0 0 260 272" aria-hidden fill="none">
      <path
        d="M70 40 C40 70 20 120 60 150 C110 186 170 120 130 100 C90 80 40 150 90 190 C130 222 210 196 200 150 C190 104 120 140 150 180 C170 206 220 230 210 262"
        stroke="#f5f5f2"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path d="M150 34 C130 80 160 120 120 150" stroke="#f5f5f2" strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="74" cy="30" rx="26" ry="22" fill="#fafaf8" stroke="#d5d5d0" strokeWidth="2" />
      <ellipse cx="80" cy="28" rx="10" ry="8" fill="#cfcfca" />
      <ellipse cx="156" cy="26" rx="26" ry="22" fill="#fafaf8" stroke="#d5d5d0" strokeWidth="2" />
      <ellipse cx="150" cy="24" rx="10" ry="8" fill="#cfcfca" />
      <rect x="203" y="250" width="14" height="22" rx="3" fill="#cfcfca" />
    </svg>
  )
}

export function MouseArt({ w = 150 }: { w?: number }) {
  return (
    <svg width={w} height={w * 1.6} viewBox="0 0 150 240" aria-hidden>
      <path d="M75 0 C70 -10 70 -10 75 0" />
      <rect x="6" y="20" width="138" height="214" rx="69" fill="#fbfbfa" stroke="#d8d8d3" strokeWidth="2" />
      <path d="M75 22 V96" stroke="#d8d8d3" strokeWidth="2" />
      <rect x="66" y="44" width="18" height="30" rx="9" fill="#ececea" stroke="#d0d0cb" />
      <path d="M8 104 C40 112 110 112 142 104" stroke="#ececea" strokeWidth="2" fill="none" />
    </svg>
  )
}

export function HeadphonesArt({ w = 230 }: { w?: number }) {
  return (
    <svg width={w} height={w} viewBox="0 0 230 230" aria-hidden>
      <path d="M40 130 C30 40 200 40 190 130" fill="none" stroke="#1d1d1d" strokeWidth="18" strokeLinecap="round" />
      <path d="M40 130 C30 40 200 40 190 130" fill="none" stroke="#5a5a5a" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
      <rect x="18" y="118" width="58" height="92" rx="26" fill="#262626" />
      <rect x="30" y="130" width="34" height="68" rx="16" fill="#3a3a3a" />
      <rect x="154" y="118" width="58" height="92" rx="26" fill="#262626" />
      <rect x="166" y="130" width="34" height="68" rx="16" fill="#3a3a3a" />
      <path d="M190 40 L196 54 L211 55 L199 64 L204 79 L190 70 L176 79 L181 64 L169 55 L184 54 Z" fill="#FF3B1F" />
      <path d="M36 196 L40 205 L50 206 L42 212 L45 222 L36 216 L27 222 L30 212 L22 206 L32 205 Z" fill="#FF3B1F" />
      <path d="M120 60 L124 72" stroke="#FF3B1F" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

export function CameraArt({ w = 260 }: { w?: number }) {
  return (
    <svg width={w} height={w * 0.95} viewBox="0 0 260 248" aria-hidden>
      <path d="M20 40 Q20 10 50 10 H210 Q240 10 240 40 V150 H20 Z" fill="#f2efe2" stroke="#d4d0bf" strokeWidth="2" />
      <rect x="20" y="150" width="220" height="90" rx="10" fill="#1d1d1d" />
      <rect x="40" y="200" width="180" height="10" rx="5" fill="#0c0c0c" />
      <text x="56" y="180" fontFamily="var(--font-space-mono)" fontSize="15" fill="#e8e5d5" letterSpacing="2">
        POLAROID LAND
      </text>
      <rect x="44" y="34" width="72" height="44" rx="6" fill="#1d1d1d" />
      <text x="54" y="64" fontFamily="var(--font-space-mono)" fontSize="22" fill="#f2efe2">
        1000
      </text>
      <circle cx="80" cy="112" r="22" fill="#20b04b" stroke="#127a32" strokeWidth="3" />
      <circle cx="176" cy="84" r="46" fill="#1d1d1d" />
      <circle cx="176" cy="84" r="30" fill="#2c2c2c" />
      <circle cx="166" cy="74" r="8" fill="#5a5a5a" />
      <rect x="208" y="20" width="22" height="14" rx="3" fill="#FF3B1F" />
    </svg>
  )
}

export function WatchArt({ w = 170 }: { w?: number }) {
  return (
    <svg width={w} height={w * 2} viewBox="0 0 170 340" aria-hidden>
      <rect x="45" y="0" width="80" height="120" rx="20" fill="#2a2a2a" />
      <rect x="45" y="220" width="80" height="120" rx="20" fill="#2a2a2a" />
      <circle cx="85" cy="300" r="6" fill="#1a1a1a" />
      <circle cx="85" cy="272" r="6" fill="#1a1a1a" />
      <rect x="20" y="100" width="130" height="140" rx="34" fill="#b9a68a" />
      <rect x="30" y="110" width="110" height="120" rx="26" fill="#121212" />
      <rect x="150" y="146" width="10" height="24" rx="4" fill="#9c8b72" />
      <text x="85" y="176" textAnchor="middle" fontFamily="var(--font-space-mono)" fontSize="22" fill="#FFE500">
        10:15
      </text>
    </svg>
  )
}

export function MarkerArt({ w = 90 }: { w?: number }) {
  return (
    <svg width={w} height={w * 2.6} viewBox="0 0 90 234" aria-hidden>
      <path d="M30 0 H52 L60 40 H22 Z" fill="#111" />
      <rect x="14" y="40" width="62" height="70" rx="8" fill="#1d1d1d" />
      <rect x="14" y="104" width="62" height="130" rx="10" fill="#3f6b78" />
      <rect x="22" y="120" width="10" height="96" rx="5" fill="#5b8c99" opacity="0.7" />
    </svg>
  )
}

export function PlayBadgeArt({ w = 220 }: { w?: number }) {
  return (
    <svg width={w} height={w * 0.7} viewBox="0 0 220 154" aria-hidden>
      <rect x="4" y="4" width="212" height="146" rx="42" fill="#E8261C" />
      <path d="M86 46 L150 77 L86 108 Z" fill="#fff" />
    </svg>
  )
}

/* ---------- Before-slide badges ---------- */
export function PSBadge({ size = 240 }: { size?: number }) {
  return (
    <div
      className="grid place-items-center rounded-[22%] border-[6px] border-[#31a8ff] bg-[#001e36]"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <span className="font-sticker text-[#31a8ff]" style={{ fontSize: size * 0.42, fontWeight: 700, letterSpacing: '-0.04em' }}>
        Ps
      </span>
    </div>
  )
}

export function PixelSprite({ size = 240 }: { size?: number }) {
  const map = [
    '....kkkk....',
    '...kyyyyk...',
    '..kyyyyyyk..',
    '..kyykykyk..',
    '..kyyyyyyk..',
    '...kyrryk...',
    '..kkyyyykk..',
    '.kggkyykggk.',
    '.kggggggggk.',
    '..kggggggk..',
    '..kbbkkbbk..',
    '..kkk..kkk..',
  ]
  const colors: Record<string, string> = { k: '#111', y: '#FFE500', r: '#FF3B1F', g: '#3D8B43', b: '#5B3A21' }
  const cell = size / 12
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="bg-[#f6f1dc]" aria-hidden shapeRendering="crispEdges">
      {map.flatMap((row, y) =>
        row.split('').map((c, x) => (c === '.' ? null : <rect key={`${x}-${y}`} x={x * cell} y={y * cell} width={cell} height={cell} fill={colors[c]} />)),
      )}
    </svg>
  )
}

export function MiniUIFrame({ w = 300 }: { w?: number }) {
  return (
    <div className="overflow-hidden rounded-[18px] border-2 border-ink bg-white" style={{ width: w, height: w * 0.8 }} aria-hidden>
      <div className="flex items-center gap-1.5 border-b-2 border-ink px-3 py-2">
        <span className="size-2.5 rounded-full bg-red" />
        <span className="size-2.5 rounded-full bg-yellow" />
        <span className="size-2.5 rounded-full bg-lime" />
        <span className="mono ml-2 text-[10px] text-ink/60">frame_01</span>
      </div>
      <div className="grid grid-cols-[1fr_2fr] gap-2.5 p-3">
        <div className="space-y-2">
          <div className="h-3 rounded bg-ink/80" />
          <div className="h-3 w-4/5 rounded bg-ink/20" />
          <div className="h-3 w-3/5 rounded bg-ink/20" />
          <div className="h-3 w-4/5 rounded bg-ink/20" />
        </div>
        <div className="space-y-2.5">
          <div className="h-[86px] rounded-lg bg-purple" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-12 rounded-lg bg-lime" />
            <div className="h-12 rounded-lg bg-orange" />
          </div>
          <div className="relative h-6 w-1/2 rounded-full bg-ink">
            <span className="absolute -right-2 -bottom-4 size-6 rotate-[-20deg] border-2 border-dashed border-[#0d99ff]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function IllustrationDoodle({ size = 240 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 240 240" className="bg-white" aria-hidden fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="120" cy="112" r="70" fill="#FFE500" />
      <path d="M78 96 C84 86 96 86 102 96" stroke="#111" strokeWidth="6" />
      <path d="M138 96 C144 86 156 86 162 96" stroke="#111" strokeWidth="6" />
      <path d="M88 134 C104 156 138 156 154 134" stroke="#111" strokeWidth="6" />
      <path d="M60 60 C48 30 80 24 84 48" stroke="#111" strokeWidth="5" />
      <path d="M180 60 C192 30 160 24 156 48" stroke="#111" strokeWidth="5" />
      <path d="M40 210 C80 190 160 190 200 210" stroke="#3D8B43" strokeWidth="6" />
      <path d="M196 30 L202 44 L216 46 L206 56 L208 70 L196 62 L184 70 L186 56 L176 46 L190 44 Z" fill="#FF3B1F" />
    </svg>
  )
}
