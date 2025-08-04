import { Button } from '@/components'

export default function SignupForm({
  emailRef,
  passwordRef,
  formErrors,
  constraint,
  onChangeEmail,
  onChangePassword,
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

      <Button type="submit" className="btn btn-info my-4">
        {constraint.signup}
      </Button>
    </>
  )
}
