import React from 'react'
import { Link, Route, Routes } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { BsTrash } from 'react-icons/bs'

function NavMenuElement(props) {

  const navigate = useNavigate()

  function handleClick() {
    props.deleteTaskList(props.uuid)
    navigate("/")
    
  }
  return (
<>
        <div className='flex justify-between w-full items-center hover:bg-neutral-800 '>
          <Link className='text-neutral-300 flex grow items-center gap-3 p-2 py-3 ' to={props.path} onClick={() => props.toggleMenu()}>
              {props.icon}
              {props.elementName}
              
          </Link>
          {props.deleteAble ? <BsTrash  className='mr-4 text-2xl text-neutral-700 hover:cursor-pointer' onClick={handleClick}>DEL</ BsTrash > : <p></p>}
          
        </div>
        <hr className='border-neutral-800 border-3'/>
        </>



    
  )
}

export default NavMenuElement