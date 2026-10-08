import { getProject, ProjectSlide } from './project-slide'

export function EducoreSlide() {
  return <ProjectSlide project={getProject('educore')} />
}
