import React from 'react'

// Import Icons
import { BsTrash } from 'react-icons/bs'
import { MdCheckBoxOutlineBlank } from 'react-icons/md'
import { MdCheckBox } from 'react-icons/md'
import { GiPlasticDuck } from 'react-icons/gi'

// Import Components


function Task(props) {

  const styleDone = ' flex items-center bg-neutral-800 rounded-lg shadow-md p-4 gap-5 opacity-30 line-through'
  const style = ' flex items-center bg-neutral-800 rounded-lg shadow-md p-4 gap-5 '

  return (
    <div onDoubleClick={() => props.handleToggleFavorite(props.index)} className={props.done ? styleDone : style}>
      <div className='hover:cursor-pointer' onClick={() => props.handleTaskCheckbox(props.index)}>

        {props.done ? <MdCheckBox className='text-2xl text-blue-600' /> : <MdCheckBoxOutlineBlank className='text-2xl text-neutral-500' />}

      </div>

      <p className='break-all grow text-neutral-300'>{props.text}</p>

      <div >
        {props.isFavorite ?  <div className='w-5'><img className='min-w-full' src="/image/duckdo_512.png" alt="duckdo logo" /> </div>:
          <></>}
      </div>

      <div>
        <BsTrash onClick={() => props.handleDelete(props.index)} className='text-2xl text-neutral-700 hover:cursor-pointer' />
      </div>

    </div>
  )
}

export default Task