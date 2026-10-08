import { getProject, ProjectSlide } from './project-slide'

export function SchoolpetalSlide() {
  return <ProjectSlide project={getProject('schoolpetal')} />
}
