import React from 'react'
import { useEffect } from 'react'

import Task from './Task'
import NewTaskForm from './NewTaskForm'


function Content() {

  let tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks'));
  if (tasksFromLocalStorage === null) tasksFromLocalStorage = [];

  const [tasks, setTasks] = React.useState(tasksFromLocalStorage)
  const [newTaskInputValue, setNewTaskInputValue] = React.useState("")

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
        return [...prevTasks, { 'text': newTaskInputValue, 'done': false, 'isFavorite': false }]

      })
      setNewTaskInputValue("")
    }
  }

  function handleTaskCheckbox(taskIndex) {
    setTasks(prevTasks => {
      return prevTasks.map((task, index) => {
        if (taskIndex !== index) {
          return task;
        } else {
          return { 'text': task.text, 'done': !task.done, 'isFavorite': task.isFavorite }
        }
      })
    })
  }

  function handleToggleFavorite(taskIndex) {
    setTasks(prevTasks => {
      return prevTasks.map((task, index) => {
        if (taskIndex !== index) {
          return task;
        } else {
          return { 'text': task.text, 'done': task.done, 'isFavorite': !task.isFavorite }
        }
      })
    })
  }

  function handleDelete(indexToRemove) {
    setTasks(prevTasks => {
      return prevTasks.filter((taskObj, index) => {
        return index !== indexToRemove;
      })
    })
  }

  function deleteAllDoneTasks() {
    setTasks(prevTasks => {
      return prevTasks.filter((task, index) => {
        return !task.done;
      })
    })
  }

  const numberTotalTasks = Object.keys(tasks).length;
  const numberDoneTasks = Object.keys(tasks.filter(t => (t.done))).length;


  function getTask(task, index) {
    return <Task text={task.text}
      done={task.done}
      key={index}
      isFavorite={task.isFavorite}
      handleDelete={() => handleDelete(index)}
      handleTaskCheckbox={() => handleTaskCheckbox(index)}
      handleToggleFavorite={() => handleToggleFavorite(index)}
    />
  }

  return (
    <>
    <div className='mt-16  w-full lg:w-1/2 fixed'>
      <NewTaskForm 
        newTaskInputValue={newTaskInputValue}
        handleInputChange={handleInputChange}
        handleKeyDown={handleKeyDown}
        addTask={addTask}
      />
      </div>
    <div className='mt-20 flex flex-col gap-4 w-full px-4 lg:w-1/2'>
      

      

      <div className=' flex flex-col gap-3 mt-16'>
      {tasks.map((task, index) => {
          if (task.isFavorite &&! task.done) {
            return getTask(task, index)
          }
        })}
        {tasks.map((task, index) => {
          if (task.done === false &&! task.isFavorite) {
            return getTask(task, index)
          }
        })}
      </div>

      {
      numberDoneTasks > 0 ? 
      <div className='flex justify-between'>
        <h1 className='text-neutral-600 font-semibold'>Beendet:</h1> 
        <button onClick={deleteAllDoneTasks} className='text-neutral-700 font-light hover:text-neutral-500'>erledigte Aufgaben löschen</button></div>: 
        <h1 className='text-neutral-600 font-semibold'></h1>
      }

      <div className='flex flex-col gap-3'>
        {tasks.map((task, index) => {
          if (task.done) {
            return getTask(task, index)
          }
        })}
      </div>

    </div>
    </>
  )
}

export default Content