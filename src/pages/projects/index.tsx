import PagesMetaHead from '@/components/shared/PagesMetaHead'
import ProjectsGrid from '@/modules/projects/Grid'

function index() {
  return (
    <div className="container mx-auto">
      <PagesMetaHead title="Projects" />

      <ProjectsGrid />
    </div>
  )
}

export default index
