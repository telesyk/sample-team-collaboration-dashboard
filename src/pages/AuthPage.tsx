import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router'
import { PATHS, CONSTRAINT, AUTH_MODE } from '@/constants'
import { useAuth } from '@/context'
import { PageTemplate } from '@/components/layouts'
import { AuthForm } from '@/features/index'
import { formValidate as validate } from '@/utils'
import { AuthContextProps, AuthFieldProps } from '@/types'

export default function AuthPage() {
  const { user, login, loginWithGoogle, signup, isLoading } =
    useAuth() as AuthContextProps
  const [authMode, setAuthMode] = useState(AUTH_MODE.login) /* login | signup */
  const [fieldErrors, setFieldErrors] = useState({})
  const navigate = useNavigate()
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (user) navigate(PATHS.profile)
  }, [user])

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const email = formData.get('email')
    const password = formData.get('password')
    const validation = validate({ email, password } as AuthFieldProps)

    if (Object.values(validation).some(error => error)) {
      setFieldErrors({ ...validation })
      return
    }

    setFieldErrors({})
    if (authMode === AUTH_MODE.login) {
      if (typeof login === 'function') {
        await login(email, password)
      }
    } else {
      if (typeof signup === 'function') {
        await signup(email, password)
      }
    }
  }

  const handleEmailChange = () => {
    const { email } = validate({
      email: emailRef?.current?.value,
    } as AuthFieldProps)

    if (!email) {
      setFieldErrors(prev => ({
        ...prev,
        email,
      }))
    }
  }

  const handlePasswordChange = () => {
    const { password } = validate({
      password: passwordRef?.current?.value,
    } as AuthFieldProps)

    if (!password) {
      setFieldErrors(prev => ({
        ...prev,
        password,
      }))
    }
  }

  const handleTabChange = (mode: string) => {
    setAuthMode(mode)
    setFieldErrors({})
  }

  return (
    <PageTemplate>
      <AuthForm
        authMode={authMode}
        emailRef={emailRef}
        passwordRef={passwordRef}
        formErrors={fieldErrors}
        constraint={CONSTRAINT.form}
        isLoading={isLoading}
        handleSubmit={handleSubmit}
        handleTabChange={handleTabChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleGoogleAuth={loginWithGoogle}
      />
    </PageTemplate>
  )
}
