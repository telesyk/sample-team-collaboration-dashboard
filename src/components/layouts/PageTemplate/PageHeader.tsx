import { useAuth } from '@/features'
import {
  Navbar,
  NavbarButtons,
  NavbarMenu,
  NavbarTitle,
} from '@/components/layouts'
import { HEADER_TITLE, MAIN_MENU } from '@/constants'

type User = {
  photoURL?: string | null
  displayName?: string | null
  email?: string | null
}

export default function PageHeader() {
  const auth = useAuth()
  const user = auth?.user as User | undefined
  const logout = auth?.logout
  const photoURL = user?.photoURL
  const displayName = user?.displayName
  const email = user?.email

  return (
    <Navbar
      options={{
        isProfile: !!user,
        menuList: MAIN_MENU,
        profileImage: photoURL ? photoURL : null,
        profileName: displayName ? displayName : email,
        logout,
        title: HEADER_TITLE,
      }}
    >
      <NavbarMenu />
      <NavbarTitle />
      {user && <NavbarButtons />}
    </Navbar>
  )
}
