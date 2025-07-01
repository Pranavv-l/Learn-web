import { useState } from 'react'
import './App.css'
import './data.jsx'

function App() {
  const [input, setInput] = useState("")

  return (
    <>
      <header>
        <h1> Gen-Z Emoji Interpeter</h1>
      </header>
      <input type="text" id='inputVal' onChange={()=>{<data value = {inputVal.value}/>}}/>
      <p>{input}</p>
    </>
  )
}

export default App
