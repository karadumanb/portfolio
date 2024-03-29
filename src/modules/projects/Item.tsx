import { getImageUrl } from '@/services/image'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  project: Project
}

const ProjectItem = ({ project }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        delay: 0.15
      }}>
      <Link
        href="/projects/[id]"
        as={'/projects/' + project.slug}
        aria-label="Single Project"
        passHref>
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          <Image
            src={getImageUrl(project.img, 'projects')}
            className="rounded-t-xl border-none w-full h-auto"
            alt="Single Project"
            width={100}
            height={90}
          />
          <div className="text-center px-4 py-6">
            <p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
              {project.title}
            </p>
            <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {project.category}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProjectItem
