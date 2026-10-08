import { getProject, ProjectSlide } from './project-slide'

export function CmsSlide() {
  return <ProjectSlide project={getProject('cms')} />
}
