import { MDXRemote } from 'next-mdx-remote'
import { ComponentProps } from 'react'
import { H1, H2, H3, H4, H5, H6, PRE, Text } from './Typography'

interface Props extends ComponentProps<typeof MDXRemote> {}

const components = {
  h1: H1,
  h2: H2,
  h3: ({ className, ...others }: ComponentProps<typeof H3>) => (
    <H3 className={[className, 'mt-8'].join(' ')} {...others} />
  ),
  h4: ({ className, ...others }: ComponentProps<typeof H3>) => (
    <H4 className={[className, 'mt-5'].join(' ')} {...others} />
  ),
  h5: H5,
  h6: H6,
  p: Text,
  code: ({ className, ...others }: ComponentProps<typeof PRE>) => (
    <PRE className={[className, 'my-2 p-3'].join(' ')} {...others} />
  ),
  inlineCode: ({ className, ...others }: ComponentProps<typeof PRE>) => (
    <PRE className={[className, 'my-2 p-3'].join(' ')} {...others} />
  )
}

function Markdown(props: Props) {
  return <MDXRemote components={components as never} {...props} />
}

export default Markdown
