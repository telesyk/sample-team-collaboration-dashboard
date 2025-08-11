import { FormEventHandler } from 'react'

export interface AppContextType {
  state: any // Replace `any` with a real interface if possible
  handleAppState: React.Dispatch<React.SetStateAction<any>>
}

export type StringFieldType = FormDataEntryValue | null

export type AuthFieldType = {
  email?: StringFieldType
  password?: StringFieldType
}

export type AuthContextType = {
  login?: Function | Object
  logout?: Function | Object
  signup?: Function | Object
  loginWithGoogle?: Function | Object
  isLoading?: boolean
  error?: any
  user?: any
}

export type AuthFormType = {
  constraint: object | any
  authMode: string
  emailRef: object
  passwordRef: object
  formErrors: object
  isLoading: boolean
  handleSubmit: FormEventHandler
  handleEmailChange: FormEventHandler
  handlePasswordChange: FormEventHandler
  handleGoogleAuth: FormEventHandler
  handleTabChange: FormEventHandler
}
