import useThemeSwitcher from '@/hooks/useThemeSwitcher'
import { ComponentProps } from 'react'
import { CodeBlock as RCodeBlock, dracula, ocean } from 'react-code-blocks'

type Props = Omit<ComponentProps<typeof RCodeBlock>, 'theme'>

export default function CodeBlock(props: Props) {
  const [theme] = useThemeSwitcher()

  return (
    <RCodeBlock
      language="javascript"
      showLineNumbers={true}
      startingLineNumber={1}
      wrapLongLines
      customStyle={{ fontSize: 14 }}
      theme={theme === 'dark' ? dracula : ocean}
      {...props}
    />
  )
}
