'use client'

import { useEffect, useRef, useState } from 'react'
import { chapters, type ChapterId, presenter } from '@/data/slides'
import { gsap, useGSAP } from '@/lib/gsap'

function useLagosTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-US', {
      timeZone: presenter.timeZone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })
    const tick = () => setTime(fmt.format(new Date()))
    tick()
    const id = window.setInterval(tick, 15000)
    return () => window.clearInterval(id)
  }, [])
  return time
}

export function TopBar({ chapter }: { chapter: ChapterId }) {
  const time = useLagosTime()
  const labelRef = useRef<HTMLSpanElement>(null)
  const c = chapters[chapter]

  useGSAP(
    () => {
      if (!labelRef.current) return
      gsap.fromTo(labelRef.current, { yPercent: 100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.5, delay: 0.3 })
    },
    { dependencies: [chapter] },
  )

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-50 flex items-start justify-between px-[96px] pt-[40px]">
      <p className="font-display flex items-start gap-1.5 text-[34px] leading-none tracking-[-0.01em]">
        {presenter.wordmark}
        <span className="mt-[3px] inline-block size-[11px] bg-red" aria-hidden />
      </p>
      <p className="mono overflow-hidden text-[15px]" aria-label={`Chapter ${c.num}: ${c.label}`}>
        <span ref={labelRef} className="inline-block">
          [ {c.num} / {c.label.toUpperCase()} ]
        </span>
      </p>
      <p className="mono text-right text-[14px] leading-tight">
        <span className="block opacity-60">LOCAL TIME</span>
        <span className="block" suppressHydrationWarning>
          {presenter.city} {time}
        </span>
      </p>
    </header>
  )
}
