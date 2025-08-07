export interface AppContextType {
  state: any // Replace `any` with a real interface if possible
  handleAppState: React.Dispatch<React.SetStateAction<any>>
}

export type AuthFieldType = {
  email?: string | null | undefined
  password?: string | null | undefined
}

export type AuthContextType = {
  login?: Function
  logout?: Function
  signup?: Function
  loginWithGoogle?: Function
  isLoading?: boolean
  error?: any
  user?: any
}
