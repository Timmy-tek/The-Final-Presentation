import { getProject, ProjectSlide } from './project-slide'

export function PayflowSlide() {
  return <ProjectSlide project={getProject('payflow')} />
}
