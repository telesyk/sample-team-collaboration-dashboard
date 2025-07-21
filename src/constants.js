export const STORAGE_AUTH_TOKEN_NAME = 'fakeAuthTokenName'
export const STORAGE_AUTH_NAME = 'auth'
export const PATHS = {
  home: '/',
  auth: '/auth',
  settings: '/settings',
  profile: '/profile',
}
export const MAIN_MENU = [
  {
    title: 'Home',
    url: PATHS.home,
  },
  {
    title: 'Settings',
    url: PATHS.settings,
  },
  {
    title: 'Profile',
    url: PATHS.profile,
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
