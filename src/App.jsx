import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Leaderboard from './components/Leaderboard'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useNavigate
} from "react-router-dom"
import { slide as Menu } from 'react-burger-menu'


const App = () => {
  const [questions, setQuestions] = useState([])
  const [category, setCategory] = useState("history")
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  // const navigate = useNavigate()
  
  const HamburgerMenu = () => {
    return (
      <Menu>
        <li>home</li>
        <li>login</li>
      </Menu>
    );
  }
  
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
        <button onClick={() => { setCategory('music') }}>Music</button>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Questions />,
    },
    {
      path: "/login",
      element: <Login setUser={setUser} user={user} password={password} setPassword={setPassword}/>,
    },
    {
      path: "/leaderboard",
      element: <Leaderboard />,
    },
  ]);

  return (
    <div className="App">
      <Header />
      <HamburgerMenu />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
