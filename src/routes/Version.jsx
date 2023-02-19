import React from 'react'

function Version() {
  return (
<div className=' mt-16 w-full p-4 flex flex-col gap-5 items-center justify-center'>

    <p className='text-xl font-semibold '>Versionshinweise</p>

    <div className='w-full lg:w-1/2 p-4 rounded-md bg-neutral-800 shadow-md'>
      <p className='font-semibold '>18.02.2023:</p>
          <ul className='list-disc p-4'>
            <li>Seite "Versionshinweise" erstellt</li>
            <li>Navigation angepasst</li>
          </ul>
    </div>

    <div className='w-full lg:w-1/2 p-4 rounded-md bg-neutral-800 shadow-md'>
          <p className='font-semibold '>17.02.2023:</p>
          <ul className='list-disc p-4'>
            <li>doubleTap auf eine Aufgabe um Prio zu ändern.</li>
            <li>PrioIcon zu AppIcon geändert</li>
            <li>Bugfix: PrioIcon ändert größe.</li>
          </ul>
    </div>

</div>
  )
}

export default Version