import { MDXRemote } from 'next-mdx-remote'
import { ComponentProps, DetailedHTMLProps, LiHTMLAttributes } from 'react'
import CodeBlock from './CodeBlock'
import { H1, H2, H3, H4, H5, H6, PRE, Text } from './Typography'

interface Props extends ComponentProps<typeof MDXRemote> {}

const components = {
  h1: H1,
  h2: ({ className, ...others }: ComponentProps<typeof H3>) => (
    <H2 className={[className, 'mt-9'].join(' ')} {...others} />
  ),
  h3: ({ className, ...others }: ComponentProps<typeof H3>) => (
    <H3 className={[className, 'mt-8'].join(' ')} {...others} />
  ),
  h4: ({ className, ...others }: ComponentProps<typeof H3>) => (
    <H4 className={[className, 'mt-5'].join(' ')} {...others} />
  ),
  h5: ({ className, ...others }: ComponentProps<typeof H3>) => (
    <H5 className={[className, 'mt-4'].join(' ')} {...others} />
  ),
  h6: ({ className, ...others }: ComponentProps<typeof H3>) => (
    <H6 className={[className, 'mt-3'].join(' ')} {...others} />
  ),
  p: Text,
  li: ({
    className,
    ...others
  }: DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>) => (
    <li className={[className, 'mb-2', 'text-lg'].join(' ')} {...others} />
  ),
  code: ({ className, children }: ComponentProps<typeof PRE>) => {
    const language = (className || '').split('language-')[1]

    return (
      <div className="mt-2 mb-6">
        <CodeBlock
          text={children as string}
          language={language || 'javascript'}
          showLineNumbers={Boolean(language)}
        />
      </div>
    )
  },
  inlineCode: ({ className, ...others }: ComponentProps<typeof PRE>) => (
    <PRE className={[className, 'my-2 p-3'].join(' ')} {...others} />
  )
}

function Markdown(props: Props) {
  return <MDXRemote components={components as never} {...props} />
}

export default Markdown
