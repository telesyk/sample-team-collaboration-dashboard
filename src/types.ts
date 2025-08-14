import { FormEventHandler, RefObject } from 'react'

export interface AppContextType {
  state: any // Replace `any` with a real interface if possible
  handleAppState: React.Dispatch<React.SetStateAction<any>>
}

export type StringFieldType = FormDataEntryValue | null

export type AuthFieldType = {
  email?: StringFieldType
  password?: StringFieldType
}

export type BooleanProp = boolean | undefined

export type FunctionType = Function | Object | undefined

export type EventHandlerType = React.FormEventHandler<
  HTMLButtonElement | HTMLInputElement
>

export type AuthContextProps = {
  login?: FunctionType
  logout?: FunctionType
  signup?: FunctionType
  loginWithGoogle?: EventHandlerType
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
  handleGoogleAuth: EventHandlerType | undefined
  handleTabChange: FunctionType
}

export type NavbarItemProps = {
  title: string
  url: string
  isAuthorized: boolean
}

export type NavbarOptionsProps = {
  menuList?: Array<NavbarItemProps>
  isProfile?: boolean
  profileImage?: string
  profileName?: string
  title?: string
  logout?: () => void
}
