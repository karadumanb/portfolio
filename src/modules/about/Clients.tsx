import { getImageUrl } from '@/services/image'
import { projectsData } from '../projects/data'
import ClientItem from './ClientItem'

function AboutClients() {
  return (
    <div className="mt-10 sm:mt-20">
      <p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
        {'Some of the brands I worked with'}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-6 mt-10 sm:mt-14 gap-2">
        {projectsData.map((project) => (
          <ClientItem
            title={project.title}
            image={getImageUrl(project.img, 'projects')}
            key={project.id}
          />
        ))}
      </div>
    </div>
  )
}

export default AboutClients
