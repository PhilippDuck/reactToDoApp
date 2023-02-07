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
        return [...prevTasks, { 'text': newTaskInputValue, 'done': false }]

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
          return { 'text': task.text, 'done': !task.done }
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

  const numberTotalTasks = Object.keys(tasks).length;
  const numberDoneTasks = Object.keys(tasks.filter(t => (t.done))).length;

  return (
    <div className='flex flex-col gap-4 w-full px-4 lg:w-1/2'>

      <NewTaskForm
        newTaskInputValue={newTaskInputValue}
        handleInputChange={handleInputChange}
        handleKeyDown={handleKeyDown}
        addTask={addTask}
      />

      {numberTotalTasks === 0 ? <h1></h1> 
        : <h1 className='flex justify-center text-2xl font-bold'>{numberDoneTasks} / {numberTotalTasks} {numberDoneTasks === numberTotalTasks ? "👍" : ""}</h1>}


      <div className='flex flex-col gap-3'>
        {tasks.map((task, index) => {
          if (task.done === false) {
            return <Task text={task.text}
              done={task.done} key={index}
              handleDelete={() => handleDelete(index)}
              handleTaskCheckbox={() => handleTaskCheckbox(index)} />
          }
        })}
      </div>

      {numberDoneTasks > 0 ? <h1 className='text-neutral-600 font-semibold'>Beendet:</h1> : <h1 className='text-neutral-600 font-semibold'></h1>}

      <div className='flex flex-col gap-3'>
        {tasks.map((task, index) => {
          if (task.done) {
            return <Task text={task.text}
              done={task.done} key={index}
              handleDelete={() => handleDelete(index)}
              handleTaskCheckbox={() => handleTaskCheckbox(index)} />
          }
        })}
      </div>

    </div>
  )
}

export default Content