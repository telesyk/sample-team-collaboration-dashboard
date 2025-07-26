import { Button } from '@/components'
import { FaGoogle } from 'react-icons/fa'

export default function LoginForm({
  emailRef,
  passwordRef,
  handleEmailChange,
  handlePasswordChange,
  handleGoogleAuth,
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

      <Button type="submit" className="btn btn-success my-4">
        {constraint.login}
      </Button>

      <Button
        onClick={handleGoogleAuth}
        className="btn bg-white text-black border-[#e5e5e5]"
      >
        <FaGoogle className="mr-2" />
        {constraint.loginWithGoogle}
      </Button>
    </>
  )
}
