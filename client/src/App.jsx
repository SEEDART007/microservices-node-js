import React from 'react'
import NavBar from './components/NavBar'
import CreateSnippet from './components/CreateSnippet'

const App = () => {
  return (
    <main className='container max-w-4xl mx-auto'>
      <NavBar/>
      <CreateSnippet/>
    </main>
  )
}

export default App