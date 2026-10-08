'use client'

import { type MouseEvent, type PointerEvent, type TouchEvent, useCallback, useEffect, useRef, useState } from 'react'
import { slideComponents } from '@/components/slides'
import { type Surface, slides } from '@/data/slides'
import { buildEnter, buildExit, countSteps, hideStep, resetSlide, revealStep, setSteps } from '@/lib/deck-animations'
import { DeckContext, SlideIndexContext } from '@/lib/deck-context'
import { EASE, gsap, STAGE_W, useGSAP } from '@/lib/gsap'
import { CustomCursor, Hint } from './hint'
import { ProgressRuler } from './progress-ruler'
import { Stage } from './stage'
import { TopBar } from './top-bar'

const UI_FG: Record<Surface, string> = { mat: '#F3EFCF', paper: '#111111', ink: '#F3EFCF' }
const LETTERBOX: Record<Surface, string> = { mat: '#3D8B43', paper: '#EDEDE8', ink: '#111111' }
const PAN = 1.1
const PARALLAX_PX = 260
const LAST = slides.length - 1

type Dir = 'next' | 'prev'

export function Deck() {
  const rootRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const worldRef = useRef<HTMLDivElement>(null)
  const slideEls = useRef<(HTMLDivElement | null)[]>([])
  const stepCounts = useRef<number[]>([])
  const pos = useRef({ index: 0, step: 0 })
  const busy = useRef(true)
  const pending = useRef<Dir | null>(null)
  const reduced = useRef(false)
  const touch = useRef<{ x: number; y: number; t: number } | null>(null)
  const suppressClick = useRef(false)

  const [view, setView] = useState({ index: 0, step: 0 })
  const [interacted, setInteracted] = useState(false)
  const [hintOpen, setHintOpen] = useState(false)

  const meta = slides[view.index]
  const rulerValue = meta.stepMonths
    ? meta.stepMonths[Math.min(view.step, meta.stepMonths.length - 1)]
    : (view.index / LAST) * 7

  useEffect(() => {
    document.body.style.setProperty('--letterbox', LETTERBOX[meta.surface])
  }, [meta.surface])

  const { contextSafe } = useGSAP(
    () => {
      reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const els = slideEls.current.filter(Boolean) as HTMLDivElement[]
      stepCounts.current = els.map(countSteps)
      els.forEach((el) => setSteps(el, 0))
      gsap.set(worldRef.current, { x: 0 })
      pos.current = { index: 0, step: 0 }
      busy.current = true
      const tl = buildEnter(els[0], { reduced: reduced.current })
      tl.delay(0.25).eventCallback('onComplete', () => {
        busy.current = false
      })
      if (reduced.current) busy.current = false
    },
    { scope: rootRef },
  )

  const release = useCallback(() => {
    busy.current = false
    const p = pending.current
    pending.current = null
    if (p === 'next') nextRef.current()
    else if (p === 'prev') prevRef.current()
  }, [])

  const go = contextSafe((target: number, revealAll: boolean) => {
    const from = pos.current.index
    if (target === from || target < 0 || target > LAST) {
      busy.current = false
      return
    }
    const dir = target > from ? 1 : -1
    const outEl = slideEls.current[from]!
    const inEl = slideEls.current[target]!
    const revealed = revealAll ? stepCounts.current[target] : 0

    busy.current = true
    pos.current = { index: target, step: revealed }
    setView({ index: target, step: revealed })
    setSteps(inEl, revealed)

    if (reduced.current) {
      gsap
        .timeline({ onComplete: release })
        .to(worldRef.current, { autoAlpha: 0, duration: 0.1 })
        .set(worldRef.current, { x: -target * STAGE_W })
        .call(() => resetSlide(inEl))
        .to(worldRef.current, { autoAlpha: 1, duration: 0.1 })
      return
    }

    const tl = gsap.timeline({
      onComplete: () => {
        resetSlide(outEl)
        setSteps(outEl, stepCounts.current[from])
        release()
      },
    })
    const panAt = 0.2
    tl.add(buildExit(outEl, dir, { reduced: false }), 0)
    tl.to(worldRef.current, { x: -target * STAGE_W - dir * 5, duration: PAN, ease: EASE.camera }, panAt)
    tl.to(worldRef.current, { x: -target * STAGE_W, duration: 0.22, ease: 'power2.out' })

    inEl.querySelectorAll<HTMLElement>('[data-depth]').forEach((el) => {
      const d = Number(el.dataset.depth) || 1
      tl.fromTo(el, { x: (d - 1) * dir * PARALLAX_PX }, { x: 0, duration: PAN, ease: EASE.camera }, panAt)
    })
    outEl.querySelectorAll<HTMLElement>('[data-depth]').forEach((el) => {
      const d = Number(el.dataset.depth) || 1
      tl.to(el, { x: -(d - 1) * dir * PARALLAX_PX, duration: PAN, ease: EASE.camera }, panAt)
    })

    tl.add(buildEnter(inEl, { reduced: false }), panAt + PAN * 0.55)
  })

  const lockBriefly = contextSafe(() => {
    busy.current = true
    gsap.delayedCall(0.32, release)
  })

  const next = contextSafe(() => {
    setInteracted(true)
    if (busy.current) {
      pending.current = 'next'
      return
    }
    const { index, step } = pos.current
    const el = slideEls.current[index]!
    if (step < stepCounts.current[index]) {
      const s = step + 1
      pos.current = { index, step: s }
      setView({ index, step: s })
      revealStep(el, s, reduced.current)
      lockBriefly()
    } else if (index < LAST) {
      go(index + 1, false)
    }
  })

  const prev = contextSafe(() => {
    setInteracted(true)
    if (busy.current) {
      pending.current = 'prev'
      return
    }
    const { index, step } = pos.current
    const el = slideEls.current[index]!
    if (step > 0) {
      hideStep(el, step, reduced.current)
      pos.current = { index, step: step - 1 }
      setView({ index, step: step - 1 })
      lockBriefly()
    } else if (index > 0) {
      go(index - 1, true)
    }
  })

  const jump = contextSafe((target: number) => {
    setInteracted(true)
    if (busy.current) return
    go(target, target === LAST)
  })

  const nextRef = useRef(next)
  const prevRef = useRef(prev)
  nextRef.current = next
  prevRef.current = prev

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const onControl = e.target instanceof Element && !!e.target.closest('a, button')
      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          e.preventDefault()
          nextRef.current()
          break
        case 'Enter':
          if (onControl) return
          e.preventDefault()
          nextRef.current()
          break
        case 'ArrowLeft':
        case 'PageUp':
        case 'Backspace':
          e.preventDefault()
          prevRef.current()
          break
        case 'Home':
          e.preventDefault()
          jumpRef.current(0)
          break
        case 'End':
          e.preventDefault()
          jumpRef.current(LAST)
          break
        case 'f':
        case 'F':
          if (document.fullscreenElement) document.exitFullscreen?.()
          else document.documentElement.requestFullscreen?.().catch(() => {})
          break
        case '?':
          setHintOpen((v) => !v)
          break
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const jumpRef = useRef(jump)
  jumpRef.current = jump

  const isInteractive = (t: EventTarget | null) => !!(t as HTMLElement | null)?.closest('[data-interactive], a, button')

  const onClick = (e: MouseEvent) => {
    if (e.button !== 0 || suppressClick.current || isInteractive(e.target)) return
    next()
  }
  const onContextMenu = (e: MouseEvent) => {
    e.preventDefault()
    prev()
  }
  const onTouchStart = (e: TouchEvent) => {
    const t = e.touches[0]
    touch.current = { x: t.clientX, y: t.clientY, t: Date.now() }
  }
  const onTouchEnd = (e: TouchEvent) => {
    const start = touch.current
    touch.current = null
    if (!start) return
    const t = e.changedTouches[0]
    const dx = t.clientX - start.x
    const dy = t.clientY - start.y
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      suppressClick.current = true
      window.setTimeout(() => {
        suppressClick.current = false
      }, 450)
      if (dx < 0) next()
      else prev()
    }
  }

  const parallaxFrame = useRef(0)
  const onPointerMove = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse' || reduced.current) return
    const { clientX, clientY } = e
    cancelAnimationFrame(parallaxFrame.current)
    parallaxFrame.current = requestAnimationFrame(() => {
      const stage = stageRef.current
      if (!stage) return
      stage.style.setProperty('--mx', ((clientX / window.innerWidth) * 2 - 1).toFixed(3))
      stage.style.setProperty('--my', ((clientY / window.innerHeight) * 2 - 1).toFixed(3))
    })
  }

  return (
    <DeckContext.Provider value={view}>
      <main
        ref={rootRef}
        aria-roledescription="presentation"
        aria-label="The Journey, by Timothy Adegbola"
        className="fixed inset-0 overflow-hidden select-none"
        onClick={onClick}
        onContextMenu={onContextMenu}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onPointerMove={onPointerMove}
      >
        <Stage ref={stageRef}>
          <div ref={worldRef} className="absolute top-0 left-0 flex h-full" style={{ width: STAGE_W * slides.length }}>
            {slides.map((s, i) => {
              const SlideComponent = slideComponents[s.id]
              const active = i === view.index
              return (
                <section
                  key={s.id}
                  ref={(el) => {
                    slideEls.current[i] = el as HTMLDivElement | null
                  }}
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${slides.length}: ${s.title}`}
                  aria-hidden={!active}
                  inert={!active}
                  className="relative h-full shrink-0"
                  style={{ width: STAGE_W }}
                >
                  <SlideIndexContext.Provider value={i}>
                    <SlideComponent />
                  </SlideIndexContext.Provider>
                </section>
              )
            })}
          </div>

          <div className="pointer-events-none absolute inset-0 transition-colors duration-700" style={{ color: UI_FG[meta.surface] }}>
            <TopBar chapter={meta.chapter} />
            <ProgressRuler value={rulerValue} slideNumber={view.index + 1} total={slides.length} />
            <Hint visible={!interacted || hintOpen} expanded={hintOpen} />
          </div>
        </Stage>

        <CustomCursor />
        <p aria-live="polite" className="sr-only">
          {`Slide ${view.index + 1} of ${slides.length}: ${meta.title}`}
        </p>
      </main>
    </DeckContext.Provider>
  )
}
