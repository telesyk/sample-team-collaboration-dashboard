type PageContainerProps = {
  children?: React.ReactNode
  className?: string
}

export default function PageContainer({
  children,
  className = '',
}: PageContainerProps) {
  return <main className={`flex-1 p-4 ${className}`}>{children}</main>
}
