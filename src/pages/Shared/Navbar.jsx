import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { RxAvatar } from "react-icons/rx";
import { FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {

  const { user, logOut, avatarIcon } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(console.log('Successfully LogOut.'))
      .catch(error => console.log(error))
  }
  const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    {/* <li><NavLink to='/blogs'>Blogs</NavLink></li> */}
    {
      !user && <>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
      </>
    }
    {
      user && <>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </>
    }
    {/* <li><NavLink to='/about'>About</NavLink></li> */}
  </>
  const pNavLinks = <>
    {
      user && <>
        <li><NavLink to='/profile'>Profile</NavLink></li>
        <li><NavLink to='/update-profile'>Update Profile</NavLink></li>
      </>
    }
  </>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <Link to='/' className="btn bg-gradient-to-r from-sky-400 to-blue-500 text-xl md:text-2xl text-white">PotteryLane</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
          {navLinks} {pNavLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ?
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" title={user.displayName || user.email} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt={user.email} src={user.photoURL || (avatarIcon && "https://i.ibb.co/ZT5tByN/avatar-15-blue.jpg")} />
                </div>
              </div>
              <ul tabIndex={0} className="mt-3 z-[50] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li className='my-2'>
                  {user.email}
                </li>
                {pNavLinks}
                <li><span onClick={handleLogOut}>LogOut
                  <span className="badge"><FaSignOutAlt /></span>
                </span></li>
              </ul>
            </div>
            :
            <Link to='/login' className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-9 rounded-full">
                  <RxAvatar className='text-4xl' />
                </div>
              </div>
            </Link>
        }
        <div>
          {
            user ? <span onClick={handleLogOut} className='ml-2 btn md:text-lg'>LogOut <FaSignOutAlt className='hidden md:block' /></span> : <Link className='btn md:text-lg' to='/login'>Login</Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;