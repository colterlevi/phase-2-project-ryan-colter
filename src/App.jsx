import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import Leaderboard from './components/Leaderboard'
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom"
import { slide as Menu } from 'react-burger-menu'


const App = () => {
  const [questions, setQuestions] = useState([])
  const [category, setCategory] = useState("history")
  const [user, setUser] = useState({})
  
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
      <div className='questions'>
        {
        questions.map((q) => {
          return <p >{q.question}</p>
        })
        }
        <button onClick={() => { setCategory('music') }}>Music</button>
      </div>
    )
  }

  const HamburgerMenu = () => {
    return (
      <Menu>
        <Link to="/">
        <h3>Home</h3>
        </Link>
        <Link to="/login">
        <h3>Login</h3>
        </Link>
        <Link to="/register">
        <h3>Register</h3>
        </Link>
        <Link to="/leaderboard">
        <h3>Leaderboard</h3>
        </Link>
      </Menu>
    );
  }

  return (
      <BrowserRouter>
        <HamburgerMenu />
        <Header />
        <Routes>
          <Route path="/" element={<Questions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
