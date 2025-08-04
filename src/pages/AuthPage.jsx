import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router'
import { PATHS, CONSTRAINT, AUTH_MODE, ERROR } from '@/constants'
import { useAuth } from '@/context'
import { PageTemplate } from '@/components/layouts'
import { AuthForm } from '@/features'
import { formValidate as validate } from '@/utils'

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

  const handleSubmit = async event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const email = formData.get('email')
    const password = formData.get('password')
    const isValid = validate({ email, password })

    if (!isValid.email || !isValid.password) {
      setFieldErrors({
        email: !isValid.email && ERROR.invalid.email,
        password: !isValid.password && ERROR.invalid.password,
      })
      return
    }

    setFieldErrors({})
    if (authMode === AUTH_MODE.login) {
      await login(email, password)
    } else {
      await signup(email, password)
    }
  }

  const handleEmailChange = () => {
    const isEmailValid = validate({ email: emailRef.current.value }).email

    if (!isEmailValid) {
      setFieldErrors(prev => ({
        ...prev,
        email: ERROR.invalid.email,
      }))
    }
  }

  const handlePasswordChange = () => {
    const isPasswordValid = validate({
      password: passwordRef.current.value,
    }).password

    if (!isPasswordValid) {
      setFieldErrors(prev => ({
        ...prev,
        password: ERROR.invalid.password,
      }))
    }
  }

  const handleTabChange = mode => {
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
        handleSubmit={handleSubmit}
        handleTabChange={handleTabChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleGoogleAuth={loginWithGoogle}
      />
    </PageTemplate>
  )
}
