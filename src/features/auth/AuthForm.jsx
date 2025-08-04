import { Button } from '@/components'
import AuthFields from './AuthFields'
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
  const isLoginMode = authMode === AUTH_MODE.login

  return (
    <form onSubmit={handleSubmit} className="max-w-xs mx-auto">
      <div className="space-y-4 mb-2">
        <h1 className="text-2xl text-center">{constraint.authentication}</h1>
      </div>
      <div role="tablist" className="tabs tabs-lift w-full">
        <Button
          type="button"
          role="tab"
          aria-selected={isLoginMode}
          tabIndex={isLoginMode ? 0 : -1}
          className={isLoginMode ? 'tab basis-1/2 tab-active' : 'tab basis-1/2'}
          onClick={() => handleTabChange(AUTH_MODE.login)}
        >
          {constraint.login}
        </Button>
        <Button
          type="button"
          role="tab"
          aria-selected={!isLoginMode}
          tabIndex={!isLoginMode ? 0 : -1}
          className={
            !isLoginMode ? 'tab basis-1/2 tab-active' : 'tab basis-1/2'
          }
          onClick={() => handleTabChange(AUTH_MODE.signup)}
        >
          {constraint.signup}
        </Button>
      </div>
      <AuthFields
        emailRef={emailRef}
        passwordRef={passwordRef}
        formErrors={formErrors}
        constraint={constraint}
        isLoginMode={isLoginMode}
        onChangeEmail={handleEmailChange}
        onChangePassword={handlePasswordChange}
        onGoogleAuth={handleGoogleAuth}
      />
    </form>
  )
}
