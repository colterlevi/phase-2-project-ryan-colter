import { useState, useEffect } from 'react'
import './App.css'
import Login from './components/Login'


const App = () => {
  const [questions, setQuestions] = useState([])
  const [category, setCategory] = useState("history")
  console.log(category)
  
  useEffect(() => {
    const request = async () => {
      let req = await fetch(`https://the-trivia-api.com/api/questions?categories=${category}&limit=5`)
      let res = await req.json()
      setQuestions(res)
    }
    request()
  },[category])

  const Questions = () => {
    return(
      <div>
        {
        questions.map((q) => {
          return <p >{q.question}</p>
        })
        }

      </div>
    )
  }

  return (
    <div className="App">
      <Questions />
      <button onClick={() => { setCategory('music') }}>Music</button>
      {console.log(category)}
      <Login />
    </div>
  )
}

export default App
