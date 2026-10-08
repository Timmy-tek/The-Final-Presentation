'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP)
  gsap.defaults({ ease: 'power3.out' })
}

export const EASE = {
  enter: 'power3.out',
  camera: 'power3.inOut',
  pop: 'back.out(1.6)',
  draw: 'expo.out',
} as const

export const STAGE_W = 1920
export const STAGE_H = 1080

export { gsap, useGSAP }
