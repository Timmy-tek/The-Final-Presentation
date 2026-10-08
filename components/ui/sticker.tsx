import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type StickerProps = {
  x: number
  y: number
  rot?: number
  /** Parallax multiplier, 0.2 (far) to 1.6 (near). */
  depth?: number
  z?: number
  bob?: boolean
  dieCut?: boolean
  peel?: boolean
  anim?: 'sticker' | 'fade' | 'block' | 'none'
  className?: string
  children: ReactNode
  label?: string
}

/**
 * Layering, so GSAP and CSS never fight over the same property:
 *   outer   -> absolute position, pan parallax (GSAP x) + mouse parallax (CSS translate)
 *   anim    -> entrance / exit (GSAP transform)
 *   bob     -> ambient float (CSS translate keyframes)
 *   art     -> base rotation (CSS rotate) + hover peel (CSS scale)
 */
export function Sticker({
  x,
  y,
  rot = 0,
  depth = 1,
  z,
  bob = true,
  dieCut = true,
  peel = true,
  anim = 'sticker',
  className,
  children,
  label,
}: StickerProps) {
  const seed = Math.abs(Math.round(x * 7 + y * 13)) % 97
  return (
    <div
      data-depth={depth}
      className="parallax pointer-events-auto absolute"
      style={{ left: x, top: y, zIndex: z, '--depth': depth } as CSSProperties}
    >
      <div data-anim={anim === 'none' ? undefined : anim}>
        <div
          className={bob ? 'bob' : undefined}
          style={
            {
              '--bob-dur': `${3.4 + (seed % 23) / 10}s`,
              '--bob-delay': `-${(seed % 31) / 10}s`,
              '--bob': `${-2 - (seed % 3)}px`,
            } as CSSProperties
          }
        >
          <div
            role={label ? 'img' : undefined}
            aria-label={label}
            aria-hidden={label ? undefined : true}
            className={cn(dieCut && 'die-cut', peel && 'peel', className)}
            style={{ rotate: `${rot}deg` }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
