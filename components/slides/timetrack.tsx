import { getProject, ProjectSlide } from './project-slide'

export function TimetrackSlide() {
  return <ProjectSlide project={getProject('timetrack')} />
}
