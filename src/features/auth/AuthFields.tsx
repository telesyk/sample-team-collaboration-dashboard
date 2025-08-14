import { Button, Spinner } from '@/components'
import { AuthFormInterface, CustomEventHandler } from '@/types'
import { FaGoogle } from 'react-icons/fa'

interface AuthFieldsProps extends AuthFormInterface {
  isLoginMode: boolean
  onChangeEmail: CustomEventHandler
  onChangePassword: CustomEventHandler
  onGoogleAuth: CustomEventHandler
}

export default function AuthFields({
  emailRef,
  passwordRef,
  formErrors,
  constraint,
  isLoginMode,
  isLoading,
  onChangeEmail,
  onChangePassword,
  onGoogleAuth,
}: AuthFieldsProps) {
  const isEmailError = Boolean(formErrors && formErrors.email)
  const isPasswordError = Boolean(formErrors && formErrors.password)

  return (
    <fieldset className="fieldset p-4 bg-base-200 border-base-300 rounded-box rounded-t-none w-xs border border-t-0">
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

      {isLoading ? (
        <Spinner className="mx-auto my-4" />
      ) : (
        <Button
          type="submit"
          className={'btn my-4' + (isLoginMode ? ' btn-success' : ' btn-info')}
        >
          {isLoginMode ? constraint.login : constraint.signup}
        </Button>
      )}

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
