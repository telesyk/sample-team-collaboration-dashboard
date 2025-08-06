export default function Button({
  children,
  className,
  mode = 'button' /* button = 'btn' | tab | link */,
  onClick,
  ...restAttributes
}) {
  const modeClassName = mode === 'button' ? 'btn' : mode
  const classes = `${modeClassName} ${className ? className : ''}`.trim()

  return (
    <button className={classes} onClick={onClick} {...restAttributes}>
      {children && children}
    </button>
  )
}
