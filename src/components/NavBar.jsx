import React from 'react'

function NavBar() {
  return (
    <nav className='bg-neutral-800 p-4 w-full flex justify-center items-center gap-3 shadow-md'>
      <img width="20" src="/image/duckdo_512.png" alt="duckdo logo" />

        <h1 className='text-xl font-semibold'>DuckDo!</h1>
    </nav>
  )
}

export default NavBar