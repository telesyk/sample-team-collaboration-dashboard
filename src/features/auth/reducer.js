import { ACTION } from '@/constants'

export default function reducer(state, action) {
  switch (action.type) {
    case ACTION.AUTH.SET_USER:
      return { ...state, user: action.payload, isLoading: false }
    case ACTION.AUTH.SET_LOADING:
      return { ...state, isLoading: action.payload }
    case ACTION.AUTH.SET_ERROR:
      return { ...state, error: action.payload }
    case ACTION.AUTH.CLEAR_ERROR:
      return { ...state, error: null }
    default:
      return state
  }
}
