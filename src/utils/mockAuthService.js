import { STORAGE_AUTH_NAME } from '../constants'
import { mockUser } from './mockUser'

export function login(email, password) {
  if (email === mockUser.email && password === mockUser.password) {
    localStorage.setItem(STORAGE_AUTH_NAME, mockUser)
    return mockUser
  }
}

export function logout() {
  localStorage.removeItem(STORAGE_AUTH_NAME)
}

export function getCurrentUser() {
  const user = localStorage.getItem(STORAGE_AUTH_NAME)
  return user ? JSON.parse(user) : null
}
