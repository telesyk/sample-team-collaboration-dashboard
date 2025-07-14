import { useEffect } from 'react'
import { useAuth } from '@/features/auth/AuthContext'
import { PageTemplate } from '@/components'
import { useNavigate } from 'react-router'
import { PATHS } from '@/constants'

export default function AuthPage() {
  const { user, errorMessage, login } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) navigate(PATHS.profile)
  }, [user])

  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const email = formData.get('email')
    const password = formData.get('password')
    login(email, password)
  }

  return (
    <PageTemplate>
      <form onSubmit={handleSubmit} className="max-w-xs mx-auto">
        <div className="space-y-4 mb-2">
          <h1 className="text-2xl text-center">AuthPage</h1>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>

          {errorMessage && <div className="text-warning">{errorMessage}</div>}

          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={`input validator ${errorMessage ? 'border-error' : ''}`}
            placeholder="Email"
            autoComplete="email"
          />

          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className={`input validator ${errorMessage ? 'border-error' : ''}`}
            placeholder="Password"
            autoComplete="current-password"
          />

          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
        </fieldset>
      </form>
    </PageTemplate>
  )
}
