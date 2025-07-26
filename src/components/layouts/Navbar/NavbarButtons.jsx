import { PATHS } from '@/constants'
import { Link } from 'react-router'
import { Button } from '@/components'
import { useNavbarContext } from './NavbarContext'
import { FaUserAlt, FaSignOutAlt, FaRegBell } from 'react-icons/fa'

export default function NavbarButtons() {
  const { isProfile, profileImage, profileName, logout } = useNavbarContext()

  return (
    <div className="inline-flex items-center gap-2">
      <Button className="btn-ghost btn-circle">
        <div className="indicator">
          <FaRegBell />
          <span className="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </Button>
      {isProfile && (
        <div className="dropdown dropdown-end">
          <Button tabIndex={0} className="btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {profileImage ? (
                <img title="user avatar" src={profileImage} />
              ) : (
                <FaUserAlt className="w-full h-auto" />
              )}
            </div>
          </Button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="w-full">
              <Link
                className="inline-flex justify-between max-w-full"
                to={PATHS.profile}
              >
                <span className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis">
                  {profileName}
                </span>
                <FaUserAlt />
              </Link>
            </li>
            <li>
              <Button onClick={logout} className="inline-flex justify-between">
                Logout <FaSignOutAlt />
              </Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
