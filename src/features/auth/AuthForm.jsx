import { Button } from '@/components'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { AUTH_MODE } from '@/constants'

export default function AuthForm({
  constraint,
  authMode,
  emailRef,
  passwordRef,
  formErrors,
  handleSubmit,
  handleEmailChange,
  handlePasswordChange,
  handleGoogleAuth,
  handleTabChange,
}) {
  return (
    <form onSubmit={handleSubmit} className="max-w-xs mx-auto">
      <div className="space-y-4 mb-2">
        <h1 className="text-2xl text-center">{constraint.authentication}</h1>
      </div>
      <div role="tablist" className="tabs tabs-lift w-full">
        <Button
          type="button"
          role="tab"
          aria-selected={authMode === AUTH_MODE.login}
          tabIndex={authMode === AUTH_MODE.login ? 0 : -1}
          className={
            authMode === AUTH_MODE.login
              ? 'tab basis-1/2 tab-active'
              : 'tab basis-1/2'
          }
          onClick={() => handleTabChange(AUTH_MODE.login)}
        >
          {constraint.login}
        </Button>
        <Button
          type="button"
          role="tab"
          aria-selected={authMode === AUTH_MODE.signup}
          tabIndex={authMode === AUTH_MODE.signup ? 0 : -1}
          className={
            authMode === AUTH_MODE.signup
              ? 'tab basis-1/2 tab-active'
              : 'tab basis-1/2'
          }
          onClick={() => handleTabChange(AUTH_MODE.signup)}
        >
          {constraint.signup}
        </Button>
      </div>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        {authMode === AUTH_MODE.login ? (
          <LoginForm
            formErrors={formErrors}
            constraint={constraint}
            emailRef={emailRef}
            passwordRef={passwordRef}
            onChangeEmail={handleEmailChange}
            onChangePassword={handlePasswordChange}
            onGoogleAuth={handleGoogleAuth}
          />
        ) : (
          <SignupForm
            constraint={constraint}
            formErrors={formErrors}
            emailRef={emailRef}
            passwordRef={passwordRef}
            onChangeEmail={handleEmailChange}
            onChangePassword={handlePasswordChange}
          />
        )}
      </fieldset>
    </form>
  )
}
