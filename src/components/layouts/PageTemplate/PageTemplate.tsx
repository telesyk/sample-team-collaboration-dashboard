import PageContainer from './PageContainer'
import { PageProvider, PageProviderProps } from './PageContext'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'

// need to Load page-template via Lazy
export default function PageTemplate({
  children,
  options = { isFullWidth: false, isSidebar: false },
}: PageProviderProps) {
  const { isFullWidth } = options

  return (
    <div className="min-h-screen bg-base-100 text-base-content flex flex-col">
      <PageProvider>
        <PageHeader />
        {/* {isSidebar && <Sidebar />} */}
        <PageContainer className={isFullWidth ? 'w-full' : 'container mx-auto'}>
          {children}
        </PageContainer>
        <PageFooter />
      </PageProvider>
    </div>
  )
}
