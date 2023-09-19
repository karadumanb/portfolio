import { HTMLAttributes, DetailedHTMLProps } from 'react'

interface TextProps
  extends Partial<DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>> {}

export function Text({ className, children, ...others }: TextProps) {
  return (
    <p
      className={[
        'mb-2 font-general-medium text-sm text-primary-dark dark:text-primary-light',
        className
      ]
        .filter(Boolean)
        .join(' ')}
      {...others}>
      {children}
    </p>
  )
}

interface H1Props
  extends Partial<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> {}

export function H1({ className, children, ...others }: H1Props) {
  return (
    <h1
      className={['mb-8 text-xxxl text-primary-dark dark:text-primary-light', className]
        .filter(Boolean)
        .join(' ')}
      {...others}>
      {children}
    </h1>
  )
}

interface H2Props
  extends Partial<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> {}

export function H2({ className, children, ...others }: H2Props) {
  return (
    <h2
      className={['mb-6 text-xxl text-primary-dark dark:text-primary-light', className]
        .filter(Boolean)
        .join(' ')}
      {...others}>
      {children}
    </h2>
  )
}

interface H3Props
  extends Partial<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> {}

export function H3({ className, children, ...others }: H3Props) {
  return (
    <h3
      className={['mb-4 text-xl text-primary-dark dark:text-primary-light', className]
        .filter(Boolean)
        .join(' ')}
      {...others}>
      {children}
    </h3>
  )
}

interface H4Props
  extends Partial<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> {}

export function H4({ className, children, ...others }: H4Props) {
  return (
    <h4
      className={['mb-4 text-lg text-primary-dark dark:text-primary-light', className]
        .filter(Boolean)
        .join(' ')}
      {...others}>
      {children}
    </h4>
  )
}

interface H5Props
  extends Partial<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> {}

export function H5({ className, children, ...others }: H5Props) {
  return (
    <h5
      className={['mb-4 text-md text-primary-dark dark:text-primary-light', className]
        .filter(Boolean)
        .join(' ')}
      {...others}>
      {children}
    </h5>
  )
}

interface H6Props
  extends Partial<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> {}

export function H6({ className, children, ...others }: H6Props) {
  return (
    <h6
      className={['mb-4 text-sm text-primary-dark dark:text-primary-light', className]
        .filter(Boolean)
        .join(' ')}
      {...others}>
      {children}
    </h6>
  )
}

interface PreProps
  extends Partial<DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>> {}

export function PRE({ className, children, ...others }: PreProps) {
  return (
    <pre
      className={[
        'overflow-scroll bg-black dark:bg-slate-400 text-sm dark:text-primary-dark text-primary-light',
        className
      ]
        .filter(Boolean)
        .join(' ')}
      {...others}>
      {children}
    </pre>
  )
}
