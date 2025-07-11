import PageFooter from './PageFooter'
import PageHeader from './PageHeader'

export default function PageTemplate({ children }) {
  return (
    <div className="min-h-screen bg-base-100 text-base-content flex flex-col">
      <PageHeader />
      {children}
      <PageFooter />
    </div>
  )
}
