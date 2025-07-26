export default function Button({
  children,
  className,
  onClick,
  ...restAttributes
}) {
  const classes = `btn ${className ? className : ''}`.trim()

  return (
    <button className={classes} onClick={onClick} {...restAttributes}>
      {children && children}
    </button>
  )
}
