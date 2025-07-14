import { v4 as uuidv4 } from 'uuid'
import { STORAGE_AUTH_TOKEN_NAME } from '../constants'

const newToken = uuidv4()
const authToken = localStorage.getItem(STORAGE_AUTH_TOKEN_NAME) || newToken

export const getUserCredentials = () => {
  try {
    const userData = localStorage.getItem(authToken)
    return JSON.parse(userData) // {email, name, password}
  } catch (error) {
    console.error('User not exist ⚠️', error)
  }
}

export const setUserCredentials = params => {
  // params: {email, name, password}

  localStorage.setItem(STORAGE_AUTH_TOKEN_NAME, authToken)
  localStorage.setItem(authToken, JSON.stringify({ ...params }))

  return params
}
