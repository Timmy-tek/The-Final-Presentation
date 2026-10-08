'use client'

import { type CSSProperties, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type MediaProps = {
  src?: string
  alt?: string
  className?: string
  fit?: 'cover' | 'contain'
  /** Size hint printed on the placeholder, e.g. "1600 x 1000". */
  hint?: string
  tone?: 'light' | 'dark'
}

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src)

/**
 * One component for .png / .webp / .jpg / .gif / .mp4.
 * Until the file has loaded (or if it is missing) a dashed placeholder shows the expected path.
 */
export function Media({ src, alt = '', className, fit = 'cover', hint, tone = 'light', style }: MediaProps & { style?: CSSProperties }) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const img = imgRef.current
    if (img?.complete) {
      if (img.naturalWidth > 0) setLoaded(true)
      else setFailed(true)
    }
  }, [])

  const showPlaceholder = !src || failed || !loaded
  const objectFit = fit === 'cover' ? 'object-cover' : 'object-contain'

  return (
    <div className={cn('relative overflow-hidden', className)} style={style}>
      {showPlaceholder && <Placeholder path={src} hint={hint} tone={tone} />}
      {src && !failed && (
        isVideo(src) ? (
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            aria-label={alt}
            onLoadedData={() => setLoaded(true)}
            onError={() => setFailed(true)}
            className={cn('absolute inset-0 size-full', objectFit, loaded ? 'opacity-100' : 'opacity-0')}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            draggable={false}
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            className={cn('absolute inset-0 size-full', objectFit, loaded ? 'opacity-100' : 'opacity-0')}
          />
        )
      )}
    </div>
  )
}

function Placeholder({ path, hint, tone }: { path?: string; hint?: string; tone: 'light' | 'dark' }) {
  const dark = tone === 'dark'
  return (
    <div
      aria-hidden
      className={cn(
        'absolute inset-0 flex flex-col items-start justify-end gap-1 border-2 border-dashed p-3',
        dark ? 'border-cream/40 bg-[#1b1b1b] text-cream/70' : 'border-ink/30 bg-[#e4e4de] text-ink/60',
      )}
      style={{
        backgroundImage: `repeating-linear-gradient(135deg, ${dark ? 'rgb(243 239 207 / 0.07)' : 'rgb(17 17 17 / 0.06)'} 0 2px, transparent 2px 14px)`,
      }}
    >
      <span className="mono text-[11px] leading-tight break-all">REPLACE: {path ?? 'no file set'}</span>
      {hint && <span className="mono text-[10px] opacity-70">{hint}</span>}
    </div>
  )
}
