import { v4 as uuidv4 } from 'uuid'
import { STORAGE_AUTH_NAME, STORAGE_AUTH_TOKEN_NAME } from '../constants'

const authToken = localStorage.getItem(STORAGE_AUTH_TOKEN_NAME) || uuidv4()
const mockUserCredentials =
  localStorage.getItem(authToken) ||
  (() => {
    return JSON.stringify({
      email: `${uuidv4()}@test.com`,
      password: uuidv4(),
    })
  })
const mockUser = {
  ...JSON.parse(mockUserCredentials),
  name: 'Admin',
  role: 'user',
}

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
