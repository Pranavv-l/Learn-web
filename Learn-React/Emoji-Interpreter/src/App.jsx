import { useState } from 'react'
import './App.css'
import emojiDictionary from './data.jsx'
import Timer from './timer.jsx'

function App() {
  const [meaning, setMeaning] = useState("")
  function getMeaning(event){
    const userInput = event.target.value
    if(emojiDictionary[userInput]){
      setMeaning(emojiDictionary[userInput])
    }else{
      setMeaning("Oopsie even we dunno what that means!")
    }
  }
  
  return (
    <>
      <header>
        <h1> Gen-Z Emoji Interpeter</h1>
      </header>
      <input type="text" onChange={getMeaning}/>
      <p>{meaning}</p>
      <Timer/>
    </>
  )
}


export default App
