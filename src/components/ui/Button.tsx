type ButtonProps = {
  mode?: 'button' | 'tab' | 'link'
  children?: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  [key: string]: any // Allow other HTML button attributes
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({
  children,
  className,
  mode = 'button',
  onClick,
  ...restAttributes
}: ButtonProps) {
  const modeClassName = mode === 'button' ? 'btn' : mode
  const classes = `${modeClassName} ${className ? className : ''}`.trim()

  return (
    <button className={classes} onClick={onClick} {...restAttributes}>
      {children && children}
    </button>
  )
}
