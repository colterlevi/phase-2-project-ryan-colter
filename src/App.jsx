import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import Leaderboard from './components/Leaderboard'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useNavigate,
  Link
} from "react-router-dom"
import { slide as Menu } from 'react-burger-menu'


const App = () => {
  const [questions, setQuestions] = useState([])
  const [category, setCategory] = useState("history")
  const [user, setUser] = useState({})
  // const navigate = useNavigate()
  
  const HamburgerMenu = ({router}) => {
    return (
      <Menu>
       <h3>Home</h3>
       <h3>Login</h3>
       <h3>Register</h3>
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
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Questions />,
    },
    {
      path: "/register",
      element: <Register setUser={setUser} user={user}/>,
    },
    {
      path: "/login",
      element: <Login setUser={setUser} user={user}/>,
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
