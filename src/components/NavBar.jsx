import React from 'react'
import { GiPlasticDuck } from 'react-icons/gi'

function NavBar() {
  return (
    <nav className='bg-neutral-800 p-4 w-full flex justify-center items-center gap-3 shadow-md'>
        <GiPlasticDuck className='text-xl text-yellow-400'/>
        <h1 className='text-xl font-semibold'>DuckDo!</h1>
    </nav>
  )
}

export default NavBar