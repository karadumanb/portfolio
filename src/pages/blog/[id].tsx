import Markdown from '@/components/general/Markdown'
import PagesMetaHead from '@/components/shared/PagesMetaHead'
import { blogsData } from '@/modules/blog/data'
import { getImageUrl } from '@/services/image'
import { getMarkdownData } from '@/services/markdown'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Image from 'next/image'

type Props = {
  blog: Blog
  markdownSerializedResult: MDXRemoteSerializeResult
}

function Blog({ blog, markdownSerializedResult }: Props) {
  return (
    <div className="container mx-auto px-10" style={{ maxWidth: '52rem' }}>
      <PagesMetaHead title={blog.title} />

      {/* Header */}
      <p className="text-center font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
        {blog.title}
      </p>

      {/* Gallery */}
      <div className="flex justify-center">
        <Image
          src={getImageUrl(blog.imageUrl, 'blog')}
          className="rounded-xl max-w-xl shadow-lg sm:shadow-none w-full h-auto"
          alt={blog.title}
          key={blog.id}
          width={220}
          height={110}
        />
      </div>

      {/*  Single project right section details */}
      <div className="w-full mt-10">
        <span className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          <Markdown {...markdownSerializedResult} />
        </span>
      </div>
    </div>
  )
}
export async function getServerSideProps({ query }: { query: { id: string } }) {
  const { id } = query
  const blog =
    blogsData.find((blog) => blog.id === parseInt(id)) || blogsData.find((blog) => blog.slug === id)

  const source = await getMarkdownData(blog?.textUrl as string, 'blog')

  const mdxSource = await serialize(source)

  return {
    props: {
      blog,
      markdownSerializedResult: mdxSource
    }
  }
}

export default Blog
