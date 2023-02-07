import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { MdCheckBoxOutlineBlank } from 'react-icons/md'
import {MdCheckBox} from 'react-icons/md'

function Task(props) {

  const styleDone = 'hover:brightness-110 flex items-center bg-neutral-800 rounded-lg shadow-md p-4 gap-5 opacity-30'
  const style = 'hover:brightness-110 flex items-center bg-neutral-800 rounded-lg shadow-md p-4 gap-5 '

  return (
    <div className={props.done ? styleDone : style}>
      <div className='hover:cursor-pointer' onClick={() => props.handleTaskCheckbox(props.index)}>
        {props.done ? <MdCheckBox className='text-2xl text-blue-600' /> : <MdCheckBoxOutlineBlank className='text-2xl text-neutral-500' />}
      </div>
      <p className='break-all grow text-neutral-300'>{props.text}</p>
      <div>
        <BsTrash onClick={() => props.handleDelete(props.index)} className='text-2xl text-neutral-500 hover:cursor-pointer' />
      </div>

    </div>
  )
}

export default Task