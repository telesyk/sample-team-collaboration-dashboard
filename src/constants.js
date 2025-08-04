export const STORAGE_AUTH_NAME = 'auth'
export const PATHS = {
  home: '/',
  auth: '/auth',
  settings: '/settings',
  profile: '/profile',
}
export const MAIN_MENU = [
  {
    title: 'Settings',
    url: PATHS.settings,
    isAuthorized: true,
  },
  {
    title: 'Profile',
    url: PATHS.profile,
    isAuthorized: true,
  },
  {
    title: 'Authentication',
    url: PATHS.auth,
    isAuthorized: false,
  },
]
export const MIN_PASSWORD_LENGTH = 8
export const MIN_EMAIL_LENGTH = 6
export const ERROR = {
  invalid: {
    email: `Email must be at least ${MIN_EMAIL_LENGTH} characters.`,
    password: `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`,
  },
  empty: {
    email: 'Please, enter a valid email address.',
    password: 'Please, enter a valid password.',
  },
}
export const CONSTRAINT = {
  form: {
    email: 'Email',
    password: 'Password',
    login: 'Login',
    loginWithGoogle: 'Login with Google',
    signup: 'Sign Up',
    authentication: 'Authentication',
  },
}
export const AUTH_MODE = {
  login: 'login',
  signup: 'signup',
}
export const HEADER_TITLE = 'Canban Dashboard'
export const ACTION = {
  AUTH: {
    SET_USER: 'AUTH_SET_USER',
    SET_LOADING: 'AUTH_SET_LOADING',
    SET_ERROR: 'AUTH_SET_ERROR',
    CLEAR_ERROR: 'AUTH_CLEAR_ERROR',
    MODE_LOGIN: AUTH_MODE.login,
    MODE_SIGNUP: AUTH_MODE.signup,
  },
}
