import { STORAGE_AUTH_NAME } from '../constants'
import { getUserCredentials } from './user-credentials'

export function login(email, password) {
  const user = getUserCredentials()
  const isAcceptable = user.email === email && user.password === password

  if (isAcceptable) {
    localStorage.setItem(STORAGE_AUTH_NAME, JSON.stringify(user))
    return user
  }

  return {
    errorMessage: 'Wrong credentials. Try once more.',
  }
}

export function logout() {
  localStorage.removeItem(STORAGE_AUTH_NAME)
}

export function getCurrentUser() {
  const user = localStorage.getItem(STORAGE_AUTH_NAME)
  return user ? JSON.parse(user) : null
}
