import { v4 as uuidv4 } from 'uuid'
import { STORAGE_AUTH_TOKEN_NAME } from '../constants'

const newToken = uuidv4()
const authToken = localStorage.getItem(STORAGE_AUTH_TOKEN_NAME) || newToken
const mockUserCredentials =
  localStorage.getItem(authToken) ||
  (() => {
    const data = JSON.stringify({
      email: `${uuidv4()}@test.com`,
      password: uuidv4(),
    })
    localStorage.setItem(STORAGE_AUTH_TOKEN_NAME, authToken)
    localStorage.setItem(authToken, data)
    return data
  })()
export const mockUser = {
  ...JSON.parse(mockUserCredentials),
  name: 'Admin',
  role: 'user',
}
