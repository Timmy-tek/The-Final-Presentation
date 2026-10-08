import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'

/* ---------- Three yellow window-control squares ---------- */
export function WindowControls({ size = 40, className }: { size?: number; className?: string }) {
  const s = size
  return (
    <span className={cn('inline-flex gap-[0.25em]', className)} style={{ fontSize: s }} aria-hidden>
      {(['min', 'max', 'close'] as const).map((k) => (
        <svg key={k} width={s} height={s} viewBox="0 0 40 40">
          <rect x="1.5" y="1.5" width="37" height="37" fill="#FFE500" stroke="#5B3A21" strokeWidth="3" />
          {k === 'min' && <rect x="10" y="26" width="20" height="4" fill="#5B3A21" />}
          {k === 'max' && <rect x="10" y="10" width="20" height="20" fill="none" stroke="#5B3A21" strokeWidth="3.5" />}
          {k === 'close' && <path d="M11 11 L29 29 M29 11 L11 29" stroke="#5B3A21" strokeWidth="3.5" />}
        </svg>
      ))}
    </span>
  )
}

/* ---------- Torn paper star ---------- */
export function PaperStar({ size = 80, tone = 'paper', className }: { size?: number; tone?: 'paper' | 'yellow' | 'cream'; className?: string }) {
  const fill = { paper: '#f4f2ea', yellow: '#FFE500', cream: '#EAE6B9' }[tone]
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden>
      <defs>
        <pattern id={`print-${tone}`} width="8" height="6" patternUnits="userSpaceOnUse">
          <rect width="8" height="6" fill={fill} />
          <rect y="2" width="6" height="1.2" fill="#111" opacity={tone === 'paper' ? 0.18 : 0} />
        </pattern>
      </defs>
      <path
        d="M50 4 L61 37 L96 38 L68 59 L79 94 L50 73 L21 94 L32 59 L4 38 L39 37 Z"
        fill={`url(#print-${tone})`}
        stroke="#d9d6c8"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* Small four-point sparkle */
export function Sparkle({ size = 28, color = '#FFE500', className }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className={className} aria-hidden>
      <path d="M20 0 C21.5 14 26 18.5 40 20 C26 21.5 21.5 26 20 40 C18.5 26 14 21.5 0 20 C14 18.5 18.5 14 20 0 Z" fill={color} />
    </svg>
  )
}

/* ---------- Yellow cursor arrow ---------- */
export function CursorArrow({ size = 70, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" className={className} aria-hidden>
      <path d="M6 4 L52 26 L32 32 L24 54 Z" fill="#FFE500" stroke="#5B3A21" strokeWidth="3.5" strokeLinejoin="round" />
    </svg>
  )
}

/* ---------- Hand-drawn arrow ---------- */
export function HandArrow({
  w = 160,
  h = 90,
  className,
  color = 'currentColor',
  flip = false,
}: {
  w?: number
  h?: number
  className?: string
  color?: string
  flip?: boolean
}) {
  return (
    <svg width={w} height={h} viewBox="0 0 160 90" className={className} style={flip ? { scale: '-1 1' } : undefined} aria-hidden>
      <path
        data-anim="draw"
        pathLength={1}
        strokeDasharray="1"
        d="M6 12 C40 4 92 10 118 46 C126 58 130 68 132 80"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M114 66 L132 82 L146 60"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ---------- Toggle switch (animated by CSS on the cover) ---------- */
export function Toggle({ animated = true, className }: { animated?: boolean; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn('relative block h-[84px] w-[144px] rounded-full border-[3px] border-white/0 bg-[#e6e6e2] shadow-[inset_0_4px_10px_rgb(0_0_0/0.15)]', animated && 'toggle-track', className)}
      style={{ '--knob-travel': '60px' } as CSSProperties}
    >
      <span
        className={cn(
          'absolute top-[6px] left-[6px] size-[72px] rounded-full bg-white shadow-[0_6px_14px_rgb(0_0_0/0.25)]',
          animated && 'toggle-knob',
        )}
      />
    </span>
  )
}

/* ---------- Background swirl (Index slide) ---------- */
export function Swirl({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1920 1080" className={className} aria-hidden fill="none">
      <path
        data-anim="draw"
        data-dur="2.4"
        pathLength={1}
        strokeDasharray="1"
        d="M820 -40 C760 120 980 210 1080 150 C1200 80 1120 -10 1040 60 C940 150 1090 330 1290 300 C1500 268 1560 380 1520 470 C1470 580 1300 560 1330 470 C1360 380 1640 400 1760 560 C1860 690 1980 700 2000 700"
        stroke="#C9C9C2"
        strokeWidth="48"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  )
}

/* ---------- Doodle icons for Beyond code cards ---------- */
export function DoodleIcon({ kind, size = 72 }: { kind: 'team' | 'talk' | 'mentor' | 'flag'; size?: number }) {
  const common = { fill: 'none', stroke: '#111', strokeWidth: 4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" aria-hidden>
      {kind === 'team' && (
        <>
          <circle cx="26" cy="28" r="10" {...common} fill="#FFE500" />
          <circle cx="54" cy="28" r="10" {...common} fill="#C6F23B" />
          <path d="M8 66 C10 50 42 50 44 66" {...common} />
          <path d="M36 66 C38 50 70 50 72 66" {...common} />
        </>
      )}
      {kind === 'talk' && (
        <>
          <path d="M10 14 H62 V46 H34 L20 60 V46 H10 Z" {...common} fill="#FFE500" />
          <path d="M22 26 H50 M22 35 H42" {...common} />
          <path d="M50 52 H70 V68 L62 62 H50 Z" {...common} fill="#A66CF0" />
        </>
      )}
      {kind === 'mentor' && (
        <>
          <rect x="8" y="12" width="64" height="40" rx="3" {...common} fill="#C6F23B" />
          <path d="M20 26 L28 32 L20 38 M34 38 H48" {...common} />
          <path d="M30 52 L24 70 M50 52 L56 70" {...common} />
        </>
      )}
      {kind === 'flag' && (
        <>
          <path d="M18 72 V8" {...common} />
          <path d="M18 10 C34 2 44 18 64 10 V38 C44 46 34 30 18 38 Z" {...common} fill="#FF6A1A" />
        </>
      )}
    </svg>
  )
}
