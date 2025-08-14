export default function Spinner({ className = '' }: { className?: string }) {
  const classes = `loading loading-spinner ${className}`.trim()
  return <span className={classes}></span>
}
