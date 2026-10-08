import { EASE, gsap } from './gsap'

const q = (root: Element, sel: string) => Array.from(root.querySelectorAll<HTMLElement>(sel))

/** Elements that belong to this slide only (not to a nested slide). */
function own(root: HTMLElement, sel: string) {
  return q(root, sel)
}

export function countSteps(slide: HTMLElement) {
  return own(slide, '[data-step]').reduce((max, el) => Math.max(max, Number(el.dataset.step) || 0), 0)
}

function stepEls(slide: HTMLElement, step: number) {
  return own(slide, `[data-step="${step}"]`)
}

/** Instantly show steps <= revealed and hide the rest. */
export function setSteps(slide: HTMLElement, revealed: number) {
  own(slide, '[data-step]').forEach((el) => {
    const s = Number(el.dataset.step) || 0
    gsap.set(el, s <= revealed ? { autoAlpha: 1, y: 0, scale: 1, rotation: 0 } : { autoAlpha: 0 })
  })
  slide.dataset.revealed = String(revealed)
}

export function revealStep(slide: HTMLElement, step: number, reduced: boolean) {
  const els = stepEls(slide, step)
  slide.dataset.revealed = String(step)
  if (reduced) {
    gsap.fromTo(els, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2 })
    return
  }
  const tl = gsap.timeline()
  const plain = els.filter((el) => el.hasAttribute('data-step-plain'))
  const popped = els.filter((el) => !el.hasAttribute('data-step-plain'))
  if (plain.length) tl.fromTo(plain, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2 }, 0)
  if (popped.length)
    tl.fromTo(
      popped,
      { autoAlpha: 0, y: 40, scale: 0.92, rotation: () => gsap.utils.random(-5, 5) },
      { autoAlpha: 1, y: 0, scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(1.4)', stagger: 0.08 },
      0,
    )
  const spins = els.flatMap((el) => q(el, '[data-step-spin]'))
  if (spins.length) tl.fromTo(spins, { rotation: -135 }, { rotation: 0, duration: 0.6, ease: EASE.pop }, 0.15)
  const draws = els.flatMap((el) => q(el, '[data-anim="draw"]'))
  if (draws.length)
    tl.fromTo(draws, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.7, ease: EASE.draw }, 0.1)
  const counts = els.flatMap((el) => q(el, '[data-anim="count"]'))
  counts.forEach((el) => countUp(tl, el, 0.15))
}

export function hideStep(slide: HTMLElement, step: number, reduced: boolean) {
  const els = stepEls(slide, step)
  slide.dataset.revealed = String(step - 1)
  gsap.to(els, { autoAlpha: 0, y: reduced ? 0 : 20, duration: reduced ? 0.15 : 0.25, ease: 'power2.in' })
}

function countUp(tl: gsap.core.Timeline, el: HTMLElement, at: number) {
  const target = Number(el.dataset.value)
  if (!Number.isFinite(target)) return
  const suffix = el.dataset.suffix ?? ''
  const obj = { v: 0 }
  tl.to(
    obj,
    {
      v: target,
      duration: 1.1,
      ease: 'power2.out',
      onUpdate: () => {
        el.textContent = `${Math.round(obj.v)}${suffix}`
      },
    },
    at,
  )
}

