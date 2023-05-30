import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
      
      <h1>App padre</h1>

      <Card/>
        

    </div>
 
    </>
  )
}

export default App
