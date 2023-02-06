import React from 'react'
import Content from './components/Content'
import NavBar from './components/NavBar'

function App() {
  return (
    
      <main className='flex flex-col bg-slate-900 text-white h-screen items-center gap-5'>
        <NavBar/>
        <Content/>
      </main>
    
  )
}

export default App