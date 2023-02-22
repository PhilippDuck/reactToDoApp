import React from 'react'
import { useParams } from 'react-router-dom'
import { Link, Route, Routes } from "react-router-dom"
import { useLocation } from "react-router-dom";

function Tasklist() {
    const {id} =  useParams()



    return (
        <div className='flex flex-col h-screen justify-center items-center'>
            <p>Taskliste {id}</p>
        </div>
        
    )
}

export default Tasklist