'use client'

import { type ReactNode, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

/**
 * Shows hand-built fallback art until (and unless) the real file loads.
 * Used where an empty dashed placeholder would break the composition (cover art, silhouette).
 */
export function FallbackImg({
  src,
  alt,
  children,
  className,
  fit = 'contain',
}: {
  src?: string
  alt: string
  children: ReactNode
  className?: string
  fit?: 'cover' | 'contain'
}) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const ref = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const img = ref.current
    if (img?.complete) {
      if (img.naturalWidth > 0) setLoaded(true)
      else setFailed(true)
    }
  }, [])

  return (
    <div className={cn('relative', className)}>
      <div className={cn('transition-opacity duration-300', loaded && 'opacity-0')}>{children}</div>
      {src && !failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          src={src}
          alt={alt}
          draggable={false}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={cn(
            'absolute inset-0 size-full transition-opacity duration-300',
            fit === 'cover' ? 'object-cover' : 'object-contain',
            loaded ? 'opacity-100' : 'opacity-0',
          )}
        />
      )}
    </div>
  )
}
