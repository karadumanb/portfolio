import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

interface Props
  extends Omit<
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    'title'
  > {
  title: ReactNode
}

function Button({ title, ...others }: Props) {
  return <button {...others}>{title}</button>
}

export default Button
