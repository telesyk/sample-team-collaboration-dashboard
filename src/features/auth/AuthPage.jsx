import { mockUser } from '../../utils'

export default function AuthPage() {
  return (
    <>
      <h1>AuthPage</h1>
      <p>Use next creds:</p>
      <pre className="flex flex-col gap-2">
        <code>{mockUser.email}</code>
        <code>{mockUser.password}</code>
      </pre>
    </>
  )
}
