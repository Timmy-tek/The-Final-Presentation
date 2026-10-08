'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { gsap } from '@/lib/gsap'

const SHORTCUTS = [
  'CLICK = NEXT',
  'RIGHT-CLICK = BACK',
  'F = FULLSCREEN',
  '← / → = NAVIGATE',
  'HOME / END',
  '? = SHORTCUTS',
]

export function Hint({ visible, expanded }: { visible: boolean; expanded: boolean }) {
  const items = expanded ? SHORTCUTS : SHORTCUTS.slice(0, 3)
  return (
    <div
      aria-hidden={!visible}
      className={cn(
        'pointer-events-none absolute bottom-[118px] left-[96px] z-50 flex flex-wrap gap-2 transition-all duration-500',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
      )}
    >
      {items.map((s) => (
        <span key={s} className="mono border border-ink bg-paper px-2.5 py-1 text-[13px] text-ink">
          [ {s} ]
        </span>
      ))}
    </div>
  )
}

/** Small crosshair ring that follows the pointer and says NEXT / BACK. Native cursor stays visible. */
export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState<'NEXT' | 'BACK' | ''>('')
  const [hot, setHot] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    setEnabled(fine)
    if (!fine || !ref.current) return
    const xTo = gsap.quickTo(ref.current, 'x', { duration: 0.25, ease: 'power3.out' })
    const yTo = gsap.quickTo(ref.current, 'y', { duration: 0.25, ease: 'power3.out' })
    const move = (e: PointerEvent) => {
      xTo(e.clientX)
      yTo(e.clientY)
      const target = e.target as HTMLElement | null
      const interactive = !!target?.closest('[data-interactive], a, button')
      setHot(interactive)
      setLabel(interactive ? '' : e.clientX < window.innerWidth / 2 ? 'BACK' : 'NEXT')
    }
    const leave = () => setLabel('')
    window.addEventListener('pointermove', move)
    document.addEventListener('pointerleave', leave)
    return () => {
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerleave', leave)
    }
  }, [])

  if (!enabled) return <div ref={ref} hidden />

  return (
    <div ref={ref} aria-hidden className="pointer-events-none fixed top-0 left-0 z-[100] mix-blend-difference">
      <div
        className={cn(
          'absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-white transition-[width,height] duration-200',
          hot ? 'size-14' : 'size-7',
        )}
      >
        <span className="absolute top-1/2 left-1/2 h-px w-2 -translate-x-1/2 bg-white" />
        <span className="absolute top-1/2 left-1/2 h-2 w-px -translate-y-1/2 bg-white" />
      </div>
      {label && (
        <span className="mono absolute top-4 left-5 text-[11px] whitespace-nowrap text-white">
          {label === 'BACK' ? '← BACK' : 'NEXT →'}
        </span>
      )}
    </div>
  )
}
