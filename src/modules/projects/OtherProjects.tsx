import { getImageUrl } from '@/services/image'
import Image from 'next/image'
import { projectsData } from './data'
import Link from 'next/link'

function OtherProjects({ project }: { project: Project }) {
  projectsData.filter((item) => item.id !== project.id)

  return (
    <div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
      <p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
        Other Projects
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-6 gap-10">
        {projectsData
          .filter((item) => item.id !== project.id)
          .map((item) => {
            return (
              <Link
                key={item.id}
                href="/projects/[id]"
                as={'/projects/' + item.slug}
                aria-label="Single Project">
                <Image
                  src={getImageUrl(item.img, 'projects')}
                  className="rounded-xl cursor-pointer"
                  width="400"
                  height="400"
                  alt={item.title}
                />
              </Link>
            )
          })}
      </div>
    </div>
  )
}

export default OtherProjects
