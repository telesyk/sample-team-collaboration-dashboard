import { MIN_EMAIL_LENGTH, MIN_PASSWORD_LENGTH, ERROR } from '@/constants'

export default function formValidate({ email, password }) {
  const isEmailValid =
    typeof email === 'string' &&
    email.length >= MIN_EMAIL_LENGTH &&
    /^[\w.+-]+@([\w-]+\.)+[a-zA-Z]{2,}$/.test(email)

  const isPasswordValid =
    typeof password === 'string' && password.length >= MIN_PASSWORD_LENGTH

  return {
    email: isEmailValid ? null : ERROR.invalid.email,
    password: isPasswordValid ? null : ERROR.invalid.password,
  }
}
