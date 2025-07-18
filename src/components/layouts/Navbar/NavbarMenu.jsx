import { NavLink } from 'react-router'
import { useNavbarContext } from './NavbarContext'

export default function NavbarMenu() {
  const { menuList } = useNavbarContext()

  return (
    <div className="inline-flex items-center">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {' '}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />{' '}
          </svg>
        </div>
        <nav
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          {menuList.map(menu => (
            <NavLink key={menu.title} to={menu.url}>
              {menu.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  )
}
