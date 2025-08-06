import { useAuth } from '@/features'
import {
  Navbar,
  NavbarButtons,
  NavbarMenu,
  NavbarTitle,
} from '@/components/layouts'
import { HEADER_TITLE, MAIN_MENU } from '@/constants'

export default function PageHeader() {
  const { user, logout } = useAuth()

  return (
    <Navbar
      options={{
        isProfile: !!user,
        menuList: MAIN_MENU,
        profileImage: user?.photoURL ? user?.photoURL : null,
        profileName: user?.displayName ? user?.displayName : user?.email,
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
