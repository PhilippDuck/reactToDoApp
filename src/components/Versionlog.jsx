import React from 'react'

function Versionlog(props) {
  return (
    <div className='w-full lg:w-1/2 p-4 rounded-md bg-neutral-800 shadow-md'>
          <p className='text-neutral-300 font-semibold '>{props.date}</p>
          <p className='text-neutral-500 text-xs'>v{props.version}</p>
          <ul className='text-neutral-400 list-disc pl-4 mt-3'>
            {
                props.changes.map((e, index) => {
                    return <li key={index}>{e}</li>
                })
            }
          </ul>
    </div>
  )
}

export default Versionlog