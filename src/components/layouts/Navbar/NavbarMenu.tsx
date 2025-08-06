import { NavLink } from 'react-router'
import { useNavbarContext } from './NavbarContext'
import { useAuth } from '@/context'

export default function NavbarMenu() {
  const { menuList } = useNavbarContext()
  const { user } = useAuth()

  const currentMenu = !!user
    ? menuList.filter(menu => menu.isAuthorized)
    : menuList.filter(menu => !menu.isAuthorized)

  return (
    <div className="inline-flex items-center">
      <nav className="menu menu-sm menu-horizontal bg-base-100 rounded-box z-1 p-2 gap-3">
        {currentMenu.map(menu => {
          return (
            <NavLink key={menu.title} to={menu.url}>
              {menu.title}
            </NavLink>
          )
        })}
      </nav>
    </div>
  )
}
