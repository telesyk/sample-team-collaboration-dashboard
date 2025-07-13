// import { PageTemplate, PageWrapper } from '@/components'
import { useAuth } from '@/features/auth/AuthContext'
import { PageTemplate } from '@/components'

export default function AuthPage() {
  const { user, login } = useAuth()
  const actionSubmit = formData => {
    const email = formData.get('email')
    const password = formData.get('password')

    login(email, password)
  }
  return (
    <PageTemplate>
      <form action={actionSubmit} className="max-w-xs mx-auto">
        <div className="space-y-4 mb-2">
          <h1 className="text-2xl text-center">AuthPage</h1>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>

          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
            autoComplete="true"
          />

          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
            autoComplete="true"
          />

          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
        </fieldset>
      </form>
    </PageTemplate>
  )
}
