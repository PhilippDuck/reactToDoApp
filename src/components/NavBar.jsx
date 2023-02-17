import React from 'react'
import { MdMenu } from 'react-icons/md'

function NavBar(props) {
  return (
    <nav className='fixed bg-neutral-800 p-4 w-full flex justify-center items-center gap-3 shadow-md'>
      <img width="20" src="/image/duckdo_512.png" alt="duckdo logo" />

        <h1 className='text-xl font-semibold'>DuckDo!</h1>
        <MdMenu onClick={props.toggleMenu} className='absolute right-5 text-4xl text-neutral-400 hover:cursor-pointer'/>
    </nav>
  )
}

export default NavBar