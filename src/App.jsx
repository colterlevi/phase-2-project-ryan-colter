import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
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
      <Header />
      <Questions />
      <button onClick={() => { setCategory('music') }}>Music</button>
      {console.log(category)}
      <Login />
    </div>
  )
}

export default App
