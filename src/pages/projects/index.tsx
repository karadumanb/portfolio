import PagesMetaHead from '@/components/shared/PagesMetaHead'
import ProjectList from '@/modules/projects/List'
import { motion } from 'framer-motion'

function index() {
  return (
    <div>
      <PagesMetaHead title="Projects" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.5,
          delay: 0.1
        }}
        className="container mx-auto">
        <ProjectList />
      </motion.div>
    </div>
  )
}

export default index
