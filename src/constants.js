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
export const ERROR = {
  invalid: {
    email: 'Invalid email! Please, try you have registered.',
    password: "Invalid password! Use the one you've registered.",
    credentials: '❌ Invalid credentials!',
    general: '📝 Check console log for more details!',
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
