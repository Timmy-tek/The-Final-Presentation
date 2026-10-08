'use client'

import { createContext, useContext } from 'react'

export type DeckState = { index: number; step: number }

export const DeckContext = createContext<DeckState>({ index: 0, step: 0 })

export const useDeck = () => useContext(DeckContext)

/** Current revealed step for a given slide (0 when the slide is not active). */
export function useSlideStep(slideIndex: number) {
  const { index, step } = useDeck()
  return index === slideIndex ? step : index > slideIndex ? Number.POSITIVE_INFINITY : 0
}

export const SlideIndexContext = createContext(0)
export const useSlideIndex = () => useContext(SlideIndexContext)
