import Image from 'next/image'
import { FiClock, FiTag } from 'react-icons/fi'
import PagesMetaHead from '@/components/shared/PagesMetaHead'
import OtherProjects from '@/modules/projects/OtherProjects'
import { projectsData } from '@/modules/projects/data'
import { getImageUrl } from '@/services/image'

type Props = {
  project: Project
}

function ProjectSingle({ project }: Props) {
  return (
    <div className="container mx-auto">
      <PagesMetaHead title={project.title} />

      {/* Header */}
      <div>
        <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
          {project.title}
        </p>
        <div className="flex">
          <div className="flex items-center mr-10">
            <FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {project.publishDate}
            </span>
          </div>
          <div className="flex items-center">
            <FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {project.tags}
            </span>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        {project.images.map((image) => {
          return (
            <div className="mb-10 sm:mb-0" key={image.id}>
              <Image
                src={getImageUrl(image.img)}
                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none w-full h-auto"
                alt={image.title}
                key={image.id}
                width={100}
                height={90}
              />
            </div>
          )
        })}
      </div>

      {/* Info */}
      <div className="block sm:flex gap-0 sm:gap-10 mt-14">
        <div className="w-full sm:w-1/3 text-left">
          {/* Single project client details */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
              {project.info.client}
            </p>
            <ul className="leading-loose">
              {project.info.companyInfo.map((info) => {
                return (
                  <li
                    className="font-general-regular text-ternary-dark dark:text-ternary-light"
                    key={info.id}>
                    <span>{info.title}: </span>
                    <a
                      href="https://baturaykaraduman.netlify.app"
                      className={
                        info.title === 'Website' || info.title === 'Phone'
                          ? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
                          : ''
                      }
                      aria-label="Project Website and Phone">
                      {info.details}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Single project objectives */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {project.info.title}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {project.info.description}
            </p>
          </div>

          {/* Single project technologies */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {project.info.technologies[0].title}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {project.info.technologies[0].techs.join(', ')}
            </p>
          </div>

          {/* Single project social sharing */}
          <div>
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {'Share this'}
            </p>
          </div>
        </div>

        {/*  Single project right section details */}
        <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
            {project.info.detailTitle}
          </p>
          {project.info.details.map((details) => {
            return (
              <p
                key={details.id}
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
                {details.details}
              </p>
            )
          })}
        </div>
      </div>

      <OtherProjects project={project} />
    </div>
  )
}

export async function getServerSideProps({ query }: { query: { id: string } }) {
  const { id } = query
  return {
    props: {
      project: projectsData.filter((project) => project.id === parseInt(id))[0]
    }
  }
}

export default ProjectSingle
