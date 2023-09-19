import PagesMetaHead from '@/components/shared/PagesMetaHead'
import BlogList from '@/modules/blog/List'
import { motion } from 'framer-motion'

function blog() {
  return (
    <div>
      <PagesMetaHead title="Blog" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.5,
          delay: 0.1
        }}
        className="container mx-auto">
        <BlogList />
      </motion.div>
    </div>
  )
}

export default blog
