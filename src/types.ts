import { FormEventHandler, RefObject } from 'react'

export interface AppContextType {
  state: any // Replace `any` with a real interface if possible
  handleAppState: React.Dispatch<React.SetStateAction<any>>
}

export type StringFieldType = FormDataEntryValue | null

export type AuthFieldProps = {
  email?: StringFieldType
  password?: StringFieldType
}

export type BooleanProp = boolean | undefined

export type CustomMouseEvent = MouseEvent | Function | undefined

export type CustomTabEvent = (tabId?: string) => void

export type CustomEventHandler =
  | React.FormEventHandler<HTMLButtonElement | HTMLInputElement>
  | undefined

export type AuthContextProps = {
  login?: CustomMouseEvent
  logout?: CustomEventHandler
  signup?: CustomMouseEvent
  loginWithGoogle?: CustomEventHandler
  isLoading?: BooleanProp
  error?: Object | null
  user?: Object | null
}

export interface AuthFormInterface {
  emailRef: RefObject<HTMLInputElement | null> | any
  passwordRef: RefObject<HTMLInputElement | null> | any
  formErrors: Record<string, string>
  constraint: Record<string, string>
  isLoading: BooleanProp
}

export interface AuthFormProps extends AuthFormInterface {
  authMode: string
  handleSubmit: FormEventHandler
  handleEmailChange: FormEventHandler
  handlePasswordChange: FormEventHandler
  handleGoogleAuth: CustomEventHandler
  handleTabChange: CustomTabEvent
}

export type NavbarItemProps = {
  title: string
  url: string
  isAuthorized: boolean
}

export type NavbarOptionsProps = {
  menuList?: Array<NavbarItemProps>
  isProfile?: boolean
  profileImage?: string | null
  profileName?: string | null
  title?: string
  logout?: CustomEventHandler
}
