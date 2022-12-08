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
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const request = async () => {
      let req = await fetch('http://localhost:3000/users')
      let res = await req.json()
      setUsers(res)
    }
    request()
  },[setUsers])
  console.log(users)  
  
  useEffect(() => {
    const request = async () => {
      let req = await fetch(`https://the-trivia-api.com/api/questions?categories=${category}&limit=5`)
      let res = await req.json()
      setQuestions(res)
    }
    request()
  },[category])

  return (
      <BrowserRouter>
        <HamburgerMenu />
        <Header currentUser={currentUser} loggedIn={loggedIn} setCurrentUser={setCurrentUser} setLoggedIn={setLoggedIn}/>      
        <Routes>
        <Route path="/" element={<Decks category={category} setCategory={setCategory} />} />
        <Route path="/game" element={<Questions currentUser={currentUser} questions={questions} />} />
          <Route path="/login" element={<Login users={users} setCurrentUser={setCurrentUser} setLoggedIn={setLoggedIn}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
