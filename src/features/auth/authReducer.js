import { ACTION } from '@/constants'

export default function authReducer(state, action) {
  switch (action.type) {
    case ACTION.SET_USER:
      return { ...state, user: action.payload, isLoading: false }
    case ACTION.SET_LOADING:
      return { ...state, isLoading: action.payload }
    case ACTION.SET_ERROR:
      return { ...state, error: action.payload }
    case ACTION.CLEAR_ERROR:
      return { ...state, error: null }
    default:
      return state
  }
}
