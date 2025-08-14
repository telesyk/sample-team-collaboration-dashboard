import { CustomEventHandler } from '@/types'

type ButtonProps = {
  mode?: 'button' | 'tab' | 'link'
  children?: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  [key: string]: any // Allow other HTML button attributes
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: CustomEventHandler
}

export default function Button({
  children,
  className,
  mode = 'button',
  onClick,
  ...restAttributes
}: ButtonProps) {
  if (!children) return null

  const modeClassName =
    mode === 'button' ? 'btn' : mode === 'link' ? 'btn-link' : mode
  const classes = `${modeClassName} ${className ? className : ''}`.trim()

  return (
    <button className={classes} onClick={onClick} {...restAttributes}>
      {children && children}
    </button>
  )
}
