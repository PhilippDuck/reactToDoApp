import React from 'react'
import Content from './components/Content'
import NavBar from './components/NavBar'
import { MdOutlineClose } from 'react-icons/md'
import { useState } from 'react'
import { Link, Route, Routes } from "react-router-dom"
import Version from './routes/Version'
import NavMenuElement from './components/NavMenuElement'
import { FaTasks } from 'react-icons/fa'
import { ImInfo } from 'react-icons/im'
import { RiTodoLine } from 'react-icons/ri'
import Tasklist from './components/Tasklist'


function App() {

  const [menuVisible, setMenuVisible] = useState(false)

  const [tasklists, setTasklists] = useState([])

  function addTasklist(name) {
    setTasklists(prevTasklists => {
      return [...prevTasklists, { 'name': name, }]
    })
  }

  function toggleMenu() {
    setMenuVisible(prev => {
      return !prev;
    })
  }

  return (

    <main className='flex flex-col text-white items-center gap-5'>

      <NavBar toggleMenu={toggleMenu} />

      <div className={menuVisible ? 'fixed z-50 overflow-hidden bg-neutral-900 animate-openmenu  brightness-110 w-2/3 lg:w-1/5   right-0 h-screen p-4 transition-all ease-in-out duration-100' : 'z-50 fixed overflow-hidden right-0 transition-all ease-in-out duration-100  w-0   h-full py-4'}>
        
        <div className='w-full flex justify-between items-center pr-2'>
          <button onClick={() => addTasklist("Testliste")} className='px-2 py-1 rounded-md ml-2 bg-blue-700 hover:bg-blue-600'>hinzufügen</button>
          
          <MdOutlineClose onClick={toggleMenu} className='text-neutral-400 text-4xl hover:cursor-pointer ' />
        </div>
        
        

        <div className='flex flex-col mt-5'>
          <NavMenuElement icon={<FaTasks/>} path="/" elementName="Meine Aufgaben" toggleMenu={() => toggleMenu()}/>
          {tasklists.map((list, index) => {
            return <NavMenuElement key={index} icon={<RiTodoLine/>} path={"/tasklist/" + index} elementName={list.name + " " + index} toggleMenu={() => toggleMenu()}/> 
          })}
          
          <NavMenuElement icon={<ImInfo/>} path="/version" elementName="Versionshinweise" toggleMenu={() => toggleMenu()}/>      
        </div>

      </div>

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/version" element={<Version />} />
        <Route path="/tasklist/:id" element={<Tasklist />} />
      </Routes>

    </main>


  )
}

export default App