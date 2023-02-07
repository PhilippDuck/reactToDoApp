import React from 'react'
import Content from './components/Content'
import NavBar from './components/NavBar'

function App() {
  return (
    
      <main className='flex flex-col text-white items-center gap-5'>
        <NavBar/>
        <Content/>
      </main>
    
  )
}

export default App