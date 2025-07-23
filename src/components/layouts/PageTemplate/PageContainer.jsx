export default function PageContainer({ children, className = '' }) {
  return <main className={`flex-1 p-4 ${className}`}>{children}</main>
}
