import { Button } from '@/components'
import { FaGoogle } from 'react-icons/fa'

export default function AuthFields({
  emailRef,
  passwordRef,
  formErrors,
  constraint,
  isLoginMode,
  onChangeEmail,
  onChangePassword,
  onGoogleAuth,
}) {
  const isEmailError = formErrors && formErrors.email
  const isPasswordError = formErrors && formErrors.password

  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <label className="label" htmlFor="email">
        {constraint.email}
      </label>
      <input
        id="email"
        name="email"
        type="email"
        className={`input ${isEmailError ? 'border-error' : ''}`}
        placeholder="Email"
        autoComplete="email"
        ref={emailRef}
        aria-invalid={isEmailError}
        onBlur={onChangeEmail}
      />
      {isEmailError && <div className="text-error">{formErrors.email}</div>}

      <label className="label" htmlFor="password">
        {constraint.password}
      </label>
      <input
        id="password"
        name="password"
        type="password"
        className={`input ${isPasswordError ? 'border-error' : ''}`}
        placeholder="Password"
        autoComplete="current-password"
        ref={passwordRef}
        aria-invalid={isPasswordError}
        onBlur={onChangePassword}
      />
      {isPasswordError && (
        <div className="text-error">{formErrors.password}</div>
      )}

      <Button
        type="submit"
        className={'btn my-4' + (isLoginMode ? ' btn-success' : ' btn-info')}
      >
        {isLoginMode ? constraint.login : constraint.signup}
      </Button>

      {isLoginMode && (
        <Button
          className="btn bg-white text-black border-[#e5e5e5]"
          onClick={onGoogleAuth}
        >
          <FaGoogle className="mr-2" />
          {constraint.loginWithGoogle}
        </Button>
      )}
    </fieldset>
  )
}
