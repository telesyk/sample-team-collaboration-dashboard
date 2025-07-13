import { PageProvider } from './PageContext'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'

export default function PageTemplate({
  children,
  options = { isFullWidth: false, isSidebar: false },
}) {
  const { isFullWidth } = options
  const mainClass = isFullWidth ? 'w-full' : 'container mx-auto'

  return (
    <PageProvider>
      <div className="min-h-screen bg-base-100 text-base-content flex flex-col">
        <PageHeader />
        {/* {isSidebar && <Sidebar />} */}
        <main className={`flex-1 p-4 ${mainClass}`}>{children}</main>
        <PageFooter />
      </div>
    </PageProvider>
  )
}
