import { STORAGE_AUTH_NAME } from '../constants'
import { getUserCredentials } from './mockUser'

export function login(email, password) {
  // if (email === mockUser.email && password === mockUser.password) {
  //   localStorage.setItem(STORAGE_AUTH_NAME, mockUser)
  //   return mockUser
  // }
  const user = getUserCredentials()
  const isAcceptable = user[email] === email && user[password] === password

  if (isAcceptable) {
    localStorage.setItem(STORAGE_AUTH_NAME, JSON.stringify(user))
    console.log('User entered', user)
    return user
  }

  return {
    erroMessage: 'Can not login with your credentials',
  }
}

export function logout() {
  localStorage.removeItem(STORAGE_AUTH_NAME)
}

export function getCurrentUser() {
  const user = localStorage.getItem(STORAGE_AUTH_NAME)
  return user ? JSON.parse(user) : null
}
