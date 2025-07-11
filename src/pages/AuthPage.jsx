import { PageTemplate, PageWrapper } from '../components'
import { mockUser } from '../utils'

export default function AuthPage() {
  return (
    <PageTemplate>
      <PageWrapper>
        <div className="max-w-lg mx-auto">
          <div className="space-y-4 mb-2">
            <h1 className="text-2xl text-center">AuthPage</h1>
            <p className="text-center">Your creds to enter:</p>
          </div>
          <pre className="flex flex-col gap-2">
            <code>{mockUser.email}</code>
            <code>{mockUser.password}</code>
          </pre>
        </div>
      </PageWrapper>
    </PageTemplate>
  )
}
