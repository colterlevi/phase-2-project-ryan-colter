import { useState, useEffect } from 'react'
import Questions from './Questions'
import Decks from './Decks'
import './App.css'

const App = () => {
  const [questions, setQuestions] = useState([])
  const [category, setCategory] = useState("history")
  
  useEffect(() => {
    const request = async () => {
      let req = await fetch(`https://the-trivia-api.com/api/questions?categories=${category}&limit=5`)
      let res = await req.json()
      setQuestions(res)
    }
    request()
  },[category])

  return (
    <div className="App">
      {/* <Questions setQuestions={setQuestions} questions={questions} /> */}
      <Decks category={category} setCategory={setCategory}/>
    </div>
  )
}

export default App
