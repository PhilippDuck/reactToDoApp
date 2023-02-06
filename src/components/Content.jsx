import React from 'react'
import { useEffect } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import Task from './Task'

function Content() {


  let tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks'));
  if (tasksFromLocalStorage === null) tasksFromLocalStorage = [];


  const [tasks, setTasks] = React.useState(tasksFromLocalStorage)
  const [newTaskInputValue, setNewTaskInputValue] = React.useState("")
  let lastItemdeleted = false;



  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function handleInputChange(event) {
    setNewTaskInputValue(event.target.value)
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addTask()
    }
  }

  function addTask() {
    if (newTaskInputValue !== "") {
      setTasks(prevTasks => {
        return [...prevTasks, newTaskInputValue]
  
      })
      setNewTaskInputValue("")
    }
  }

  function handleDelete(indexToRemove) {
    setTasks(prevTasks => {
      return prevTasks.filter((taskObj, index) => {
        return index !== indexToRemove;
      })
    })
  }

  return (
    <div className='flex flex-col gap-3 w-full px-4 lg:w-1/2'>

      <div className='flex items-center gap-3'>
        <input value={newTaskInputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} className='grow bg-transparent border-2 p-2 rounded-lg' type="text" placeholder='Neue Aufgabe...' />
        <button onClick={addTask}><BsPlusLg />
        </button>
      </div>


      <div className='flex flex-col gap-3'>
        {tasks.map((task, index) => {
          return <Task text={task} key={index} handleDelete={() => handleDelete(index)}/>
        })}
      </div>

    </div>
  )
}

export default Content