import React from 'react'
import { Link, Route, Routes } from "react-router-dom"

function NavMenuElement(props) {
  return (
        <>
        <Link className='text-neutral-300 flex items-center gap-3 p-2 py-3 hover:bg-neutral-800 rounded-md' to={props.path} onClick={() => props.toggleMenu()}>
            {props.icon}
            {props.elementName}
            
        </Link>
        <hr className='border-neutral-800 border-1'/>
        </>


    
  )
}

export default NavMenuElement