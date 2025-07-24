import { render, screen, fireEvent } from '@testing-library/react'
import LoginForm from './LoginForm'
import { vi } from 'vitest'

describe('LoginForm', () => {
  const constraint = {
    email: 'Email',
    password: 'Password',
    login: 'Login',
    loginWithGoogle: 'Login with Google',
  }

  const setup = (overrides = {}) => {
    const handleEmailChange = vi.fn()
    const handlePasswordChange = vi.fn()
    const handleGoogleAuth = vi.fn()
    const emailRef = { current: null }
    const passwordRef = { current: null }

    render(
      <LoginForm
        emailRef={emailRef}
        passwordRef={passwordRef}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleGoogleAuth={handleGoogleAuth}
        errorMessage={overrides.errorMessage || null}
        constraint={constraint}
      />
    )

    return {
      handleEmailChange,
      handlePasswordChange,
      handleGoogleAuth,
    }
  }

  it('renders form fields and buttons', () => {
    setup()

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: constraint.login })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: constraint.loginWithGoogle })
    ).toBeInTheDocument()
  })

  it('calls handleEmailChange on input', () => {
    const { handleEmailChange } = setup()
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' },
    })
    expect(handleEmailChange).toHaveBeenCalled()
  })

  it('calls handlePasswordChange on input', () => {
    const { handlePasswordChange } = setup()
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: '123456' },
    })
    expect(handlePasswordChange).toHaveBeenCalled()
  })

  it('calls handleGoogleAuth when clicking the Google button', () => {
    const { handleGoogleAuth } = setup()
    fireEvent.click(screen.getByRole('button', { name: /login with google/i }))
    expect(handleGoogleAuth).toHaveBeenCalled()
  })

  it('displays error messages if provided', () => {
    const errorMessage = {
      email: 'Invalid email',
      password: 'Password required',
    }
    setup({ errorMessage })

    expect(screen.getByText(/invalid email/i)).toBeInTheDocument()
    expect(screen.getByText(/password required/i)).toBeInTheDocument()
  })
})
