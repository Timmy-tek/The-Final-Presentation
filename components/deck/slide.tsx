import type { ReactNode } from 'react'
import { Crosshair, Tape } from '@/components/ui/bits'
import type { Surface } from '@/data/slides'
import { cn } from '@/lib/utils'

const crossColor: Record<Surface, string> = {
  mat: 'text-cream',
  paper: 'text-ink',
  ink: 'text-cream',
}

/** A single 1920x1080 surface in the world. */
export function Slide({
  surface,
  children,
  className,
  dense = false,
  crosshairs = true,
  seam = true,
}: {
  surface: Surface
  children: ReactNode
  className?: string
  dense?: boolean
  crosshairs?: boolean
  seam?: boolean
}) {
  const points: { x: number; y: number }[] = []
  if (crosshairs) {
    const step = surface === 'paper' && !dense ? 384 : 256
    const ox = surface === 'paper' && !dense ? 96 : 0
    const oy = surface === 'paper' && !dense ? 60 : 0
    for (let x = ox; x <= 1920; x += step) for (let y = oy; y <= 1080; y += step) if (x > 0 && y > 0) points.push({ x, y })
  }

  return (
    <div className={cn('relative h-[1080px] w-[1920px] overflow-hidden', `surface-${surface}`, dense && 'dense', className)}>
      {surface === 'mat' && <div className="mat-vignette pointer-events-none absolute inset-0" />}
      <div className="noise pointer-events-none absolute inset-0" />
      {points.map((p) => (
        <Crosshair key={`${p.x}-${p.y}`} x={p.x} y={p.y} className={crossColor[surface]} opacity={surface === 'paper' ? 0.45 : 0.4} />
      ))}
      {seam && (
        <>
          <Tape className="-left-[60px] top-[180px]" rot={84} w={150} h={40} />
          <Tape className="-left-[60px] top-[820px]" rot={96} w={150} h={40} />
        </>
      )}
      <div className="absolute inset-0">{children}</div>
    </div>
  )
}
