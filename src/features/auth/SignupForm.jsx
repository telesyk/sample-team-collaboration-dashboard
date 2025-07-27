import { Button } from '@/components'

export default function SignupForm({
  emailRef,
  passwordRef,
  handleEmailChange,
  handlePasswordChange,
  fieldErrors,
  constraint,
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
        className="input validator"
        placeholder="Email"
        autoComplete="email"
        ref={emailRef}
        onChange={handleEmailChange}
        aria-invalid={!!fieldErrors?.email}
      />
      {fieldErrors && fieldErrors.email && (
        <div className="validator-hint">{fieldErrors.email}</div>
      )}

      <label className="label" htmlFor="password">
        {constraint.password}
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
        aria-invalid={!!fieldErrors?.password}
      />
      {fieldErrors && fieldErrors.password && (
        <div className="validator-hint">{fieldErrors.password}</div>
      )}

      <Button type="submit" className="btn btn-info my-4">
        {constraint.signup}
      </Button>
    </>
  )
}
