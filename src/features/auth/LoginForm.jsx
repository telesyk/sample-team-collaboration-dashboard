import { Button } from '@/components'
import { FaGoogle } from 'react-icons/fa'

export default function LoginForm({
  emailRef,
  passwordRef,
  formErrors,
  constraint,
  onChangeEmail,
  onChangePassword,
  onGoogleAuth,
}) {
  return (
    <>
      <label className="label" htmlFor="email">
        {constraint.email}
      </label>
      <input
        id="email"
        name="email"
        type="email"
        className={`input ${
          formErrors && formErrors.email ? 'border-error' : ''
        }`}
        placeholder="Email"
        autoComplete="email"
        ref={emailRef}
        aria-invalid={formErrors && formErrors.email}
        onBlur={onChangeEmail}
      />
      {formErrors && formErrors.email && (
        <div className="text-error">{formErrors.email}</div>
      )}

      <label className="label" htmlFor="password">
        {constraint.password}
      </label>
      <input
        id="password"
        name="password"
        type="password"
        className={`input ${
          formErrors && formErrors.password ? 'border-error' : ''
        }`}
        placeholder="Password"
        autoComplete="current-password"
        ref={passwordRef}
        aria-invalid={formErrors && formErrors.password}
        onBlur={onChangePassword}
      />
      {formErrors && formErrors.password && (
        <div className="text-error">{formErrors.password}</div>
      )}

      <Button type="submit" className="btn btn-success my-4">
        {constraint.login}
      </Button>

      <Button
        className="btn bg-white text-black border-[#e5e5e5]"
        onClick={onGoogleAuth}
      >
        <FaGoogle className="mr-2" />
        {constraint.loginWithGoogle}
      </Button>
    </>
  )
}