/** Build the entrance choreography for a slide from its data-anim roles. */
export function buildEnter(slide: HTMLElement, opts: { reduced: boolean }) {
  const tl = gsap.timeline()
  if (opts.reduced) return tl

  const wipes = own(slide, '[data-anim="wipe"]')
  if (wipes.length)
    tl.fromTo(
      wipes,
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 0.7, ease: 'power3.inOut', stagger: 0.06 },
      0,
    )

  const lines = own(slide, '[data-anim="line"]')
  if (lines.length) tl.fromTo(lines, { yPercent: 110 }, { yPercent: 0, duration: 0.8, stagger: 0.08 }, 0.05)

  const blocks = own(slide, '[data-anim="block"]')
  if (blocks.length)
    tl.fromTo(
      blocks,
      { autoAlpha: 0, scale: 1.25, y: -30, rotation: () => gsap.utils.random(-10, 10) },
      { autoAlpha: 1, scale: 1, y: 0, rotation: 0, duration: 0.55, ease: 'back.out(1.3)', stagger: 0.12 },
      0.05,
    )

  const tapes = own(slide, '[data-anim="tape"]')
  if (tapes.length)
    tl.fromTo(
      tapes,
      { autoAlpha: 0, scale: 1.4, rotation: () => gsap.utils.random(-25, 25) },
      { autoAlpha: 1, scale: 1, rotation: 0, duration: 0.3, ease: 'power4.out', stagger: 0.05 },
      0.35,
    )

  const stickers = own(slide, '[data-anim="sticker"]')
  if (stickers.length)
    tl.fromTo(
      stickers,
      { autoAlpha: 0, scale: 0.6, y: 40, rotation: () => gsap.utils.random(-14, 14) },
      { autoAlpha: 1, scale: 1, y: 0, rotation: 0, duration: 0.7, ease: EASE.pop, stagger: 0.07 },
      0.15,
    )

  const fades = own(slide, '[data-anim="fade"]')
  if (fades.length)
    tl.fromTo(fades, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.06 }, 0.2)

  const draws = own(slide, '[data-anim="draw"]').filter((el) => !el.closest('[data-step]'))
  if (draws.length)
    tl.fromTo(
      draws,
      { strokeDashoffset: 1 },
      {
        strokeDashoffset: 0,
        duration: (_i: number, el: HTMLElement) => Number(el.dataset.dur) || 0.9,
        ease: EASE.draw,
        stagger: 0.08,
      },
      0.3,
    )

  const monos = own(slide, '[data-anim="mono"]')
  if (monos.length)
    tl.fromTo(
      monos,
      { autoAlpha: 0, clipPath: 'inset(0 100% 0 0)' },
      { autoAlpha: 1, clipPath: 'inset(0 0% 0 0)', duration: 0.5, ease: 'steps(14)', stagger: 0.05 },
      0.45,
    )

  own(slide, '[data-anim="count"]')
    .filter((el) => !el.closest('[data-step]'))
    .forEach((el) => countUp(tl, el, 0.4))

  return tl
}

/** Quick exit: stickers fling outward, lines mask down, everything else fades. */
export function buildExit(slide: HTMLElement, dir: number, opts: { reduced: boolean }) {
  const tl = gsap.timeline()
  if (opts.reduced) return tl
  const stickers = own(slide, '[data-anim="sticker"], [data-anim="block"]')
  if (stickers.length)
    tl.to(
      stickers,
      {
        x: (_i: number, el: HTMLElement) => {
          const depth = Number(el.closest<HTMLElement>('[data-depth]')?.dataset.depth ?? 1)
          return -dir * 70 * depth
        },
        y: -24,
        rotation: () => gsap.utils.random(-18, 18),
        autoAlpha: 0,
        duration: 0.4,
        ease: 'power2.in',
        stagger: 0.015,
      },
      0,
    )
  const lines = own(slide, '[data-anim="line"]')
  if (lines.length) tl.to(lines, { yPercent: 110, duration: 0.35, ease: 'power2.in', stagger: 0.03 }, 0)
  const rest = own(slide, '[data-anim="mono"], [data-anim="fade"], [data-anim="tape"], [data-anim="wipe"]')
  if (rest.length) tl.to(rest, { autoAlpha: 0, duration: 0.3, ease: 'power2.in' }, 0)
  const draws = own(slide, '[data-anim="draw"]')
  if (draws.length) tl.to(draws, { strokeDashoffset: 1, duration: 0.35, ease: 'power2.in' }, 0)
  return tl
}

/** Reset an off-screen slide so it looks correct if it is panned across. */
export function resetSlide(slide: HTMLElement) {
  const els = own(slide, '[data-anim]')
  gsap.set(els, { clearProps: 'transform,opacity,visibility,clipPath' })
  const draws = own(slide, '[data-anim="draw"]')
  gsap.set(draws, { strokeDashoffset: 0 })
  own(slide, '[data-depth]').forEach((el) => gsap.set(el, { x: 0 }))
}
