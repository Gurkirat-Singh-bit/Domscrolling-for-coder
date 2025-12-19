import React from 'react'
import Logo from './Logo'
import Search from './SearchBar'
import UserMenu from './UserMenu'
import Childern from '../children/Childern'

function Header() {
  return (
    <div className=' '>
      <div className='flex items-center p-5 m-5 space-x-11 justify-between'>

        <Logo/>
        <div className="flex space-x-40 w-full max-w-7xl mx-auto px-24">
             
        <UserMenu/>
        <Search/>
        </div>
        <p>singIn</p>
        <p>singOut</p>
      </div>
        {/* auth actions register component */}

    </div>
  )
}

export default Header