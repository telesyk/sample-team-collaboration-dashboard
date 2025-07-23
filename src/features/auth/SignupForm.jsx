import React from 'react'

export default function SignupForm({
  emailRef,
  passwordRef,
  handleEmailChange,
  handlePasswordChange,
  errorMessage,
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
        aria-invalid={!!errorMessage?.email}
      />
      {errorMessage && errorMessage.email && (
        <div className="validator-hint">{errorMessage.email}</div>
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
        aria-invalid={!!errorMessage?.password}
      />
      {errorMessage && errorMessage.password && (
        <div className="validator-hint">{errorMessage.password}</div>
      )}

      <button type="submit" className="btn btn-info my-4">
        {constraint.signup}
      </button>
    </>
  )
}
