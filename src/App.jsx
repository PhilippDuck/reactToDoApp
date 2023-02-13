import React from 'react'
import Content from './components/Content'
import NavBar from './components/NavBar'
import { MdOutlineClose } from 'react-icons/md'
import { useState } from 'react'


function App() {

  const [menuVisible, setMenuVisible] = useState(false)

  function toggleMenu() {
    setMenuVisible( prev => {
      return !prev;
    })
  }

  return (
      
      <main className='flex flex-col text-white items-center gap-5'>
        
        <NavBar toggleMenu={toggleMenu}/>
        <Content/>
        <div className={menuVisible ?  'overflow-hidden bg-neutral-800 animate-openmenu  brightness-110 w-2/3 lg:w-1/5  absolute right-0 h-full p-4 transition-all ease-in-out duration-200' : 'overflow-hidden right-0 transition-all ease-in-out duration-200  w-0 absolute  h-full py-4'}>
          <MdOutlineClose onClick={toggleMenu} className='text-neutral-300 text-4xl hover:cursor-pointer '/>
          <p className='mt-10'>Comming Soon 🏗️</p>
        </div>
        
      </main>
      
    
  )
}

export default App