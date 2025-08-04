import { TabNav } from '@/components'
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
      <TabNav
        tabs={[
          { id: AUTH_MODE.login, label: constraint.login },
          { id: AUTH_MODE.signup, label: constraint.signup },
        ]}
        activeTab={authMode}
        onTabChange={handleTabChange}
      />
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
