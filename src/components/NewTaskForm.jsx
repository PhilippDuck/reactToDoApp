import React from 'react'
import { BsPlusLg } from 'react-icons/bs'

function NewTaskForm(props) {
    return (
        <div className=' flex items-center gap-3 p-4'>
            <input value={props.newTaskInputValue} onChange={props.handleInputChange} onKeyDown={props.handleKeyDown}
                className='grow bg-neutral-900 border-2 p-2 rounded-lg' type="text" placeholder='Neue Aufgabe...' />
            <button className='bg-blue-700 hover:bg-blue-600 w-11 p-3 justify-center flex items-center rounded-md' onClick={props.addTask}><BsPlusLg />
            </button>
        </div>
    )
}

export default NewTaskForm