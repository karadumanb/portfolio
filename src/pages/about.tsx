import { motion } from 'framer-motion'
import AboutClients from '@/modules/about/Clients'
import AboutCounter from '@/modules/about/Counter'
import AboutMeBio from '@/modules/about/Bio'
import PagesMetaHead from '@/components/shared/PagesMetaHead'

function about() {
  return (
    <div>
      <PagesMetaHead title="About Me" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto">
        <AboutMeBio />
      </motion.div>

      {/** Counter without paddings */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <AboutCounter />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto">
        <AboutClients />
      </motion.div>
    </div>
  )
}

export default about
