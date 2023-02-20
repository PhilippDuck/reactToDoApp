import React from 'react'
import { useParams } from 'react-router-dom'

function Tasklist() {
    const {id} =  useParams()
    return (
        <div className='flex h-screen justify-center items-center'>Taskliste {id}</div>
    )
}

export default Tasklist