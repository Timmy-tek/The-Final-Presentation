'use client'

import { forwardRef, type ReactNode, useLayoutEffect, useState } from 'react'
import { STAGE_H, STAGE_W } from '@/lib/gsap'

/** Fixed 1920x1080 virtual stage, scaled to fit and centered. */
export const Stage = forwardRef<HTMLDivElement, { children: ReactNode }>(function Stage({ children }, ref) {
  const [box, setBox] = useState({ scale: 0, x: 0, y: 0 })

  useLayoutEffect(() => {
    const fit = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const scale = Math.min(w / STAGE_W, h / STAGE_H)
      setBox({ scale, x: (w - STAGE_W * scale) / 2, y: (h - STAGE_H * scale) / 2 })
    }
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [])

  return (
    <div
      ref={ref}
      className="absolute top-0 left-0 origin-top-left overflow-hidden"
      style={{
        width: STAGE_W,
        height: STAGE_H,
        transform: `translate(${box.x}px, ${box.y}px) scale(${box.scale})`,
        visibility: box.scale ? 'visible' : 'hidden',
      }}
    >
      {children}
    </div>
  )
})
