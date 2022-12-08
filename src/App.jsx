import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import Leaderboard from './components/Leaderboard'
import HamburgerMenu from './components/HamburgerMenu'
import Questions from './components/Questions'
import Decks from './components/Decks'
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom"



const App = () => {
  const [questions, setQuestions] = useState([])
  const [category, setCategory] = useState("history")
  const [user, setUser] = useState({})
  const [score, setScore] = useState(0)
  
  useEffect(() => {
    const request = async () => {
      let req = await fetch(`https://the-trivia-api.com/api/questions?categories=${history}&limit=5`)
      let res = await req.json()
      setQuestions(res)
    }
    request()
  },[category])
    
 const  [questionsNew, setQuestionsNew] = useState(q)
    setQuestionsNew([...questionsNew, {...questions}])

//     const q = [
//     {
//         question: questions[0],
//         answers: [
//             {key: 'A', choice: questions[0].incorrectAnswers, correct: false},
//             {key: 'B', choice: questions[0].incorrectAnswers, correct: false},
//             {key: 'C', choice: questions[0].incorrectAnswers, correct: false},
//             {key: 'D', choice: questions[0].correctAnswer, correct: true},
//         ]
//     },
//     {
//         question: questions[1],
//         answers: [
//             {key: 'A', choice: questions[1].incorrectAnswers, correct: false},
//             {key: 'B', choice: questions[1].incorrectAnswers, correct: false},
//             {key: 'C', choice: questions[1].incorrectAnswers, correct: false},
//             {key: 'D', choice: questions[1].correctAnswer, correct: true},
//         ]
//     },
//     {
//         question: questions[2],
//         answers: [
//             {key: 'A', choice: questions[2].incorrectAnswers, correct: false},
//             {key: 'B', choice: questions[2].incorrectAnswers, correct: false},
//             {key: 'C', choice: questions[2].incorrectAnswers, correct: false},
//             {key: 'D', choice: questions[2].correctAnswer, correct: true},
//         ]
//     },
//     {
//         question: questions[3],
//         answers: [
//             {key: 'A', choice: questions[3].incorrectAnswers, correct: false},
//             {key: 'B', choice: questions[3].incorrectAnswers, correct: false},
//             {key: 'C', choice: questions[3].incorrectAnswers, correct: false},
//             {key: 'D', choice: questions[3].correctAnswer, correct: true},
//         ]
//     },
//     {
//         question: questions[4],
//         answers: [
//             {key: 'A', choice: questions[4].incorrectAnswers, correct: false},
//             {key: 'B', choice: questions[4].incorrectAnswers, correct: false},
//             {key: 'C', choice: questions[4].incorrectAnswers, correct: false},
//             {key: 'D', choice: questions[4].correctAnswer, correct: true},
//         ]
//     }
// ]



   
  return (
      <BrowserRouter>
        <HamburgerMenu />
        <Header />      
        <Routes>
        <Route path="/" element={<Decks category={category} setCategory={setCategory} />} />
        <Route path="/game" element={<Questions score={score} setScore={setScore} questions={questions} setQuestions={setQuestions} category={category} setCategory={setCategory} />} />
          <Route path="/login" element={<Login user={user} setUser={setUser}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
