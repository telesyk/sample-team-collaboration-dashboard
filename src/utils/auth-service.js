import { STORAGE_AUTH_NAME } from '../constants'
import { getUserCredentials } from './user-credentials'
/* demo-only logic */
const DEMO_PASSWORD = 'demo123' // Only for demo
const DEMO_EMAIL = 'demo@mail.com' // Only for demo

export function login(email, password) {
  // const user = getUserCredentials()
  const user = {
    email: DEMO_EMAIL,
    password: DEMO_PASSWORD,
  } // Demo only
  const isAcceptable =
    user && user.email === email && password === user.password

  if (isAcceptable) {
    const fakeToken = 'demo-token-' + Date.now()
    sessionStorage.setItem(
      STORAGE_AUTH_NAME,
      JSON.stringify({ email: user.email, token: fakeToken })
    )
    return { email: user.email, token: fakeToken }
  }

  return {
    errorMessage: 'Wrong credentials. Try once more.',
  }
}

export function logout() {
  sessionStorage.removeItem(STORAGE_AUTH_NAME)
}

export function getCurrentUser() {
  const user = sessionStorage.getItem(STORAGE_AUTH_NAME)
  return user ? JSON.parse(user) : null
}
