import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router'
import { ERROR, PATHS, CONSTRAINT, AUTH_MODE } from '@/constants'
import { useAuth } from '@/context'
import { PageTemplate } from '@/components/layouts'
import { LoginForm, SignupForm } from '@/features'

export default function AuthPage() {
  const { user, login, loginWithGoogle, signup, error } = useAuth()
  const [errorMessage, setErrorMessage] = useState(null)
  const [authMode, setAuthMode] = useState(AUTH_MODE.login) /* login | signup */
  const navigate = useNavigate()
  const emailRef = useRef()
  const passwordRef = useRef()

  useEffect(() => {
    if (user) navigate(PATHS.profile)
  }, [user])

  const handleTab = () => {
    setAuthMode(prev => {
      return prev === AUTH_MODE.login ? AUTH_MODE.signup : AUTH_MODE.login
    })
  }

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
    authMode === AUTH_MODE.login
      ? await login(email, password)
      : await signup(email, password)
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
          <h1 className="text-2xl text-center">
            {CONSTRAINT.form.authentication}
          </h1>
        </div>
        <div role="tablist" className="tabs tabs-lift w-full">
          <a
            role="tab"
            className={
              authMode === AUTH_MODE.login
                ? 'tab basis-1/2 tab-active'
                : 'tab basis-1/2'
            }
            onClick={handleTab}
          >
            {CONSTRAINT.form.login}
          </a>
          <a
            role="tab"
            className={
              authMode === AUTH_MODE.signup
                ? 'tab basis-1/2 tab-active'
                : 'tab basis-1/2'
            }
            onClick={handleTab}
          >
            {CONSTRAINT.form.signup}
          </a>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          {authMode === AUTH_MODE.login ? (
            <LoginForm
              emailRef={emailRef}
              passwordRef={passwordRef}
              handleEmailChange={handleEmailChange}
              handlePasswordChange={handlePasswordChange}
              handleGoogleAuth={loginWithGoogle}
              errorMessage={errorMessage}
              constraint={CONSTRAINT.form}
            />
          ) : (
            <SignupForm
              emailRef={emailRef}
              passwordRef={passwordRef}
              handleEmailChange={handleEmailChange}
              handlePasswordChange={handlePasswordChange}
              errorMessage={errorMessage}
              constraint={CONSTRAINT.form}
            />
          )}

          {error && error.message && (
            <details className="overflow-auto">
              <summary className="text-warning">
                {ERROR.invalid.credentials}
              </summary>
              <pre className="py-1 space-y-1 text-error">
                <pre>
                  <code className="me-2">⚠️</code>
                  <code>{error.message}</code>
                </pre>
                <pre>
                  <code>{ERROR.invalid.general}</code>
                </pre>
              </pre>
            </details>
          )}
        </fieldset>
      </form>
    </PageTemplate>
  )
}
