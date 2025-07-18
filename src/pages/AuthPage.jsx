import { useEffect, useState, useRef } from 'react'
import { useAuth } from '@/features'
import { PageTemplate } from '@/components'
import { useNavigate } from 'react-router'
import { ERROR, PATHS } from '@/constants'

export default function AuthPage() {
  const { user, login, error } = useAuth()
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()
  const emailRef = useRef()
  const passwordRef = useRef()

  useEffect(() => {
    if (user) navigate(PATHS.profile)
  }, [user])

  const handleSubmit = async event => {
    event.preventDefault()

    // Reset custom validity before validation
    emailRef.current.setCustomValidity('')
    passwordRef.current.setCustomValidity('')

    const formData = new FormData(event.target)
    const email = formData.get('email')
    const password = formData.get('password')

    if (!email) {
      emailRef.current.setCustomValidity(ERROR.invalid.email)
      emailRef.current.reportValidity()
      setErrorMessage(prev => ({
        ...prev,
        email: ERROR.invalid.email,
      }))
      return
    }

    if (!password) {
      passwordRef.current.setCustomValidity(ERROR.invalid.password)
      passwordRef.current.reportValidity()
      setErrorMessage(prev => ({
        ...prev,
        password: ERROR.invalid.password,
      }))
      return
    }

    setErrorMessage(null)
    await login(email, password)
  }

  const handleEmailChange = () => {
    emailRef.current.setCustomValidity('')
    setErrorMessage(prev => ({ ...prev, email: null }))
  }

  const handlePasswordChange = () => {
    passwordRef.current.setCustomValidity('')
    setErrorMessage(prev => ({ ...prev, password: null }))
  }

  return (
    <PageTemplate>
      <form onSubmit={handleSubmit} className="max-w-xs mx-auto">
        <div className="space-y-4 mb-2">
          <h1 className="text-2xl text-center">AuthPage</h1>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>

          {error && error.message && (
            <details className="overflow-auto">
              <summary className="text-warning">
                {ERROR.invalid.credentials}
              </summary>
              <pre data-prefix=">" className="text-error">
                <code className="me-2">❌</code>
                <code>{error.message}</code>
              </pre>
            </details>
          )}

          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="input validator"
            placeholder="Email"
            autoComplete="email"
            ref={emailRef}
            onChange={handleEmailChange}
            aria-invalid={!!errorMessage?.email}
          />
          {errorMessage && errorMessage.email && (
            <div className="validator-hint">{errorMessage.email}</div>
          )}

          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="input validator"
            placeholder="Password"
            autoComplete="current-password"
            ref={passwordRef}
            onChange={handlePasswordChange}
            aria-invalid={!!errorMessage?.password}
          />
          {errorMessage && errorMessage.password && (
            <div className="validator-hint">{errorMessage.password}</div>
          )}

          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
        </fieldset>
      </form>
    </PageTemplate>
  )
}
