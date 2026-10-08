'use client'

const MONTHS = ['APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT']
const LEFT = 96
const WIDTH = 1500
const SPAN = 7

/** Cutting-mat ruler along the bottom edge. `value` is 0 (start of April) .. 7 (end of October). */
export function ProgressRuler({ value, slideNumber, total }: { value: number; slideNumber: number; total: number }) {
  const px = (m: number) => (Math.min(Math.max(m, 0), SPAN) / SPAN) * WIDTH
  const markerX = px(value)
  const minors = Array.from({ length: SPAN * 4 + 1 }, (_, i) => i / 4)
  const num = String(slideNumber).padStart(2, '0')

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-50 h-[96px]">
      <div className="absolute bottom-[30px]" style={{ left: LEFT, width: WIDTH, height: 40 }}>
        {/* track + progress fill */}
        <div className="absolute inset-x-0 bottom-0 h-[6px] border border-current" />
        <div
          className="absolute bottom-0 left-0 h-[6px] bg-current transition-[width] duration-[1100ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{ width: markerX }}
        />
        {minors.map((m) => {
          const major = Number.isInteger(m)
          return (
            <span
              key={m}
              className="absolute bottom-[6px] w-px bg-current"
              style={{ left: px(m), height: major ? 20 : m % 0.5 === 0 ? 11 : 7, opacity: major ? 1 : 0.6 }}
            />
          )
        })}
        {MONTHS.map((m, i) => (
          <span
            key={m}
            className="mono absolute bottom-[24px] text-[12px] transition-opacity duration-500"
            style={{ left: px(i) + 6, opacity: px(i) <= markerX + 1 ? 1 : 0.5 }}
          >
            {m}
          </span>
        ))}
        {/* marker */}
        <div
          className="absolute bottom-[-10px] transition-[left] duration-[1100ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{ left: markerX }}
        >
          <span className="absolute bottom-0 left-0 h-[48px] w-[2px] -translate-x-1/2 bg-yellow" />
          <span className="mono absolute bottom-[40px] left-0 -translate-x-1/2 border border-ink bg-yellow px-1.5 py-0.5 text-[12px] font-bold text-ink">
            {num}
          </span>
          <span
            key={slideNumber}
            aria-hidden
            className="stamp font-display absolute bottom-[72px] left-0 -ml-[34px] grid h-[52px] w-[68px] place-items-center border-2 border-ink bg-yellow text-[30px] text-ink opacity-0"
          >
            {num}
          </span>
        </div>
      </div>
      <p className="mono absolute right-[96px] bottom-[34px] text-[16px]">
        {num} / {String(total).padStart(2, '0')}
      </p>
    </div>
  )
}
