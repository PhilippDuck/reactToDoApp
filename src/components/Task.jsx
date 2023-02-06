import React from 'react'
import {BsTrash} from 'react-icons/bs'

function Task(props) {
  return (
    <div className='flex items-center bg-slate-800 rounded-lg shadow-md p-4 gap-5 justify-between'>
        <p className='break-all'>{props.text}</p>
        <div>
        <BsTrash onClick={() => props.handleDelete(props.index)} className='text-2xl text-slate-400 hover:cursor-pointer'/>
        </div>
        
    </div>
  )
}

export default Task