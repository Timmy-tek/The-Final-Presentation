import type { ComponentType } from 'react'
import type { SlideId } from '@/data/slides'
import { AprVsOctSlide } from './aprvsoct'
import { BeforeSlide } from './before'
import { BeyondSlide } from './beyond'
import { BlueraderSlide } from './bluerader'
import { ChangedSlide } from './changed'
import { CmsSlide } from './cms'
import { CoverSlide } from './cover'
import { EducoreSlide } from './educore'
import { FinaleSlide } from './finale'
import { GratitudeSlide } from './gratitude'
import { IndexSlide } from './index-slide'
import { NextSlide } from './next'
import { OopsSlide } from './oops'
import { PayflowSlide } from './payflow'
import { PersonalSlide } from './personal'
import { ProjectsSlide } from './projects'
import { RoadmapSlide } from './roadmap'
import { SchoolpetalSlide } from './schoolpetal'
import { SmallerSlide } from './smaller'
import { TechSlide } from './tech'
import { TimetrackSlide } from './timetrack'
import { TrainingSlide } from './training'
import { WhoamiSlide } from './whoami'
import { WhySlide } from './why'

export const slideComponents: Record<SlideId, ComponentType> = {
  cover: CoverSlide,
  index: IndexSlide,
  before: BeforeSlide,
  whoami: WhoamiSlide,
  why: WhySlide,
  roadmap: RoadmapSlide,
  changed: ChangedSlide,
  tech: TechSlide,
  beyond: BeyondSlide,
  training: TrainingSlide,
  projects: ProjectsSlide,
  payflow: PayflowSlide,
  timetrack: TimetrackSlide,
  educore: EducoreSlide,
  bluerader: BlueraderSlide,
  schoolpetal: SchoolpetalSlide,
  cms: CmsSlide,
  smaller: SmallerSlide,
  personal: PersonalSlide,
  oops: OopsSlide,
  aprvsoct: AprVsOctSlide,
  gratitude: GratitudeSlide,
  next: NextSlide,
  finale: FinaleSlide,
}
