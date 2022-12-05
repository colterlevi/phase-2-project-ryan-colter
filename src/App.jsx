import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"


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
      element: <Questions category={category}/>,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
