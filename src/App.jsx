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
        <div className={menuVisible ?  'fixed overflow-hidden bg-neutral-800 animate-openmenu  brightness-110 w-2/3 lg:w-1/5   right-0 h-screen p-4 transition-all ease-in-out duration-100' : 'fixed overflow-hidden right-0 transition-all ease-in-out duration-100  w-0   h-full py-4'}>
          <MdOutlineClose onClick={toggleMenu} className='text-neutral-300 text-4xl hover:cursor-pointer '/>
          <p className='mt-10 font-semibold mb-4'>Changelog:</p>
          <p>17.02.2023:</p>
          <ul>
            <li>- doubleTap auf eine Aufgabe um Prio zu ändern.</li>
            <li>- PrioIcon zu AppIcon geändert</li>
            <li>- Bugfix: PrioIcon ändert größe.</li>
          </ul>
        </div>
        
      </main>
      
    
  )
}

export default App