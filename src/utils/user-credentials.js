import { v4 as uuidv4 } from 'uuid'
import { STORAGE_AUTH_TOKEN_NAME } from '../constants'
/* demo-only logic */
const newToken = uuidv4()
const authToken = localStorage.getItem(STORAGE_AUTH_TOKEN_NAME) || newToken

export const getUserCredentials = () => {
  try {
    const userData = localStorage.getItem(authToken)
    // Only return email and name, never password
    const { email, name } = JSON.parse(userData)
    return { email, name }
  } catch (error) {
    console.error('User not exist ⚠️', error)
    return null
  }
}

export const setUserCredentials = params => {
  // params: {email, name}
  localStorage.setItem(STORAGE_AUTH_TOKEN_NAME, authToken)
  localStorage.setItem(
    authToken,
    JSON.stringify({ email: params.email, name: params.name })
  )
  return { email: params.email, name: params.name }
}
