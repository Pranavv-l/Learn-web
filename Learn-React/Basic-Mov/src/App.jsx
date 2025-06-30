import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1 className='text-4xl'>Counter</h1>
       <p>{count}</p>
       <button className='border rounded-md' onClick={()=>{setCount(count+1)}}>+1</button>
    </>
  )
}

export default App
  