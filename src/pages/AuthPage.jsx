import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router'
import { ERROR, PATHS, CONSTRAINT, AUTH_MODE } from '@/constants'
import { useAuth } from '@/context'
import { PageTemplate } from '@/components/layouts'
import { LoginForm, SignupForm } from '@/features'
import { Button } from '@/components'

export default function AuthPage() {
  const { user, login, loginWithGoogle, signup } = useAuth()
  const [authMode, setAuthMode] = useState(AUTH_MODE.login) /* login | signup */
  const [fieldErrors, setFieldErrors] = useState({})
  const navigate = useNavigate()
  const emailRef = useRef()
  const passwordRef = useRef()

  useEffect(() => {
    if (user) navigate(PATHS.profile)
  }, [user])

  const validate = ({ email, password }) => {
    const errors = {}
    if (!email) {
      errors.email = ERROR.invalid.email
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      errors.email = 'Please enter a valid email address.'
    }
    if (!password) {
      errors.password = ERROR.invalid.password
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters.'
    }
    return errors
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const email = formData.get('email')
    const password = formData.get('password')

    const errors = validate({ email, password })
    setFieldErrors(errors)
    if (Object.keys(errors).length > 0) return

    setFieldErrors({})
    if (authMode === AUTH_MODE.login) {
      await login(email, password)
    } else {
      await signup(email, password)
    }
  }

  const handleEmailChange = () => {
    setFieldErrors(prev => ({ ...prev, email: null }))
  }

  const handlePasswordChange = () => {
    setFieldErrors(prev => ({ ...prev, password: null }))
  }

  const handleTabChange = mode => {
    setAuthMode(mode)
    setFieldErrors({})
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
          <Button
            type="button"
            role="tab"
            aria-selected={authMode === AUTH_MODE.login}
            tabIndex={authMode === AUTH_MODE.login ? 0 : -1}
            className={
              authMode === AUTH_MODE.login
                ? 'tab basis-1/2 tab-active'
                : 'tab basis-1/2'
            }
            onClick={() => handleTabChange(AUTH_MODE.login)}
          >
            {CONSTRAINT.form.login}
          </Button>
          <Button
            type="button"
            role="tab"
            aria-selected={authMode === AUTH_MODE.signup}
            tabIndex={authMode === AUTH_MODE.signup ? 0 : -1}
            className={
              authMode === AUTH_MODE.signup
                ? 'tab basis-1/2 tab-active'
                : 'tab basis-1/2'
            }
            onClick={() => handleTabChange(AUTH_MODE.signup)}
          >
            {CONSTRAINT.form.signup}
          </Button>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          {authMode === AUTH_MODE.login ? (
            <LoginForm
              emailRef={emailRef}
              passwordRef={passwordRef}
              handleEmailChange={handleEmailChange}
              handlePasswordChange={handlePasswordChange}
              handleGoogleAuth={loginWithGoogle}
              fieldErrors={fieldErrors}
              constraint={CONSTRAINT.form}
            />
          ) : (
            <SignupForm
              emailRef={emailRef}
              passwordRef={passwordRef}
              handleEmailChange={handleEmailChange}
              handlePasswordChange={handlePasswordChange}
              fieldErrors={fieldErrors}
              constraint={CONSTRAINT.form}
            />
          )}
        </fieldset>
      </form>
    </PageTemplate>
  )
}
