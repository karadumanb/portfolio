import { getImageUrl } from '@/services/image'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  blog: Blog
}

const BlogItem = ({ blog }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        delay: 0.15
      }}>
      <Link href="/blog/[id]" as={'/blog/' + blog.slug} aria-label="Single Blog" passHref>
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          <Image
            src={getImageUrl(blog.imageUrl, 'blog')}
            className="rounded-t-xl border-none w-full h-auto"
            alt="Single Blog"
            width={200}
            height={190}
          />
          <div className="px-4 py-6">
            <p className="font-general-medium text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {blog.title}
            </p>
            <span className="text-md text-ternary-dark dark:text-ternary-light">
              {blog.summary}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default BlogItem
